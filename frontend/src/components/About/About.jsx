import React from 'react'
import about_us_img from '../../assets/images/receipt_bg.jpg';
import { RiOrganizationChart,RiUserStarFill  } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";

export const About = () => {
  return (
    <div className='relative h-screen bg-primary w-full px-[2rem] md:px-[5rem] flex flex-col items-center gap-[3rem] overflow-hidden'>
    <div className='flex flex-col items-center mt-10 lg:mt-20'>
      <h1 className='text-xl font-secondary text-secondary'>Get to know us</h1>
      <h1 className='text-white text-4xl md:text-5xl text-center lg:text-5xl font-secondary font-extrabold'>About us</h1>
    </div>
    <div className='w-full mt-2 grid grid-cols-1 lg:grid-cols-3 h-[20rem] gap-10 z-[2]'>
      <div className='col-span-1 flex justify-center items-center'>
        <img 
          src={about_us_img} 
          alt="Company Profile" 
          className='min-w-[20rem] max-w-[30rem] w-full h-auto rounded-md'  
        />
      </div>
      <div className='col-span-2'>
        <div className='h-full grid grid-rows-1 md:grid-rows-2 gap-5'>
          <div className='hidden md:flex justify-between w-full h-10rem gap-10'>
            <div className='border border-transparent bg-secondary w-full rounded-md flex flex-col items-center gap-3 
            justify-center group hover:bg-primary hover:border-secondary transition-all delay-100 ease-in-out cursor-pointer'>
              <RiOrganizationChart className='text-4xl text-primary group-hover:text-secondary transition-all delay-100 ease-in-out'/>
              <div className='flex flex-col justify-center items-center px-5'>
                <h1 className='text-blue-blue-900 font-secondary group-hover:text-secondary transition-all delay-100 ease-in-out font-medium'>Foundation</h1>
                <h1 className='text-gray-200 text-sm font-secondary text-center'>Consists of experts around the country</h1>
              </div>
            </div>
            <div className='border border-transparent bg-secondary w-full rounded-md flex flex-col items-center gap-3 
            justify-center group hover:bg-primary hover:border-secondary transition-all delay-100 ease-in-out cursor-pointer'>
              <FaUsers className='text-4xl text-primary group-hover:text-secondary transition-all delay-100 ease-in-out'/>
              <div className='flex flex-col justify-center items-center'>
                <h1 className='text-blue-blue-900 font-secondary transition-all delay-100 ease-in-out group-hover:text-secondary font-medium'>Company</h1>
                <h1 className='text-gray-200 text-sm font-secondary'>100+ CPA members</h1>
              </div>
            </div>
            <div className='border border-transparent bg-secondary w-full rounded-md flex flex-col items-center gap-3 
            justify-center group hover:bg-primary hover:border-secondary transition-all delay-100 ease-in-out cursor-pointer'>
              <RiUserStarFill className='text-4xl text-primary transition-all delay-100 ease-in-out group-hover:text-secondary'/>
              <div className='flex flex-col justify-center items-center'>
                <h1 className='text-blue-blue-900 font-secondary transition-all delay-100 ease-in-out group-hover:text-secondary font-medium'>Experience</h1>
                <h1 className='text-gray-200 text-sm font-secondary'>10+ years of Experience</h1>
              </div>
            </div>
          </div>
          <div className='md:mt-5'>
            <h1 className='font-secondary text-sm md:text-[17px] text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad voluptatem vero doloremque at vel 
              voluptatum accusantium repudiandae reprehenderit veniam hic. Totam assumenda blanditiis reiciendis, 
              laudantium repellat quod nihil adipisci. Nihil?</h1>
              <button 
                  className='bg-secondary text-white px-10 py-2 mt-5 rounded-md font-secondary font-medium hover:bg-secondary
                  transition-all delay-75 duration-300 ease-in-out transform hover:scale-105 hover:text-white
                  focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-white
                  '>Sign up
              </button>
          </div>
        </div>  
      </div>

    </div>
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
