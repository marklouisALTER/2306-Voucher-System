import React, { useEffect, useState } from 'react'
import { Card } from '../../components/Card/Card'
import { BiSolidReceipt } from 'react-icons/bi'
import LineChart from '../../components/Chart/LineChart'
import { VoucherCard } from '../../components/Card/voucherCard'
import { Authentication } from '../../Auth/Authentication'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Empty } from 'antd';
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Dashboard = () => {

  const { isAuthenticated, getUser, logout } = Authentication();
  
  
  const navigate = useNavigate();
  const location = useLocation();

  const [voucherData, setVoucherData] = useState([{
    control_no: '',
    created_at: '',
    voucher: null,
  }])

  const [cardData, setCardData] = useState([
    {
      id: 1,
      title: 'Total Receipt',
      value: '20',
      icon: BiSolidReceipt,
      link: '/admin/voucher',
    },
    {
      id: 2,
      title: 'Billing',
      value: '20',
      icon: BiSolidReceipt,
    },
  ]);
  
  useEffect(() => {
    
    if(!isAuthenticated()){
      navigate('/sign-in', { state: { message: "You must login first", from: location.pathname } });
    }
    
  },[])
  
  useEffect(() => {
    const getVouchers = async () => {      
      const response =  await axios.get(`http://localhost:4000/api/get_voucher/${getUser()}`);
      
      if (response.status === 200) {
        const { data } = response
        
        const size = Object.keys(data.voucherData).length;
        
        const newData = [...cardData];
        newData[0] = { ...newData[0], value: size };

        setVoucherData(data.voucherData)
        setCardData(newData);
      }    
    }
    getVouchers()
  }, []);
  
  return (
    <div className='w-full px-5 md:px-10'>
      <h1 className='text-4xl text-primary'>Dashboard</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 w-full mt-[4rem]'>
        <div className='col-span-2'>
            <div className='w-full grid grid-cols-2 p-2 gap-10 mt-10'>

              {cardData.map(items => (
                  <Card key={items.id} {...items}/>
                ))
              }
            </div>
            <div className='w-full rounded-xl mt-10 p-5 bg-onMouse'>
              <LineChart voucherData={voucherData}/>
            </div>
        </div>
        <div className='col-span-1 w-full'>
          <div className='bg-onMouse max-h-screen'>
            <div className='bg-primary p-2 rounded-tl-md rounded-tr-md'>
              <h1 className='text-white font-primary'>Recent Voucher</h1>
            </div>
            
              {voucherData && voucherData.length > 0 ? (
                <div className='w-full max-h-[55rem] border-2 overflow-y-scroll p-2'>
                  {voucherData.map((items, index) => (
                    
                      <VoucherCard key={index} {...items} />
                    
                  ))}
                </div>
              ) : (
                <div className='w-full h-full p-2 flex items-center justify-center'>
                <Empty
                  image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                  imageStyle={{ height: 60 }}
                  className="flex items-center justify-center flex-col"
                  description={
                    <span>
                      You don't issue a single <a href="#API">voucher</a> yet
                    </span>
                  }
                >
                  <Link
                    to={'/admin/voucher'}
                    className="flex items-center gap-3 px-3 py-2 transition-all delay-100 ease-in-out bg-blue-600 hover:bg-blue-700 rounded-md"
                  >
                    <h1 className="text-white transition-all delay-100 ease-in-out font-secondary text-sm md:text-md lg:text-md group-hover:text-secondary">
                      Issue Now!
                    </h1>
                  </Link>
                </Empty>
                </div>
              )}
            
          </div>
        </div>
      </div>
    </div>
  )
}
