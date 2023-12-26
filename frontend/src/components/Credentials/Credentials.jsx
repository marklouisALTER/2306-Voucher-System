import React from 'react'
import { NavLink } from 'react-router-dom'

export const Credentials = ({emailAddress, confirmPassword, handleForm, handleBack, password, toggle}) => {


    const handleNext = () => {
    if(emailAddress.length === 0 || confirmPassword.length === 0 || password.length === 0){
        alert('Please fill out the form')
    }
    else{
       toggle();
    }
}

  return (
    <div>
        <h1 className='font-secondary text-gray-800'>User Credentials: </h1> 
        <div className='mt-5'>
            <label htmlFor="emailAddress" className='font-secondary text-gray-800'>Email Address :</label>
            <input 
                type="email"
                id='emailAddress'
                name="emailAddress"
                value={emailAddress}
                onChange={handleForm}
                className='border border-gray-400 rounded-md p-1 w-full
                focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-white'
            />
        </div>
        <div className='mt-5'>
            <label htmlFor="password" className='font-secondary text-gray-800'>Password :</label>
            <input 
                type="password"
                id='password'
                name="password"
                value={password}
                onChange={handleForm}
                className='border border-gray-400 rounded-md p-1 w-full
                focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-white'
            />
        </div>

        <div className='mt-5'>
            <label htmlFor="confirmPassword" className='font-secondary text-gray-800'>Confirm Password :</label>
            <input 
                type="password"
                id='confirmPassword'
                name="confirmPassword"
                value={confirmPassword}
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

