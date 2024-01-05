import React, {useEffect, useState} from 'react'
import { Authentication } from '../../Auth/Authentication'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaPesoSign } from "react-icons/fa6";
import { FaCoins } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import qrCode from "../../assets/images/qr.png";
import { Image } from "antd";
import { Upload, Button, Tooltip, Modal } from 'antd';
import { MdOutlineFileUpload } from "react-icons/md";
import { BsQuestionCircleFill } from "react-icons/bs";
import { FaCircleExclamation } from "react-icons/fa6";
import {StatusModal} from '../Modal/StatusModal';
import axios from 'axios';


export const AddCredits = () => {
    
    const { isAuthenticated, getUser, getToken } = Authentication();
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showModalMessage, setShowModalMessage] = useState({
        title: "",
        message: "",
    });
    const [showResponseConfirmation, setShowResponseConfirmation] = useState(false);
    const [loading, setLoading] = useState(false); 
    const [dataForm, setDataForm] = useState({
        credits: 0,
        price: 0,
        reference_num: '',
        screenshot: '',

    });
    const navigate = useNavigate();
    const location = useLocation();
    const user = getUser();
    const token = getToken();
    useEffect(() => {
        if(!isAuthenticated()){
            navigate('/sign-in', { state: { message: "You must login first", from: location.pathname } });
        }
    });

    const handleFileChange = (info) => {
        if (info.file.status === 'done') {
        const reader = new FileReader();
            
        console.log(`File ${info.file.pathname} uploaded successfully`);

        reader.onload = (e) => {
            // e.target.result contains the base64-encoded file content
            const base64Data = e.target.result.split(',')[1];
            handleFormFile({ target: { name: 'screenshot', value: base64Data } });
        };
    
        reader.readAsDataURL(info.file.originFileObj);
        }
    };

    const handleFormFile = (event) => {
        const { name, value} = event.target;
        setDataForm(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmission = async () => {
        const data = {
            email: user,
            credits: dataForm.credits,
            price: dataForm.price,
            reference_num: dataForm.reference_num,
            screenshot: dataForm.screenshot
        }

        console.log(data);
        
        try{
            const response = await axios.post('http://localhost:4000/api/add_credits', data, {
                headers: {
                    Authorization: token
                }
            });
            setLoading(false);
            setShowModalMessage({
                title: response.data.title,
                message: response.data.message
            })
            setShowResponseConfirmation(true);
        }catch(err){
            setLoading(false);
            setShowModalMessage({
                title: err.response.data.title,
                message: err.response.data.message
            })
            setShowResponseConfirmation(true);
        }
    }
    console.log(dataForm)

    return (
        <div className='flex items-center justify-center'>
            <div className='w-[50rem] h-screen m-5 p-5'>
                <div className='flex flex-col items-center'>
                    <h1 className="font-primary text-3xl text-primary">Add more credits</h1>
                    <h1 className='font-secondary text-gray-500 text-sm'>Just put how much you want to buy.</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
                    <div className='relative border-2 rounded-md p-2'>
                        <h1 className='font-secondary text-primary'>Credits: </h1>
                        <div className='font-primary mt-2 font-bold text-4xl text-secondary flex items-end gap-2 justify-end'>
                            <FaCoins className='text-sm text-primary'/>
                            <h1>{dataForm.credits}</h1>
                            <h1 className='text-xs text-primary'>points</h1>
                        </div>
                        <div className='flex items-center justify-end mt-5'>
                            <button 
                                className='border border-gray-400 p-2 rounded-md text-sm group hover:border-primary
                                focus:outline-none focus:ring-4 focus-blue-100 transition-all delay-50 ease-in-out'
                                onClick={()=> {
                                    setDataForm(prevState => ({
                                        ...prevState,
                                        credits: prevState.credits + 1.00,
                                        price: prevState.price + 10.00
                                    }))
                                }}>
                                    <AiOutlinePlus />
                            </button>
                            <div className='px-3 font-secondary'></div>
                            <button 
                                className='border border-gray-400 p-2 rounded-md text-sm group hover:border-primary
                                focus:outline-none focus:ring-4 focus-blue-100 transition-all delay-50 ease-in-out'
                                onClick={
                                    () => {
                                        if(dataForm.credits > 0){
                                            setDataForm(prevState => ({
                                                ...prevState,
                                                credits: prevState.credits - 1.00,
                                                price: prevState.price === 0 ? 0 : prevState.price - 10.00
                                            }))
                                        }
                                    }
                                }
                                >
                                    <AiOutlineMinus />
                            </button>
                        </div>
                            <div className='absolute w-7 h-7 bg-primary inset-0 top-[-13px] rounded-full left-[-13px]
                            flex items-center justify-center'>
                                <h1 className='text-white font-primary'>1</h1>
                            </div>
                    </div>
                    <div className='border-2 p-2'>
                        <h1 className='font-secondary text-primary'>Price: </h1>
                        <div className='font-primary mt-2 font-bold text-4xl text-secondary flex items-end gap-2 justify-end'>
                            <FaPesoSign className='text-sm text-primary'/>
                            <h1>{dataForm.price}</h1>
                            <h1 className='text-xs text-primary'>peso</h1>
                        </div>
                        <div className=''>
                            <h1 className='font-bold italic text-gray-500 text-xs'>Note: </h1>
                            <h1 className='text-xs font-secondary text-gray-500'>That it will 0.01 credit points will deduct each receipt that you generate.</h1>
                        </div>
                    </div>
                </div> 
                <div className='w-full mt-10 grid grid-cols-1 md:grid-cols-2 p-2'>
                    <div className='relative'>
                        <h1 className='font-primary text-optional font-medium'>Scan the image : </h1>
                        <h1 className='font-secondary text-xs'>You can click the image to preview</h1>
                        <div className='flex flex-col gap-1 items-center justify-center'>
                            <Image src={qrCode} alt="qrCode" className='w-[15rem] h-[15rem] object-contain'/>
                            <h1 className='font-secondary text-xl text-primary'>QR SCAN (GCASH)</h1>
                        </div>
                        <div className='absolute w-7 h-7 bg-primary inset-0 top-[-20px] rounded-full left-[-20px]
                            flex items-center justify-center'>
                            <h1 className='text-white font-primary'>2</h1>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="reference_num" className="font-secondary text-primary">Reference number: </label>
                            <input 
                                type='text'
                                id='reference_num'
                                name="reference_num"
                                placeholder='Ex: 50142******1'
                                value={dataForm.reference_num}
                                onChange={handleFormFile}
                                className='border border-gray-400 rounded-md p-1 w-full
                                focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-white'
                            />
                        </div>
                        <div className='flex items-center gap-2 mt-5 mb-2'>
                            <h1 className='text-primary font-secondary'>Upload Image: </h1>
                            <Tooltip title="Upload screenshot of payment that you made.">
                                <BsQuestionCircleFill className='text-secondary text-sm'/>
                            </Tooltip>
                        </div>
                        <Upload
                                listType="picture"
                                accept="image/*"
                                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                name="screenshot"
                                onChange={handleFileChange}
                                className='w-full'
                                >
                                <Button
                                icon={<MdOutlineFileUpload />}>
                                Upload
                                </Button>
                        </Upload>
                        <div className='absolute w-7 h-7 bg-primary inset-0 top-[-20px] rounded-full left-[-20px]
                            flex items-center justify-center'>
                            <h1 className='text-white font-primary'>3</h1>
                        </div>
                    </div>
                </div>
                <div className='mt-5 flex items-center justify-center'>
                    <button
                        className='bg-primary px-5 py-1 text-white rounded-md font-secondary
                        hover:bg-secondary transition-all delay-100 ease-in-out focus:outline-none
                        focus:ring-4 focus:ring-blue-300'
                        onClick={() => setShowConfirmation(prevState => !prevState)}
                    >Buy Credits</button>
                </div>
            </div>
            <Modal 
                title={
                    <div className='flex items-center gap-2'>
                        <FaCircleExclamation className='text-orange-500 text-xl'/>
                        Confirmation
                    </div>
                }
                open={showConfirmation}
                onCancel={() => setShowConfirmation(prevState => !prevState)}
                footer={null}
                width={500}
                >
                    <h1 className='font-secondary py-3'>
                        Are you sure that the all the fields that you enter are correct?
                    </h1>
                    <div className='flex items-center justify-end gap-2'>
                        <button
                            className='bg-primary px-5 py-1 text-white rounded-md font-secondary
                            hover:bg-secondary transition-all delay-100 ease-in-out focus:outline-none
                            focus:ring-4 focus:ring-blue-300'
                            onClick={() => setShowConfirmation(prevState => !prevState)}
                        >No</button>
                        <Button
                            type='danger'
                            className='bg-white px-5 py-1 text-primary rounded-md font-secondary
                            hover:bg-secondary transition-all delay-100 ease-in-out focus:outline-none
                            focus:ring-4 focus:ring-blue-300 hover:text-white'
                            onClick={() => {
                                setLoading(true);
                                handleSubmission();
                            }}
                            loading={false}
                        >Yes</Button>
                    </div>
                </Modal>
            {showResponseConfirmation &&
                <StatusModal 
                    title={showModalMessage?.title} 
                    comment={showModalMessage.message} 
                    toggle={() => {
                        setShowResponseConfirmation(false)
                        if(showModalMessage.title === 'Success'){
                            navigate('../admin/billing');
                        }
                    }} />
            }
        </div>
    )
}
