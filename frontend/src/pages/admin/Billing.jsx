import React, {useEffect, useState} from 'react'
import { Authentication } from '../../Auth/Authentication'
import { useLocation, useNavigate } from 'react-router-dom'
import { Progress, Spin } from 'antd'
import { MdCalendarMonth } from "react-icons/md";
import { FaBoltLightning } from "react-icons/fa6";
import { FaCoins } from "react-icons/fa";
import { PiHandCoinsFill } from "react-icons/pi";
import { FaNewspaper } from "react-icons/fa";
import { IoReceiptSharp } from "react-icons/io5";
import axios from 'axios';
import { TransactionView } from '../../components/Modal/TransactionView';
export const Billing = () => {

  const { isAuthenticated, getUser, logout, getToken } = Authentication();
  const [showPendingTransaction, setShowPendingTransaction] = useState(false);
  const [userBilling, setUserBilling] = useState();
  const [transactionRecord, setTransactionRecord] = useState();
  const [showStatusMessage, setShowStatusMessage] = useState({
    title: '',
    message: ''
  });
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const token = getToken();
  useEffect(() => {
    if(!isAuthenticated()){
      navigate('/sign-in', { state: { message: "You must login first", from: location.pathname } });
    }

    const getSubscriptionPlan = async () => {
      const userInfo = {
        params: {
          email: getUser()
        }
      }
      try{
        const response = await axios.get('http://localhost:4000/api/get_billing', userInfo, {
          headers: {
            Authorization: token
          }
        });
        setUserBilling(response.data.data);
      }catch(err){ 
        setShowStatusMessage({
          title: err.response.data.title,
          message: err.response.data.message
        })
        setShowErrorMessage(true);
      }
    }
    getSubscriptionPlan();
  },[])
  const conicColors = {
    '0%': '#357ae6',
    '100%': '#003554',
  };

  const handleTransactionRecord = async() => {
    setShowPendingTransaction(true);
    const userInfo = {
      params: {
        email: getUser()
      }
    }
    try{
      
      await new Promise(resolve => setTimeout(resolve, 1000));

      const response = await axios.get('http://localhost:4000/api/view_transactions', userInfo, {
        headers: {
          Authorization: token
        }
      });
      setTransactionRecord(response.data.data);
    }catch(err){
      console.log(err.message);
      setShowStatusMessage({
        title: err.response.data.title,
        message: err.response.data.message
      })
      setShowErrorMessage(true);
    }
  }


  // console.log(transactionRecord)
  return (
    <div className='w-full px-5 md:px-10'>
    <h1 className='pt-20 text-2xl text-primary font-primary'>Account Billing</h1>
    <div className='w-full h-full mt-5 grid grid-cols-1 lg:grid-cols-3 gap-5'>
      <div className='w-full h-[35rem] flex flex-col items-center justify-center 
        rounded-xl shadow-xl hover:shadow-spread-md hover:shadow-gray-400 border-b-4
        border-secondary transition-all delay-75 duration-300 ease-in-out 
        transform hover:scale-105'>
          <Progress type="dashboard" percent={userBilling?.creditpercentage} strokeColor={conicColors} size={[250]}/>
          <h1 className='font-primary font-medium text-primary text-xl w-[80%] text-center mt-5'>
            AVAILABLE CREDIT SCORE PERCENTAGE
          </h1>
      </div>
      <div className='col-span-2 grid grid-rows-3 gap-5'>
        <div className=' grid grid-cols-2 lg:grid-cols-3 gap-5'>

            <div className='w-full border-2 rounded-xl p-3'>
              <div className='flex items-center gap-2'>
                <MdCalendarMonth className='text-secondary'/>
                <h1 className='font-secondary text-primary'>Current Subscription Plan</h1>
              </div>
              <div className='flex items-center p-5 gap-5'>
                <FaBoltLightning className='text-3xl text-orange-400'/>
                <h1 className='text-5xl text-primary'>{userBilling?.selected_plan}</h1>
              </div>
            </div>

            <div className='w-full border-2 rounded-xl p-3'>
              <div className='flex items-center gap-2'>
                <PiHandCoinsFill className='text-secondary'/>
                <h1 className='font-secondary text-primary'>Total Credits Available</h1>
              </div>
              <div className='flex items-center p-5 gap-5'>
                <FaCoins className='text-3xl text-orange-400'/>
                <h1 className='text-5xl text-primary'>{userBilling?.available_creditpoints}<span className='text-xl'>/ {userBilling?.plan_creditpoints}</span></h1>
              </div>
              <div className='flex items-center justify-end'>
                <button
                  className='bg-optional text-white font-secondary p-1 px-5 rounded-md
                  hover:bg-secondary transition-all delay-100 ease-in-out focus:outline-none
                  focus:ring-4 focus:ring-blue-300'
                  onClick={() => navigate(`../../add-credits`)}
                >
                  Buy Credits
                </button>
              </div>
            </div>
          
          
            <div className='w-full border-2 rounded-xl p-3'>
              <div className='flex items-center gap-2'>
                <FaNewspaper className='text-secondary'/>
                <h1 className='font-secondary text-primary'>Total Receipt Created</h1>
              </div>
              <div className='flex items-center p-5 gap-5'>
                <IoReceiptSharp className='text-3xl text-orange-400'/>
                <h1 className='text-5xl text-primary'>3</h1>
              </div>
            </div>
          
        </div>
        <div className='row-span-2 grid grid-cols-1 lg:grid-cols-2 gap-5'>
          <div className='border-2 rounded-xl'>
            <div className='bg-primary p-2'>
              <h1 className='text-white font-secondary'>Account Expiration</h1>
            </div>
            <div className='flex flex-col'>
              <div className='flex items-center justify-between p-5'>
                <div className='flex flex-col items-start justify-end gap-3 w-full'>
                  <div className=''>
                    <h1 className='font-primary text-secondary'>Subscription Date Start :</h1>
                    <h1 className='font-secondary text-primary font-medium italic'>{userBilling?.start_date}</h1>
                  </div>
                  <div>
                    <h1 className='font-primary text-secondary'>Subscription Date End :</h1>
                    <h1 className='font-secondary text-primary font-medium italic'>{userBilling?.expiry_date}</h1>
                  </div>
                </div>
                <div className='w-full h-full flex flex-col gap-2'>
                  <div className='flex flex-col items-center justify-center'>
                    <Progress type="circle" percent={userBilling?.remaining_day} format={(percent) => `${percent} Days`} size={[100]} />
                  </div>
                  {/* <h1 className='text-xs font-primary text-primary'>Remaining days:</h1> */}
                </div>
              </div>
              <div className='px-10 ml-auto'>
                <button className='bg-optional text-white font-secondary p-2 px-5 rounded-xl
                  hover:bg-secondary transition-all delay-100 ease-in-out focus:outline-none
                  focus:ring-4 focus:ring-blue-300'>
                  Renew Subscription
                </button>
              </div>
                <div className='p-5 mt-auto'>
                    <h1 className='text-sm font-secondary text-gray-500'>NOTE</h1>
                      <li className='text-xs font-secondary text-gray-500 italic p-2'>
                        This is monthly subscription and it will expired after a month you purchased it. 
                        If you want to renew this just click the button below and if you have problem in your 
                        account contact the customer service. <span className='font-bold'>SO BUY 3 DAYS BEFORE THE DATE OF EXPIRATION</span>.
                      </li>
                </div>
            </div>
          </div>  
          <div className='border-2 rounded-xl'>
            <div className='bg-primary p-2'>
              <h1 className='text-white font-secondary'>Transaction History</h1>
            </div>
              <div className='p-5'>
                <h1 className='text-secondary font-primary'>View All the transaction history</h1>
                <div className='mt-5'>
                  <h1 className='text-primary font-secondary'>No pending transaction</h1>
                </div>
                <div className='flex items-center justify-end mt-5'>
                  <button
                    className='bg-optional text-white font-secondary p-1 px-5 rounded-md
                    hover:bg-secondary transition-all delay-100 ease-in-out focus:outline-none
                    focus:ring-4 focus:ring-blue-300'
                    onClick={handleTransactionRecord}
                    >
                    View All
                  </button>
                </div>
                <div className='mt-5'>
                  <h1 className='text-sm font-secondary text-gray-500'>NOTE</h1>
                    <li className='text-xs font-secondary text-gray-500 italic p-2'>
                      If the transaction is rejected the payment that you paid will return to you.
                      Once you made a transaction you cannot cancel it. If you have problem in your account
                      contact the customer service.
                    </li>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <TransactionView open={showPendingTransaction} close={() => setShowPendingTransaction(false)} transactionInfo={transactionRecord} />
    {showErrorMessage &&
      <StatusModal title={showStatusMessage.title} comment={showStatusMessage.message} toggle={() => setShowErrorMessage(false)}/>
    }
  </div>
  )
}
