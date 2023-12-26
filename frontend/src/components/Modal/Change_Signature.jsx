import React, {useRef, useState} from 'react'
import { Button, Modal, Image } from 'antd'
import SignaturePad from 'react-signature-canvas'
import axios from 'axios';	
import { PiSignatureDuotone } from "react-icons/pi";

export const Change_Signature = ({user, open, cancel, signature}) => {

    const [isSignaturePadOpen, setIsSignaturePadOpen] = useState(false);
    const [isSignatureUpdatedOpen, setIsSignatureUpdatedOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [modalStatus, setModalStatus] = useState(false);
    const [response, setResponse] = useState();
    const [imageURL, setImageURL] = useState(null)
    const sigCanvas = useRef({});

    const clear = () => sigCanvas.current.clear(); 
    const save = () => {
        setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'))
        setIsSignatureUpdatedOpen(prevState => !prevState);
    };

   const handleSubmit = async () => {
        setLoading(true);
        const updateInformation = {
            username: user,
            signature: imageURL
        }
        try{
            const response = await axios.post('http://localhost:4000/api/change_signature', updateInformation)
            
            if(response.data.isSuccess){
                setLoading(false);
                setModalStatus(true);
                setResponse(response.data);
            }else{
                setLoading(false);
                setModalStatus(false);
                setResponse(response.data);
            }
        }catch(err){
            setLoading(false);
            setModalStatus(false);
            setResponse(err);
        }
    };

  return (
    <div>
        <Modal
            title="Change Signature"
            open={open}
            onCancel={cancel}
            width={350}
            cancelButtonProps={{
                hidden: true
            }}
            okButtonProps={{
                hidden: true
            }}
        >
            <div className='mt-5'>
                <h1 className='font-primary'>User Signature :</h1>
                <div className='flex items-center justify-center my-5'>
                    <Image 
                        src={signature}
                        alt='User-Signature'
                    />
                </div>
                <button className='w-full bg-primary p-2 rounded-md text-white font-secondary
                flex items-center justify-center gap-2 hover:bg-secondary transition-all delay-100 
                ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-200'
                onClick={() => setIsSignaturePadOpen(prevState => !prevState)}
                >
                    <PiSignatureDuotone className='text-xl'/>
                    Change Signature
                </button>

                {isSignaturePadOpen &&
                    (
                    <div className='flex flex-col gap-2 mt-5'>
                        <h1 className='font-primary'>New Signature :</h1>
                        <SignaturePad 
                            ref={sigCanvas}
                            canvasProps={{
                                className: "border-2 border-primary rounded-md"
                            }}
                        />
                        <div className='flex items-center justify-center gap-5'>
                            <Button
                                type='primary'
                                className='bg-primary rounded-md text-white font-secondary
                                flex items-center justify-center gap-2 hover:bg-secondary transition-all delay-100 
                                ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-200'
                                onClick={save}>Save
                            </Button>
                            <Button
                                type='default'
                                onClick={clear}>Clear
                            </Button>
                            <Button 
                                type='default'
                                danger
                                onClick={() => setIsSignaturePadOpen(prevState => !prevState)}>Close
                            </Button>
                        </div>
                    </div>  
                    )
                }
            </div>
        </Modal>
        <Modal
            title="Change Signature"
            open={isSignatureUpdatedOpen}
            onCancel={() => setIsSignatureUpdatedOpen(prevState => !prevState)}
            width={350}
            cancelButtonProps={{
                hidden: true
            }}
            okButtonProps={{
                hidden: true
            }}
        >
            <div>
                {imageURL ? (
                    <>
                        <h1 className='font-secondary'>Your Signature: </h1>
                        <img
                            src={imageURL}
                            alt="my signature"
                            className='block mx-0 my-auto border border-gray-300 rounded-xl w-[20rem]'
                        />
                        <Button 
                            type='primary'
                            className='bg-primary w-full p-2 rounded-md text-white font-secondary mt-5
                            transition-all delay-50 ease-in-out hover:bg-secondary flex items-center justify-center gap-2
                            focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-white'
                            onClick={handleSubmit}
                            loading={loading}
                            >
                            Update
                        </Button>
                    </>
                ) : null}
            </div>
        </Modal>
        {modalStatus &&
            <Modal
                title={response?.isSuccess ? 'Success' : 'Error'}
                open={modalStatus}
                // onCancel={() => setModalStatus(false)}
                width={350}
                cancelButtonProps={{
                    hidden: true
                }}
                okButtonProps={{
                    hidden: true
                }}
                footer={[
                    <Button
                        key="submit"
                        type="primary"
                        className='bg-primary rounded-md text-white font-secondary mt-5
                        transition-all delay-50 ease-in-out hover:bg-secondary focus:outline-none 
                        focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-white'
                        onClick={() => {
                            setModalStatus(false);
                            window.location.reload();
                        }}
                    >
                        OK
                    </Button>
                ]}
            >
                <div>
                    <h1 className='font-secondary'>{response?.message}</h1>
                </div>
            </Modal>
        }
    </div>
  )
}
