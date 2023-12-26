import React, {useState, useEffect} from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import { BiLogInCircle } from 'react-icons/bi'
import { Modal } from '../components/Modal/Modal'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import { Authentication } from '../Auth/Authentication'
export const Login = () => {

  const {login} = Authentication();
  const [loading, setLoading] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const navigate = useNavigate();
  const [statusMessage, setStatusMessage] = useState({
    title: "",
    comment: "",
  })
  
  const location = useLocation();
  console.log(location);

  const from = location.state?.from || '/admin';

  const onFinish = async (values) => {
    const credentials = {
      username: values.username,
      password: values.password,
      checked: values.remember
    }
    setLoading(true)
      try{
        const response = await axios.post('http://localhost:4000/api/user', credentials);

          if(response.status === 200){
            setLoading(false)
            login({
              user: response.data.username,
              token: response.data.token
            })
            setStatusMessage({
              title: response.data.title,
              comment: response.data.message
            })
            setShowStatus(prevState => !prevState)
            navigate(from, {replace: true});
            
          }else if(response.status === 401){
            setLoading(false)
            setStatusMessage({
              title: response.data.title,
              comment: response.data.message
            })
            console.log("Wrong password");
            setShowStatus(prevState => !prevState)
          }
      }catch(err){
        
        setLoading(false)
        setStatusMessage({
          title: err.response.data.title,
          comment: err.response.data.message
        })
        console.log(err);
        setShowStatus(prevState => !prevState)
      }
  };


  const onFinishFailed = (errorInfo) => {
    setLoading(false)
    console.log('Failed:', errorInfo);
  };
  
  

  return (

    <div className='w-full h-screen flex flex-col justify-center px-[1rem]'>
        <div className='flex flex-col items-center gap-5'>
          <h1 className='text-2xl font-primary text-center'>WELCOME TO <span className='text-primary font-semibold'>2307</span> VOUCHER SYSTEM</h1>
          <h1 className='font-secondary text-xl md:text-2xl text-center'>Login to your Account</h1>
          {location.state?.message &&
            <h1 className='font-secondary text-xl md:text-xl font-bold text-center text-red-500'>{location.state.message}</h1>
          }
        </div>
          <div className='w-full flex items-center justify-center mt-10'>
            <Form
              name="basic"
              className='w-full font-secondary'
              labelCol={{
                span: 20,
              }}

              style={{
                maxWidth: 300,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              layout='vertical'
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input className='p-2 rounded-xl'/>
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password className='p-2 rounded-xl'/>
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 0,
                  span: 30,
                }}
              >
                <Checkbox
                  >
                    Remember me
                </Checkbox>
              </Form.Item>

              <Form.Item
              >
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  className='text-white bg-primary w-full flex justify-center items-center gap-2 rounded-xl'
                  icon={<BiLogInCircle />}
                  loading={loading}
                  onClick={() => setLoading(prevState => !prevState)}
                  >
                  Submit
                </Button>
              </Form.Item>
              <h1>Dont have an account? 
                <NavLink to={'/sign-up'} 
                className='text-primary font-semibold pl-1'>
                  Sign up
                  </NavLink>
              </h1>
            </Form>
        </div>
        {showStatus &&
          <Modal title={statusMessage.title} comment={statusMessage.comment} toggle={() => setShowStatus(prevState => !prevState)}/>
        }
    </div>
  )
}
