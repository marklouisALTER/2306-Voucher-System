import React,{useEffect, useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { AiFillDashboard } from 'react-icons/ai'
import { BiSolidReceipt } from 'react-icons/bi'
import { BsPersonFillGear } from 'react-icons/bs'
import { RiBillLine } from 'react-icons/ri'
import { IoExitOutline } from 'react-icons/io5'
import { RiNotification2Fill } from "react-icons/ri";
import { IoFilterSharp } from "react-icons/io5";
import { Authentication } from "../Auth/Authentication"
export const AdminNavbar = () => {

    const {getUser, logout, isAuthenticated} = Authentication();
    const user = getUser();
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const handleMenu = () => {
        setShowMenu(prevState => !prevState);
    }

    useEffect(() => {
        if(!isAuthenticated()) {
            navigate('/sign-in');
        }
    },[logout])

  return (
    <div className='fixed w-full z-[20] flex justify-end items-center py-4 px-[1rem] md:px-[1rem] font-secondary bg-optional'>
        <div className='flex items-center justify-end gap-5'>
            <button className={`relative p-2 hover:bg-primary rounded-md transition-all delay-50 ease-in-out
                cursor-pointer group ${showNotifications ? "bg-primary" : "bg-transparent"}`}
                onClick={() => setShowNotifications(prevState => !prevState)}>
                <RiNotification2Fill className={`text-2xl group-hover:text-secondary ${showNotifications ? "text-secondary": "text-white"}`}/>
                <div className='w-3 h-3 bg-red-500 absolute rounded-full top-2 right-2 border-2 border-gray-200'></div>
            </button>
            <div className=''>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className={`w-7 h-7 ${showMenu ? "text-secondary" : "text-white"} cursor-pointer hover:text-secondary transition-all
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
        </div>
        <div className={`${showMenu ? "w-[19rem]" : "w-0"} z-[20] absolute h-screen bg-primary left-0 top-0
        overflow-hidden transition-all delay-50 ease-in-out flex flex-col justify-between py-5`}>
            <div>
                <h1 className='text-center p-5 text-white'>resibopilipinas</h1>
            </div>
            <div className='flex flex-col gap-3 mt-20 p-3'>
            <NavLink 
                to="."
                end
                className={({isActive}) => 
                isActive ? 'text-white p-5 bg-optional rounded-md flex items-center gap-3' :
                'text-white hover:bg-optional p-5 flex items-center gap-3 rounded-md transition-all delay-50 ease-in-out'}
                onClick={handleMenu}
            >
                <AiFillDashboard className='text-xl'/>
                Dashboard
            </NavLink>
            <NavLink 
                to="voucher"
                className={({isActive}) => 
                isActive ? 'text-white p-5 bg-optional rounded-md flex items-center gap-3' :
                'text-white hover:bg-optional p-5 flex items-center gap-3 rounded-md transition-all delay-50 ease-in-out'}
                onClick={handleMenu}
                
            >
                    <BiSolidReceipt className='text-xl'/>
                    Voucher
            </NavLink>
            <NavLink 
                to="billing"
                className={({isActive}) => 
                isActive ? 'text-white p-5 bg-optional rounded-md flex items-center gap-3' :
                'text-white hover:bg-optional p-5 flex items-center gap-3 rounded-md transition-all delay-50 ease-in-out'}
                onClick={handleMenu}
            >
                <RiBillLine className='text-xl'/>
                Billing
            </NavLink>
            <NavLink 
                to="account"
                className={({isActive}) => 
                isActive ? 'text-white p-5 bg-optional rounded-md flex items-center gap-3' :
                'text-white hover:bg-optional p-5 flex items-center gap-3 rounded-md transition-all delay-50 ease-in-out'}
                onClick={handleMenu}
            >
                <BsPersonFillGear className='text-xl'/>
                Account Settings
            </NavLink>
          </div>

            <div className='mt-auto p-5'>
            <button 
                onClick={logout}
                className='text-white w-full hover:bg-optional p-5 flex items-center gap-3 rounded-md transition-all delay-50 
                ease-in-out'                
            >
                    <IoExitOutline className='text-xl'/>
                    Logout
            </button>
            </div>
        </div>
        {showNotifications && 
            <div className='absolute w-[20rem] h-[35rem] bg-gray-200 p-3 top-[4rem] rounded-md right-[3rem]'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-primary text-primary'>Notifications</h1>
                    <div className=''>
                        <IoFilterSharp className='text-xl text-primary'/>
                    </div>
                </div>
                <div className='mt-5 rounded-md border flex flex-col gap-2'>
                    <div className='h-[7rem] p-2 bg-gray-300'>
                        <div className='flex items-center flex-start gap-2'>
                            {/* <div className='w-7 h-7 bg-primary rounded-full flex items-center justify-center'> */}
                                {/* <h1 className='text-white'>{user.charAt(0).toUpperCase()}</h1> */}
                            {/* </div> */}
                            <div>
                                {/* <h1 className='font-secondary text-sm'>{user}</h1> */}
                                <h1 className='text-xs font-secondary'>December 22, 2023 9:35 AM</h1>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h1 className='text-sm'>System recommend to change your password to your data safety.</h1>
                        </div>
                    </div>
                    <div className='h-[7rem] p-2'>
                        <div className='flex items-center flex-start gap-2'>
                            {/* <div className='w-7 h-7 bg-primary rounded-full flex items-center justify-center'> */}
                                {/* <h1 className='text-white'>{user.charAt(0).toUpperCase()}</h1> */}
                            {/* </div> */}
                            <div>
                                {/* <h1 className='font-secondary text-sm'>{user}</h1> */}
                                <h1 className='text-xs font-secondary'>December 22, 2023 9:35 AM</h1>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h1 className='text-sm'>System recommend to change your password to your data safety.</h1>
                        </div>
                    </div>
                    
                </div>
            </div>
        }
    </div>
  )
}
