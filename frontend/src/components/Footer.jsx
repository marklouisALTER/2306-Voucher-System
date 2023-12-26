import React from 'react'
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className='w-full h-[18rem] bg-primary'>
        <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className='flex flex-col p-5'>
                <h1 className='text-xl font-primary font-medium text-white'>resibopilipinas</h1>
                <p className='font-secondary mt-3 text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae culpa non optio, necessitatibus 
                    magnam maiores animi incidunt iusto vel molestiae velit tenetur asperiores atque voluptatibus.
                </p>
                <h1 className='font-primary mt-3 font-medium text-white'>Follow us</h1>
                <div className='flex items-center py-2 gap-5'>
                    <FaFacebookSquare className='text-xl text-secondary cursor-pointer transition-all delay-75 duration-300 ease-in-out transform hover:scale-125'/>
                    <FaSquareXTwitter className='text-xl text-black cursor-pointer transition-all delay-75 duration-300 ease-in-out transform hover:scale-125'/>
                    <FaYoutube className='text-xl text-red-500 cursor-pointer transition-all delay-75 duration-300 ease-in-out transform hover:scale-125'/>
                </div>
            </div>
            <div className='grid grid-cols-2'>
                <div className='p-5'>
                    <h1 className='font-primary font-medium text-xl text-white'>Browse</h1>
                    <div className='flex flex-col gap-2 mt-3'>
                        <Link 
                            className='font-secondary text-gray-400 hover:text-secondary transition-all delay-75 duration-300 ease-in-out'
                            to={'/'}
                        >
                            Home
                        </Link>
                        <Link 
                            className='font-secondary text-gray-400 hover:text-secondary transition-all delay-75 duration-300 ease-in-out'
                            to={'about-us'}
                        >
                            About Us
                        </Link>
                        <Link 
                            className='font-secondary text-gray-400 hover:text-secondary transition-all delay-75 duration-300 ease-in-out'
                            to={'sign-in'}
                        >
                            Sign In
                        </Link>
                        <Link 
                            className='font-secondary text-gray-400 hover:text-secondary transition-all delay-75 duration-300 ease-in-out'
                            to={'sign-up'} 
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
                <div>
                <div className='p-5'>
                    <h1 className='font-primary text-xl text-white'>Products</h1>
                    <div className='flex flex-col gap-2 mt-3'>
                        <Link 
                            className='font-secondary text-gray-400 hover:text-secondary transition-all delay-75 duration-300 ease-in-out'
                            to={'pricing'}
                        >
                            Plan & Pricing
                        </Link>
                    </div>
                </div>
                </div>
            </div>
            <div className='grid grid-cols-2'>
            <div className='p-5'>
                    <h1 className='font-primary text-white text-xl'>Company</h1>
                    <div className='flex flex-col gap-2 mt-3'>
                        <Link 
                            className='font-secondary text-gray-400 hover:text-secondary transition-all delay-75 duration-300 ease-in-out'
                            to={'contact-us'}
                        >
                            Contact Us
                        </Link>
                        <Link 
                            className='font-secondary text-gray-400 hover:text-secondary transition-all delay-75 duration-300 ease-in-out'
                            to={'about-us'}
                        >
                            About Us
                        </Link>
                    </div>
                </div>
            <div className='p-5'>
                    <h1 className='font-primary text-white text-xl'>Company Address</h1>
                    <div className='flex flex-col gap-2 mt-3'>
                        <Link 
                            className='font-secondary text-gray-400 hover:text-secondary transition-all delay-75 duration-300 ease-in-out'
                            to={'contact-us'}
                        >
                            Address
                        </Link>
                    
                    </div>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-center p-5 bg-primary'>
            <h1 
                className='font-secondary text-gray-600 text-sm mt-10'
            >
                @2023 ResiboPilipinas ALL RIGHT RESERVE
            </h1>
        </div>
    </div>
  )
}
