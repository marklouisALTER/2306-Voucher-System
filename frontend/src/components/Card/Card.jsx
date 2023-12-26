import React from 'react'
import { HiViewGrid } from 'react-icons/hi'
import { Link } from 'react-router-dom'

export const Card = (props) => {
    const IconComponent = props.icon
    
  return (
        <div 
            className='group relative border border-gray-300 rounded-md transition-all delay-100 ease-in-out
            hover:shadow-xl hover:shadow-spread hover:shadow-gray-300 hover:bg-primary'>
          
            <div 
                className='absolute w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem] lg:w-[5rem] lg:h-[5rem] 
                bg-primary top-[-20px] left-[20px] rounded-xl flex items-center justify-center 
                group-hover:w-[3.5rem] group-hover:h-[3.5rem] md:group-hover:w-[5rem] md:group-hover:h-[5rem] 
                lg:group-hover:w-[6rem] lg:group-hover:h-[6rem] transition-all delay-100 ease-in-out group-hover:bg-secondary'>
                    <IconComponent className='transition-all delay-100 ease-in-out text-2xl md:text-4xl lg:text-5xl 
                    group-hover:text-3xl md:group-hover:text-5xl lg:group-hover:text-6xl text-white'
            />
            </div>
                <h1 
                    className='text-right font-secondary transition delay-100 ease-in-out text-sm
                    md:text-md lg:text-xl
                    p-5 group-hover:text-white'>
                        {props.title}
                </h1>

                <h1 
                    className='text-right font-secondary transition delay-100 ease-in-out text-3xl md:text-4xl 
                    lg:text-5xl lg:mt-[50px] font-extrabold mx-5 group-hover:text-white'>
                        {props.value}
                </h1>
                <div className='border-t border-gray-300 w-full mt-5'>
                    <Link 
                        to={props.link}
                        className='flex items-center gap-3 p-3 transition-all delay-100 ease-in-out hover:bg-onMouse'>
                        <HiViewGrid className='transition-all delay-100 ease-in-out text-md md:text-2xl text-primary group-hover:text-secondary'/>
                        <h1 className='transition-all delay-100 ease-in-out font-secondary text-sm md:text-md lg:text-md text-primary group-hover:text-secondary'>View Details</h1>
                    </Link>
                </div>
        </div>
  )
}
