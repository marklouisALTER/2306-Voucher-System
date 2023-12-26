import React from 'react'
import { NavLink } from 'react-router-dom'

export const UserType = ({tin, handleForm, usertype, toggle}) => {

    const handleNext = () => {
        if(tin.length === 0 || usertype.length === 0){
            alert('Please fill out the form')
        }
        else{
           toggle();
        }
    }

  return (
    <div className='flex flex-col items-start gap-5 mt-5'>
        <h1 className='font-secondary text-gray-800'>User Type: </h1> 
        
        <div className="inline-flex items-center ml-5">

            <label
                className="relative flex cursor-pointer items-center rounded-full p-3"
                htmlFor="individual"
                data-ripple-dark="true"
            >
                <input
                    type="radio"
                    id="individual"
                    name="usertype"
                    value="individual"
                    onChange={handleForm}
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full 
                    border border-gray-500 text-blue-500 transition-all before:absolute before:top-2/4 
                    before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 
                    before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 
                    before:transition-opacity checked:border-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                />
                <div 
                    className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-blue-500 opacity-0 
                    transition-opacity peer-checked:opacity-100">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        >
                            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                        </svg>
                </div>
            </label>

            <label
                className="mt-px cursor-pointer select-none font-light text-gray-700"
                htmlFor="individual"
            >
            INDIVIDUAL
            </label>
        </div>

        <div className="inline-flex items-center ml-5">
            <label
                className="relative flex cursor-pointer items-center rounded-full p-3"
                htmlFor="non-individual"
                data-ripple-dark="true"
            >
                <input
                    type="radio"
                    id="non-individual"
                    name="usertype"
                    value="non-individual"
                    onChange={handleForm}
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full 
                    border border-gray-500 text-blue-500 transition-all before:absolute before:top-2/4 
                    before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 
                    before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 
                    before:transition-opacity checked:border-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                    
                />
                <div 
                    className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-blue-500 opacity-0 
                    transition-opacity peer-checked:opacity-100">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        >
                            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                        </svg>
                </div>
            </label>

            <label
                className="mt-px cursor-pointer select-none font-light text-gray-700"
                htmlFor="non-individual"
            >
            NON-INDIVIDUAL
            </label>
        </div>
        <label htmlFor="tin" className='font-secondary text-gray-800'>TIN :</label>
    
            <input 
                type="text"
                id='tin'
                name="tin"
                value={tin}
                maxLength={12} // To allow for hyphens
                onChange={handleForm}
                className='border border-gray-400 rounded-md p-1 w-full
                focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-white'
                placeholder='Ex: 000-000-000-000'
            />
        <button 
            className='bg-primary w-full p-2 rounded-md text-white font-secondary
            transition-all delay-50 ease-in-out hover:bg-secondary flex items-center justify-center gap-2
            focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-white'
            onClick={handleNext}
            >
            {/* <HiOutlineArrowNarrowRight /> */}
            Next
        </button>
            <h1 className='font-secondary text-gray-500'>Already have an account? 
                <NavLink 
                    to={'/sign-in'} 
                    className='text-primary font-semibold pl-1'>
                        Sign In
                </NavLink>
            </h1>
    </div>
  )
}
