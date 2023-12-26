import React from 'react'
import { NavLink } from 'react-router-dom'

export const Address = ({registedAddress, zipCode, handleForm, handleBack, foreignAddress, toggle}) => {


    const handleNext = () => {
    if(registeredAddress.length === 0 || zipCode.length === 0){
        alert('Please fill out the form')
    }
    else{
       toggle();
    }
}

  return (
    <div>
        <h1 className='font-secondary text-gray-800'>User Address: </h1> 
        <div className='mt-5'>
            <label htmlFor="registeredAddress" className='font-secondary text-gray-800'>Registered Address :</label>
            <input 
                type="text"
                id='registeredAddress'
                name="registeredAddress"
                value={registedAddress}
                onChange={handleForm}
                className='border border-gray-400 rounded-md p-1 w-full
                focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-white'
            />
        </div>
        <div className='mt-5'>
            <label htmlFor="zipCode" className='font-secondary text-gray-800'>Zip Code :</label>
            <input 
                type="text"
                id='zipCode'
                name="zipCode"
                value={zipCode}
                onChange={handleForm}
                className='border border-gray-400 rounded-md p-1 w-full
                focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-white'
            />
        </div>

        <div className='mt-5'>
            <label htmlFor="foreignAddress" className='font-secondary text-gray-800'>Foreign Address : 
                <span className='text-gray-500 text-xs'> (Optional)</span>
            </label>
            <input 
                type="text"
                id='foreignAddress'
                name="foreignAddress"
                value={foreignAddress}
                onChange={handleForm}
                className='border border-gray-400 rounded-md p-1 w-full
                focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-white'
            />
        </div>

        <div className='mt-5'>
        <button 
            className='bg-primary w-full p-2 rounded-md text-white font-secondary
            transition-all delay-50 ease-in-out hover:bg-secondary flex items-center justify-center gap-2
            focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-white'
            onClick={handleNext}
            >
            Next
        </button>
        </div>
        <div className='mt-5'>
        <button 
            className='bg-white w-full p-2 rounded-md text-primary font-secondary border border-transparent
            transition-all delay-50 ease-in-out hover:border-primary flex items-center justify-center gap-2
            focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-white'
            onClick={handleBack}
            >
            Back
        </button>
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
