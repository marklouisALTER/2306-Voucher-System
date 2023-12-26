import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillHome,AiFillTags } from 'react-icons/ai'
import { FaUsers } from 'react-icons/fa'
import { IoMdCall } from 'react-icons/io'
import { BiLogInCircle } from 'react-icons/bi'
import { HiUserAdd } from 'react-icons/hi'
export const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenu = () => {
        setShowMenu(prevState => !prevState);
    }

  return (
    <div className='fixed w-full z-[20] flex justify-between items-center bg-primary py-5 lg:py-0 px-[2rem] md:px-[5rem] font-secondary'>
        <div>
            <h1 className='text-white'>LoremPilipinas</h1>
        </div>
        <div className='hidden lg:flex items-center gap-3'>

            <NavLink 
                to="." 
                className={({isActive}) => 
                isActive ? 'text-blue-500 border-b-2 border-blue-500 p-5' :
                'text-white hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 p-5'}
            >
                Homepage
            </NavLink>
            {/* <a href='#home' className=''>Home</a>
            <a href='#about' className=''>About us</a> */}
            <NavLink 
                to="about-us"
                className={({isActive}) => 
                isActive ? 'text-blue-500 p-5 border-b-2 border-blue-500' :
                'text-white hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 p-5'}
            >
                    About us
            </NavLink>
            <NavLink 
                to="pricing"
                className={({isActive}) => 
                isActive ? 'text-blue-500 p-5 border-b-2 border-blue-500' :
                'text-white hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 p-5'}
            >
                Pricing
            </NavLink>
            <NavLink 
                to="contact-us"
                className={({isActive}) => 
                isActive ? 'text-blue-500 p-5 border-b-2 border-blue-500' :
                'text-white hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 p-5'}
            >
                Contact us
            </NavLink>
        </div>
        <div className='hidden lg:flex items-center gap-5'>
            <NavLink 
                to="sign-in" 
                className="text-primary bg-white px-5 py-2 rounded-md 
                hover:bg-secondary transition-all delay-100 ease-in-out hover:text-white
                focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 
                focus:ring-offset-white
                ">Sign In</NavLink>
            <NavLink to="/sign-up" className="text-white">Sign Up</NavLink>
        </div>
        <div className='block lg:hidden'>

        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className={`w-6 h-6 ${showMenu ? "text-white" : "text-secondary"} cursor-pointer hover:text-white transition-all
            delay-50 ease-in-out`}
            onClick={handleMenu}
        >
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
            />
        </svg>

        </div>
        <div className={`${showMenu ? "w-[19rem]" : "w-0"} lg:hidden z-[20] absolute bg-white left-0 top-0
        overflow-hidden transition-all delay-50 ease-in-out flex flex-col justify-between py-10`}>
            <div className='row-span-1'>
                <h1 className='text-center'>resibopilipinas</h1>
            </div>
            <div className='row-span-2 flex flex-col gap-3'>
            <NavLink 
                to="." 
                className={({isActive}) => 
                isActive ? 'text-secondary border-r-2 border-secondary p-5 bg-onMouse flex items-center gap-3' :
                'text-primary hover:text-secondary border-r-2 border-transparent hover:border-secondary hover:bg-onMouse p-5 flex items-center gap-3'}
            >
                <AiFillHome className='text-xl'/>
                Homepage
            </NavLink>
            {/* <a href='#home' className=''>Home</a>
            <a href='#about' className=''>About us</a> */}
            <NavLink 
                to="about-us"
                className={({isActive}) => 
                isActive ? 'text-secondary border-r-2 border-secondary p-5 bg-onMouse flex items-center gap-3' :
                'text-primary hover:text-secondary border-r-2 border-transparent hover:border-secondary hover:bg-onMouse p-5 flex items-center gap-3'}
            >
                    <FaUsers className='text-xl'/>
                    About us
            </NavLink>
            <NavLink 
                to="pricing"
                className={({isActive}) => 
                isActive ? 'text-secondary border-r-2 border-secondary p-5 bg-onMouse flex items-center gap-3' :
                'text-primary hover:text-secondary border-r-2 border-transparent hover:border-secondary hover:bg-onMouse p-5 flex items-center gap-3'}
            >
                <AiFillTags className='text-xl'/>
                Pricing
            </NavLink>
            <NavLink 
                to="contact-us"
                className={({isActive}) => 
                isActive ? 'text-secondary border-r-2 border-secondary p-5 bg-onMouse flex items-center gap-3' :
                'text-primary hover:text-secondary border-r-2 border-transparent hover:border-secondary hover:bg-onMouse p-5 flex items-center gap-3'}
            >
                <IoMdCall className="text-xl" />
                Contact us
            </NavLink>
            </div>

            <div className='row-span-2 flex flex-col items-center gap-5'>
            <NavLink 
                to="sign-in" 
                className="text-white bg-primary px-10 py-2 rounded-md
                hover:bg-secondary transition-all delay-100 ease-in-out hover:text-white
                focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 
                focus:ring-offset-white flex items-center gap-3
                ">
                    <BiLogInCircle className='text-xl'/>
                    Sign In
                </NavLink>
            <NavLink 
                to="sign-up" 
                className="text-primary hover:text-secondary transition-all delay-50 ease-in-out
                flex items-center gap-3">
                    <HiUserAdd className="text-xl"/>
                    Sign Up
            </NavLink>
        </div>
        </div>
    </div>
  )
}
