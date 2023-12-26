import React from 'react'

export const Meetups = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center gap-[3rem] overflow-hidden'>
        <div className='flex flex-col items-center mt-10 lg:mt-15 px-[2rem] md:px-[5rem]'>
            <h1 className='text-xl font-secondary text-secondary'>Here's some of our event</h1>
            <h1 className='text-primary text-4xl md:text-5xl text-center lg:text-5xl font-secondary font-extrabold'>Meet-ups</h1>
        </div>
        <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 px-5 p-3'>
          <div className='my-5 bg-primary md:rounded-tl-xl md:rounded-bl-xl'>
            
          </div>
          <div className='hidden md:block h-full rounded-xl bg-secondary shadow-md shadow-spread-xl shadow-gray-700'>
            
          </div>  
        </div>
    </div>
  )
}
