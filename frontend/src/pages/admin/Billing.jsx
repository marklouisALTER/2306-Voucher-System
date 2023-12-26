import React, {useEffect} from 'react'
import { Authentication } from '../../Auth/Authentication'
import { useLocation, useNavigate } from 'react-router-dom'

export const Billing = () => {

  const { isAuthenticated, getUser, logout } = Authentication();
  
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if(!isAuthenticated()){
      navigate('/sign-in', { state: { message: "You must login first", from: location.pathname } });
    }

  },[])

  return (
    <div>Billing</div>
  )
}
