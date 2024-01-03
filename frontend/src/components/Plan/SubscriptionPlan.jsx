import React, {useState}from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { Image, Upload, Button } from 'antd'
import { MdOutlineFileUpload } from "react-icons/md";
import qrCode from '../../assets/images/qr.png';

export const SubscriptionPlan = ({handleForm,toggle,reference_num,handleBack}) => {
    
    const [fillUpForm, setFillUpForm] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [selectedPlans, setSelectedPlans] = useState({
        price: 0,
        planName: '',
        plan_creditpoints: 0,
        quantity: 0
    });
    
    const handleFileChange = (info) => {
        if (info.file.status === 'done') {
        const reader = new FileReader();
    
        reader.onload = (e) => {
            // e.target.result contains the base64-encoded file content
            const base64Data = e.target.result.split(',')[1];
            handleForm({ target: { name: 'screenshot', value: base64Data } });
        };
    
        reader.readAsDataURL(info.file.originFileObj);
        }
    };

    const subscription = (price, planName, creditpoints, quantity) => {
        setFillUpForm(true);
        setSelectedPlans({price: price, planName: planName, plan_creditpoints: creditpoints, quantity: quantity});
        // console.log(selectedPlans)
    }

    const selectedPrice = () => {
        return selectedPlans.price * quantity;
    }

    const handleNext = () => {
        if (!reference_num.trim()) {
        alert('Please upload a screenshot and enter a reference number.');
        return; 
        }
        toggle();
    }

    

    return (
        <div className=''>
            <h1 className='text-primary font-primary'>Select Plan :</h1>
            <div className='w-[15rem] md:w-[40rem] lg:w-[40rem] grid grid-cols-1 md:grid-cols-3 gap-3 p-2'>
                <div className='bg-gray-200 rounded-md flex flex-col items-center p-2 gap-2 hover:scale-105
                transition-all delay-50 ease-in-out cursor-pointer'>
                <h1 className='text-xl text-primary font-primary font-semibold'>Basic</h1>
                <h1 className='text-primary text-xl font-secondary'>PHP 200.00<span className='text-sm'>/ 1 mo.</span></h1>
                <h1 className='font-secondary text-xs text-optional font-bold'>Free 5 Credits</h1>
                <button 
                    className='p-1 w-full bg-primary font-secondary text-white rounded-md
                hover:bg-secondary transition-all delay-50 ease-in-out focus:outline-none focus:ring-4
                focus:ring-blue-200'
                    onClick={() => {
                    subscription(200, 'Basic', 5, 1)
                    handleForm({
                        target: {
                        name: "selected_plan",
                        value: "Basic"
                        }
                    })
                    handleForm({
                        target: {
                        name: "plan_creditpoints",
                        value: 5
                        }
                    })
                    handleForm({
                        target: {
                        name: "quantity",
                        value: 1
                        }
                    })
                    handleForm({
                        target: {
                        name: "total_price",
                        value: 200
                        }
                    })
                    setQuantity(1);
                    }}>
                    Select
                </button>
                </div>
                <div className='bg-blue-500 rounded-md flex flex-col items-center p-2 gap-2 hover:scale-105
                transition-all delay-50 ease-in-out cursor-pointer'>
                <h1 className='text-xl text-white font-primary font-semibold'>Standard</h1>
                <h1 className='text-white text-xl font-secondary'>PHP 500.00<span className='text-sm'>/ 1 mo.</span></h1>
                <h1 className='font-secondary text-xs text-white font-medium'>Free 15 Credits</h1>
                <button 
                    className='p-1 w-full bg-primary font-secondary text-white rounded-md border border-transparent
                hover:border-white hover:bg-secondary transition-all delay-50 ease-in-out'
                    onClick={() => {
                    subscription(500, 'Standard', 15, 1)
                    handleForm({
                        target: {
                        name: "selected_plan",
                        value: "Standard"
                        }
                    })
                    handleForm({
                        target: {
                        name: "plan_creditpoints",
                        value: 15
                        }
                    })
                    handleForm({
                        target: {
                        name: "quantity",
                        value: 1
                        }
                    })
                    handleForm({
                        target: {
                        name: "total_price",
                        value: 500
                        }
                    })
                    setQuantity(1);
                    }}
                    
                >
                    Select
                </button>
                </div>
                <div className='bg-gray-200 border rounded-md flex flex-col items-center p-2 gap-2 hover:scale-105
                transition-all delay-50 ease-in-out cursor-pointer'>
                <h1 className='text-xl text-primary font-primary font-semibold'>Business</h1>
                <h1 className='text-primary font-secondary text-center text-xl'>Contact admin</h1>
                <h1 className='font-secondary text-xs text-optional font-bold'>Please talk to customer service</h1>
                <button className='p-1 w-full bg-primary font-secondary text-white rounded-md
                hover:bg-secondary transition-all delay-50 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-200'>Contact</button>
                </div>
            </div>
        
            {fillUpForm && 
            <div>
                <div className='w-[15rem] md:w-[40rem] lg:w-[40rem] grid grid-cols-1 md:grid-cols-2 gap-3 p-2'>
                <div className=''>
                    <h1 className='font-primary text-optional font-medium'>Selected Plan : </h1>
                    <h1 className='p-2 text-2xl font-secondary font-semibold text-primary'>{selectedPlans.planName}</h1>
                    <h1 className='font-primary text-optional font-medium'>Price : </h1>
                    <h1 className='p-2 text-2xl font-secondary font-semibold text-primary'>PHP {selectedPlans.price}</h1>
                    <h1 className='font-primary text-optional font-medium'>Quantity : </h1>
                    <div className='flex items-center p-2'>
                    <button 
                        className='border border-gray-400 p-2 rounded-md text-sm group hover:border-primary
                        focus:outline-none focus:ring-4 focus-blue-100 transition-all delay-50 ease-in-out'
                        onClick={() => {
                        const newQuantity = Math.max(1, quantity - 1)
                        setQuantity(newQuantity);
                        const newTotalPrice = selectedPlans.price * newQuantity;
                        const planCreditPoints = selectedPlans.plan_creditpoints * newQuantity;
                        handleForm({
                            target: {
                            name: 'quantity',
                            value: newQuantity
                            }
                        })
                        handleForm({
                            target: {
                            name: 'plan_creditpoints',
                            value: planCreditPoints
                            }
                        })
                        handleForm({
                            target: {
                            name: 'total_price',
                            value: newTotalPrice.toFixed(2)
                            }
                        })
                        
                        }}>
                        <AiOutlineMinus className='group-hover:text-primary'/>
                    </button>
                    <div className='px-3 font-secondary'>{quantity}</div>
                    <button 
                        className='border border-gray-400 p-2 rounded-md text-sm group hover:border-primary
                        focus:outline-none focus:ring-4 focus-blue-100 transition-all delay-50 ease-in-out'
                        onClick={() => {
                        const newQuantity = Math.max(1, quantity + 1)
                        setQuantity(newQuantity);
                        const newTotalPrice = selectedPlans.price * newQuantity;
                        const planCreditPoints = selectedPlans.plan_creditpoints * newQuantity;
                        handleForm({
                            target: {
                            name: 'quantity',
                            value: newQuantity
                            }
                        })
                        handleForm({
                            target: {
                            name: 'plan_creditpoints',
                            value: planCreditPoints
                            }
                        })
                        handleForm({
                            target: {
                            name: 'total_price',
                            value: newTotalPrice.toFixed(2)
                            }
                        })
                        }}>
                        <AiOutlinePlus className='group-hover:text-primary'/>
                    </button>
                    </div>
                    <h1 className='font-primary text-optional font-medium'>Total Price : </h1>
                    <h1 className='p-2 text-2xl font-secondary font-semibold text-primary'>PHP {selectedPrice().toFixed(2)}</h1>
                </div>
                <div className=''>
                    <h1 className='font-primary text-optional font-medium'>Scan the image : </h1>
                    <h1 className='font-secondary text-xs'>You can click the image to preview</h1>
                    <div className='flex flex-col gap-1 items-center justify-center'>
                    <Image src={qrCode} alt="qrCode" className='w-[15rem] h-[15rem] object-contain'/>
                    <h1 className='font-secondary text-xl text-primary'>QR SCAN (GCASH)</h1>
                    </div>
                </div>
                </div>
                <div className='w-[15rem] md:w-[40rem] lg:w-[40rem] flex flex-col bg-gray-100 p-5'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-xl text-primary'>Fill up the form</h1>
                    <div className='mt-5'>
                    <label htmlFor="registeredAddress" className='font-secondary text-gray-800'>Reference Number :</label>
                    <input 
                        type="text"
                        id='reference_num'
                        name="reference_num"
                        placeholder='Ex: 50142******1'
                        value={reference_num}
                        onChange={handleForm}
                        className='border border-gray-400 rounded-md p-1 w-full
                        focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-white'
                    />
                </div>
                <div className='flex flex-col justify-center items-center mt-5'>
                <h1 htmlFor="" className='font-secondary text-gray-800 py-5'>Screenshot of payment :</h1>
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
                </div>
                <div className='flex flex-col p-5 gap-3'>
                    <button 
                    className='bg-primary w-full p-2 rounded-md text-white font-secondary
                    transition-all delay-50 ease-in-out hover:bg-secondary flex items-center justify-center gap-2
                    focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-white'
                    onClick={handleNext}
                    >
                    Next
                    </button>

                    <button 
                        className='bg-white w-[15rem] p-2 rounded-md text-primary font-secondary border border-transparent
                        transition-all delay-50 ease-in-out hover:border-primary flex items-center justify-center gap-2
                        focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-white'
                        onClick={handleBack}>
                        Back
                    </button>
                </div>
                </div>
                </div> 
            </div>
            }
        </div>
    )
}