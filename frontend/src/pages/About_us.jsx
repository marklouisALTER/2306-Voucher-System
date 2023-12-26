import React from 'react'
import { About } from '../components/About/About'
import { Meetups } from '../components/About/Meetups'
import { Team } from '../components/About/Team'
import { Footer } from '../components/Footer'
export const About_us = () => {
  return (
    <div>
      <About />
      <Meetups />
      <Team />
      <Footer />
    </div>
  )
}
