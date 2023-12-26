import React, {useRef, useState} from 'react'
import Popup from 'reactjs-popup'
import { NavLink } from 'react-router-dom'
import SignaturePad from 'react-signature-canvas'
import { Button } from 'antd'

export const Signature = ({handleBack,formData,submitForm}) => {
    
    const [imageURL, setImageURL] = useState(null)
    const sigCanvas = useRef({});

    const clear = () => sigCanvas.current.clear(); 
    const save = () => setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'));

    const handleSubmit = () => {
        formData(prevState => ({...prevState, signature: prevState.signature = imageURL}))
        submitForm();

    }

    return (
    <div>
    <h1 className='font-secondary text-gray-800'>User Signature: </h1> 
    <div className='flex items-center flex-col justify-center mt-10'>
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
            <>
                <SignaturePad 
                    ref={sigCanvas}
                    canvasProps={{
                        className: "border border-black bg-white"
                    }}
                />
                <button onClick={save}>Save</button>
                <button onClick={close}>Close</button>
                <button onClick={clear}>Clear</button>

            </>  
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
    <div className='mt-5'>
        <button 
            className='bg-primary w-full p-2 rounded-md text-white font-secondary
            transition-all delay-50 ease-in-out hover:bg-secondary flex items-center justify-center gap-2
            focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-white'
            // onClick={() => formData(prevState => ({...prevState, signature: prevState.signature = imageURL}))}
            onClick={handleSubmit}
            >
            Submit
        </button>
        </div>
    <div className='mt-5'>
        <Button 
            className='bg-white w-full p-2 rounded-md text-primary font-secondary border border-transparent
            transition-all delay-50 ease-in-out hover:border-primary flex items-center justify-center gap-2
            focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-white'
            onClick={handleBack}
            >
            Back
        </Button>
        </div>
        <div className='mt-5'>
            <h1 className='font-secondary text-gray-500'>Already have an account? 
                <NavLink 
                    to={'/sign-in'} 
                    className='text-primary font-semibold pl-1'>
                        Sign In
                </NavLink>
            </h1>
        </div>
    </div>
  )
}
