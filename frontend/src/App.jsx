import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Homepage } from './pages/Homepage'
import { Layout } from './layout/Layout'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Dashboard } from './pages/admin/Dashboard'
import { AdminLayout } from './layout/AdminLayout'
import { Voucher } from './pages/admin/Voucher'
import { Account } from './pages/admin/Account'
import { About_us } from './pages/About_us'
import { Pricing } from './pages/Pricing'
import { Billing } from './pages/admin/Billing'
import { AddCredits } from './components/Plan/AddCredits'
// import "style.css"
function App() {
  

  // Function to fetch data from the root URL
      
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Homepage title="Voucher | Homepage"/>} />
          <Route path='about-us' element={ <About_us title="Voucher | About Us" /> } />
          <Route path='pricing' element={ <Pricing title="Voucher | Pricing" /> } />
          <Route path='sign-in' element={<Login />} />
          <Route path='sign-up' element={<Register />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />} >
          <Route index element={<Dashboard />} />
          <Route path="voucher" element={<Voucher />} />
          <Route path="billing" element={<Billing />} />
          <Route path="account" element={<Account title="Voucher | Account Settings"/>} />
        </Route>
          <Route path="add-credits" element={<AddCredits />} />
      </Routes>
    </Router>

  )
}

export default App
