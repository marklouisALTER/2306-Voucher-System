import React,{useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import financeImage from '../assets/images/banner_image.png'
import { Home } from '../components/Home/Home'
import { Advantage } from '../components/Home/Advantage'
import { Testimonies } from '../components/Home/Testimonies'
import { Footer } from '../components/Footer'

export const Homepage = ({title}) => {

  useEffect(() =>{
    document.title = title;
  },[title])

  return (
    <div className='flex flex-col gap-10'>
      <Home />
      <Advantage />
      <Testimonies />
      <Footer />
    </div>
  )
}
