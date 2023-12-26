import React, {useRef, useState, useEffect} from 'react'
import Popup from 'reactjs-popup'
import { NavLink } from 'react-router-dom'
import SignaturePad from 'react-signature-canvas'
import { Button } from 'antd'

export const Signature = ({signature, partySignature, nextHandler, backHandler}) => {
    
    const [imageURL, setImageURL] = useState(null)
    const sigCanvas = useRef({});

    const clear = () => sigCanvas.current.clear(); 
    const save = () => {setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'))};
    
    const submitHandler = () => {
        partySignature(imageURL)
        nextHandler()
    }
    useEffect(() => {
        if (signature !== '') {               
            nextHandler()
        }   
    }, []);
    return (
    <div>        
        <div className='flex items-center flex-col justify-center'>
            <Popup 
                modal 
                trigger={
                <button
                    className='bg-primary w-full p-2 rounded-md text-white font-secondary
                    transition-all delay-50 ease-in-out hover:bg-secondary flex items-center justify-center gap-2
                    focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-white'
                >
                    Open Signature pad
                </button>
                }
                
                closeOnDocumentClick={false}
            >
            {close => (
                <div className='bg-gray-100 p-2 rounded-md'>
                    <SignaturePad 
                        ref={sigCanvas}
                        canvasProps={{
                            className: "border border-black bg-white"
                        }}
                    />
                    <div className='flex gap-4 p-2'>
                        <Button type='primary' onClick={save} className='bg-primary'> Save</Button>
                        <Button onClick={close} className='text-black'> Close</Button>
                        <Button danger onClick={clear} > Clear</Button>
                       
                    </div>                
                </div>  
            )}
            </Popup>
            <br/>
            <br/>
            <div>
            {imageURL ? (
                <>
                    <h1 className='font-secondary'>Your Signature: </h1>
                    <img
                        src={imageURL}
                        alt="my signature"
                        className='block mx-0 my-auto border border-gray-300 rounded-xl w-[20rem]'
                    />
                </>
            ) : null}
            </div>
        </div>
        <div className='flex justify-center items-center mt-4'>
            <Button type="primary" className='bg-blue-500 mr-2'onClick={backHandler}> Back </Button>
            <Button type="primary" className='bg-blue-500' onClick={submitHandler}>Submit</Button>
        </div>
        
        
    </div>
  )
}
