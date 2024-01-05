import React, { useState, useEffect } from 'react'
import { Authentication } from '../../Auth/Authentication'
import { Form,Button, Input, Image } from 'antd';
import { FaEdit } from "react-icons/fa";
import axios from 'axios';
import { SkeletonParagraph } from '../../components/Skeleton/Skeleton';
import { FaUserLock } from "react-icons/fa6";
import { Modal } from '../../components/Modal/Modal';
import { RiCustomerServiceFill } from "react-icons/ri";
import { FiUpload } from "react-icons/fi";
import { useLocation, useNavigate } from 'react-router-dom'
import { PiSignatureFill } from "react-icons/pi";
import { Change_Password } from '../../components/Modal/Change_Password';
import { Change_Signature } from '../../components/Modal/Change_Signature';
import Clipboard from '../../components/Clipboard/Clipboard';
export const Account = ({title}) => {

  const { getUser, isAuthenticated, getToken } = Authentication();
  const user = getUser();
  const [userInformation, setUserInformation] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isFailed, setIsFailed] = useState(false);
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [isChangeSignature, setIsChangeSignature] = useState(false);
  const [statusMessage, setStatusMessage] = useState({
    title: "",
    comment: "" 
  })
  const navigate = useNavigate();
  const location = useLocation();
  const token = getToken();


  useEffect(() => {
    if(!isAuthenticated()){
      navigate('/sign-in', {state: {message: "You must login first", from: location.pathname}});
    }
    document.title = title;

    const username = {
      userEmail: user
    };


    const fetchingData = async () => {
      setIsLoading(prevState => !prevState);
      try {
        const response = await axios.post('http://localhost:4000/api/user_retrieve', username, {
          headers: {
            Authorization: token
          }
        });
        // console.log(response.data.user.user_num)
        if(response.data.isSuccess){
          // console.log(response.data.user);
          setIsLoading(prevState => !prevState);
          setUserInformation(response.data.user);
        }else{
          setStatusMessage({
            title: response.data.title,
            comment: response.data.message
          });
          setIsLoading(prevState => !prevState);
          setIsFailed(true);
        }
      }catch(err){
        setStatusMessage({
          title: err.response.data.title,
          comment: err.response.data.message
        });
        setIsLoading(prevState => !prevState);
        setIsFailed(true);
      }
    };

    fetchingData();

  },[]);
  // const bufferedData = userInformation?.signature.data;
  // const uint8Array = new Uint8Array(bufferData);
  // const buffer = Buffer.from(bufferedData);
  // const dataUrl = `data:image/png;base64,${buffer.toString('base64')}`;

  const onFinish = () => {

  };

  const signatureImage = `data:image/png;base64,${userInformation?.signature}`;

  return (
    <div className="w-full flex justify-center flex-wrap p-5 gap-2">
      <div className='w-[65rem] h-full grid grid-cols-1 md:grid-cols-3 mt-[6rem]'>
        
        {/* logo and name column */}
        <div className='col-span-1 flex flex-col items-center py-[4rem] bg-secondary'>
          <div className='relative bg-primary rounded-full border-[.3rem] md:border-[.5rem] border-secondary w-[5rem] h-[5rem] 
          md:w-[13rem] md:h-[13rem] flex items-center justify-center'>
            <h1 className='text-2xl md:text-7xl font-bold text-white'>{user?.charAt(0).toUpperCase() || 'Error'}</h1>
            <div className='absolute w-4 h-4 border-2 border-white bg-green-600 bottom-1 right-0 
            rounded-full md:bottom-4 md:right-[.7rem] md:w-8 md:h-8 md:border-4'>
           
            </div>
          </div>         
          <h1 className='text-xl mt-5 font-primary text-white'>{user}</h1>`
          <Clipboard user_num={userInformation?.user_num}/>
        </div>

        <div className='col-span-2 border-2 p-5'>
          <h1 className='font-primary p-5 text-2xl font-medium'>Account Settings</h1>
          <div className='px-5'>
          
          {/* Loading state for account */}
          {isLoading ? 
          (<Form
              name="basic"
              style={{ 
                maxWidth: 600
              }}
              initialValues={userInformation}
              onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
              layout='vertical'
            >
              <Form.Item
                label="First Name"
                name="firstname"
                rules={[
                  {
                    required: true,
                    message: 'Please input your first name!',
                  },
                ]}
              >
                <Input defaultValue={userInformation?.firstname || 'Error'} disabled/>
              </Form.Item>
              <Form.Item
                label="Middle Name"
                name="middlename"
                rules={[
                  {
                    required: true,
                    message: 'Please input your middle name!',
                  },
                ]}
              >
                <Input defaultValue={userInformation?.middlename || "Error"} disabled/>
              </Form.Item>

              <Form.Item
                label="Last Name"
                name="lastname"
                rules={[
                  {
                    required: true,
                    message: 'Please input your last name!',
                  },
                ]}
              >
                <Input defaultValue={userInformation?.lastname || "Error"} disabled/>
              </Form.Item> 
              <Form.Item
                label="TIN Number"
                name="tin"
                rules={[
                  {
                    required: true,
                    message: 'Please input your tin number!',
                  },
                ]}
              >
                <Input
                  maxLength={9}
                  defaultValue={userInformation?.tin || "Error"}
                  disabled
                />
              </Form.Item>
              <Form.Item
                label="Registered Address"
                name="registered_address"
                rules={[
                  {
                    required: true,
                    message: 'Please input your registered address!',
                  },
                ]}
              >
                <Input defaultValue={userInformation?.registered_address || "Error"} disabled/>
              </Form.Item> 
              <Form.Item
                label="Zip Code"
                name="zip_code"
                rules={[
                  {
                    required: true,
                    message: 'Please input your zip code!',
                  },
                ]}
              >
                <Input defaultValue={userInformation?.zip_code || "Error"} disabled/>
              </Form.Item> 
              <Form.Item
                label="Foreign Address"
                name="foreign_address"
                
              >
                <Input defaultValue={userInformation?.foreign_address || "N/A"} disabled/>
              </Form.Item>
              <h1 className='mb-4 font-primary'>User signature </h1>
              <Image
                width={200}
                src={signatureImage}
              />
              {/* <Button 
                  type="success" 
                  htmlType="submit"
                  className='bg-primary hover:bg-secondary text-white flex items-center justify-center gap-3
                  focus:outline-none focus:ring focus:ring-blue-300'
                  >
                  <FaEdit />
                  Update
                </Button> */}
            </Form>) : 
            <SkeletonParagraph />
            }
          </div>
        </div>
      </div>
      
      {/* Change password  */}
      <div className='w-[30rem] mt-[6rem] flex flex-col items-center gap-5'>
      <h1 className='font-primary text-xl'>Privacy Settings</h1>
        {/* Change Signature card */}
        <div className='border-2 p-4 rounded-md bg-white'>
          <div className='flex items-center gap-3'>
            <div className='bg-secondary w-12 h-12 flex items-center justify-center rounded-full'>
              <PiSignatureFill className='text-xl text-white'/>
            </div>
            <h1 className='font-primary text-primary text-xl'>Change Signature</h1>
          </div>
          <div className='mt-5'>
            <h1 className='font-secondary'>Careful of changing your signature because it will use this in every transcation that will you create.</h1>
            <div className='mt-5'>
              <button className='bg-primary px-4 py-2 rounded-md text-white text-sm hover:bg-secondary
              transition-all delay-100 ease-in-out focus:outline-none focus:ring focus:ring-blue-300'
              onClick={() => setIsChangeSignature(prevState => !prevState)}
              >Change Signature</button>
            </div>
          </div>
        </div>

        {/* Change password card */}
        <div className='border-2 p-4 rounded-md bg-white'>
          <div className='flex items-center gap-3'>
            <div className='bg-secondary w-12 h-12 flex items-center justify-center rounded-full'>
              <FaUserLock className='text-xl text-white'/>
            </div>
            <h1 className='font-primary text-primary text-xl'>Change password</h1>
          </div>
          <div className='mt-5'>
            <h1 className='font-secondary'>We Recommend to change your password every month to make your account safe.</h1>
            <div className='mt-5'>
              <button 
              className='bg-primary px-4 py-2 rounded-md text-white text-sm hover:bg-secondary
              transition-all delay-100 ease-in-out focus:outline-none focus:ring focus:ring-blue-300'
              onClick={() => setIsChangePassword(prevState => !prevState)}
              >Change password</button>
            </div>
          </div>
        </div>

        {/* Customer Service Support Card */}
        <div className='border-2 p-4 rounded-md bg-white'>
          <div className='flex items-center gap-3'>
            <div className='bg-secondary w-12 h-12 flex items-center justify-center rounded-full'>
              <RiCustomerServiceFill className='text-xl text-white'/>
            </div>
            <h1 className='font-primary text-primary text-xl'>Customer service support</h1>
          </div>
          <div className='mt-5'>
            <h1 className='font-secondary'>If you have problem or see some errors in your account or system message the customer service.</h1>
            <div className='mt-5'>
              <button className='bg-primary px-4 py-2 rounded-md text-white text-sm hover:bg-secondary
              transition-all delay-100 ease-in-out focus:outline-none focus:ring focus:ring-blue-300'>Message customer service</button>
            </div>
          </div>
        </div>
      </div>
      {isFailed &&
        <Modal title={statusMessage.title} comment={statusMessage.comment} toggle={() => setIsFailed(prevState => !prevState)}/>
      }

      {isChangePassword &&
        <Change_Password open={isChangePassword} cancel={() => setIsChangePassword(prevState => !prevState)} user={user}/>
      }
      
      {isChangeSignature &&
        <Change_Signature open={isChangeSignature} cancel={() => setIsChangeSignature(prevState => !prevState)} user={user} signature={signatureImage}/>      
      }
    </div>
  )
}
