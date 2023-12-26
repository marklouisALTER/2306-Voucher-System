import React from 'react'
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";

export const Testimonies = () => {
  return (
    <div className='w-full px-[2rem] md:px-[5rem] mt-10'>
        <div className='w-full flex flex-col items-center justify-center gap-5'>
            <h1 className='text-primary text-4xl md:text-5xl text-center lg:text-5xl font-primary font-extrabold'>Some happy client testimonies</h1>
            <h1 className='font-secondary text-gray-600'>Read some of our happy clients feedback</h1>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5'>
            <div className='grid grid-row-4 bg-gray-100 rounded-md transition-all delay-100 ease-in-out hover:bg-primary group'>
                <div className='rows-span-3 flex flex-col items-center p-5'>
                <FaQuoteLeft className='text-5xl mr-auto text-primary transition-all delay-100 ease-in-out group-hover:text-secondary'/>
                    <h1 className='font-secondary text-gray-800 transition-all delay-100 ease-in-out group-hover:text-white'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur omnis temporibus dolorem suscipit distinctio iste culpa ut nulla laborum quidem tempora, harum non, perferendis ad possimus quia ipsa! Recusandae, eveniet.
                    </h1>
                <FaQuoteRight className='text-5xl ml-auto text-primary transition-all delay-100 ease-in-out group-hover:text-secondary'/>
                </div>
                <div className='p-5 flex gap-3 items-center'>
                    <div className='relative w-14 h-14 rounded-full'>
                    <img 
                            className='absolute object-cover w-full h-full rounded-full'
                            src={'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'} 
                            alt="PROFILE"
                        />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='font-secondary font-bold text-gray-800 transition-all delay-100 ease-in-out group-hover:text-secondary'>Annie Smith Sy</h1>
                        <h1 className='text-gray-600 text-sm font-secondary transition-all delay-100 ease-in-out group-hover:text-white'>Customer</h1>
                    </div>
                </div>
            </div>
            <div className='grid grid-row-4 bg-gray-100 rounded-md transition-all delay-100 ease-in-out hover:bg-primary group'>
                <div className='rows-span-3 flex flex-col items-center p-5'>
                <FaQuoteLeft className='text-5xl mr-auto text-primary transition-all delay-100 ease-in-out group-hover:text-secondary'/>
                    <h1 className='font-secondary text-gray-800 transition-all delay-100 ease-in-out group-hover:text-white'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur omnis temporibus dolorem suscipit distinctio iste culpa ut nulla laborum quidem tempora, harum non, perferendis ad possimus quia ipsa! Recusandae, eveniet.
                    </h1>
                <FaQuoteRight className='text-5xl ml-auto text-primary transition-all delay-100 ease-in-out group-hover:text-secondary'/>
                </div>
                <div className='p-5 flex gap-3 items-center'>
                    <div className='relative w-14 h-14 rounded-full'>
                    <img 
                            className='absolute object-cover w-full h-full rounded-full'
                            src={'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'} 
                            alt="PROFILE"
                        />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='font-secondary font-bold text-gray-800 transition-all delay-100 ease-in-out group-hover:text-secondary'>Annie Smith Sy</h1>
                        <h1 className='text-gray-600 text-sm font-secondary transition-all delay-100 ease-in-out group-hover:text-white'>Customer</h1>
                    </div>
                </div>
            </div>
            <div className='grid grid-row-4 bg-gray-100 rounded-md transition-all delay-100 ease-in-out hover:bg-primary group'>
                <div className='rows-span-3 flex flex-col items-center p-5'>
                <FaQuoteLeft className='text-5xl mr-auto text-primary transition-all delay-100 ease-in-out group-hover:text-secondary'/>
                    <h1 className='font-secondary text-gray-800 transition-all delay-100 ease-in-out group-hover:text-white'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur omnis temporibus dolorem suscipit distinctio iste culpa ut nulla laborum quidem tempora, harum non, perferendis ad possimus quia ipsa! Recusandae, eveniet.
                    </h1>
                <FaQuoteRight className='text-5xl ml-auto text-primary transition-all delay-100 ease-in-out group-hover:text-secondary'/>
                </div>
                <div className='p-5 flex gap-3 items-center'>
                    <div className='relative w-14 h-14 rounded-full'>
                    <img 
                            className='absolute object-cover w-full h-full rounded-full'
                            src={'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'} 
                            alt="PROFILE"
                        />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='font-secondary font-bold text-gray-800 transition-all delay-100 ease-in-out group-hover:text-secondary'>Annie Smith Sy</h1>
                        <h1 className='text-gray-600 text-sm font-secondary transition-all delay-100 ease-in-out group-hover:text-white'>Customer</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full flex items-center justify-center mt-20'>
            <button 
                className='bg-primary text-white px-10 py-2 rounded-md font-secondary font-medium hover:bg-secondary
                transition-all delay-75 duration-300 ease-in-out transform hover:scale-105 hover:text-white
                focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-white
                mb-20'
            >
                Read more
            </button>
        </div>
    </div>
  )
}
