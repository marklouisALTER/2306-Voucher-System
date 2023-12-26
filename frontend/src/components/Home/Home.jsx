import React from 'react'
import { NavLink } from 'react-router-dom'
export const Home = () => {
  return (
  <div className='relative h-screen bg-primary w-full px-[2rem] md:px-[5rem] flex flex-col items-center gap-[3rem] overflow-hidden'>
    <div className='flex flex-col gap-[2rem] items-center mt-[10rem] md:mt-[10rem]'>
        <h1 className='text-white text-4xl md:text-5xl text-center lg:text-6xl font-primary font-extrabold z-[5]'>Make your reciept <span className='rotate-1'>hassle</span> free</h1>
        <h1 className='text-white text-center font-secondary w-[100%] lg:w-[80%] text-sm lg:text-md z-[5]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt m
            ollit anim id est laborum.</h1>
        <p className='hidden md:block text-white text-center font-secondary w-[100%] lg:w-[50%] text-xs md:text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
    </div>
        <button 
            className='bg-white px-10 py-2 rounded-md font-secondary font-medium hover:bg-secondary
            transition-all delay-75 duration-300 ease-in-out transform hover:scale-105 hover:text-white
            focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-white
            z-[5] mb-20'>Sign up
        </button>
        <div className='absolute inset-0 top-[10rem] left-[7rem] md:top-[10rem] md:left-[20rem] z-[1] rounded-full w-[3rem] h-[3rem] md:w-[7rem] md:h-[7rem]
        bg-gradient-to-r from-primary to-secondary opacity-30
        '>
        </div>
        <div className='absolute inset-0 top-0 left-[-1rem] rounded-full w-[3rem] h-[3rem] md:w-[7rem] md:h-[7rem]
        bg-gradient-to-r from-primary to-secondary opacity-30
        '>
        </div>
        <div className='absolute inset-0 top-0 left-[-1rem] rounded-full w-[10rem] h-[10rem] md:w-[20rem] md:h-[20rem]
        bg-gradient-to-r from-primary to-secondary opacity-30
        '>
        </div>
        <div className='absolute bottom-0 right-[-1rem] rounded-full w-[7rem] h-[7rem] md:w-[15rem] md:h-[15rem]
        bg-gradient-to-r from-primary to-secondary opacity-30
        '>
        </div>
  </div>
  )
}
