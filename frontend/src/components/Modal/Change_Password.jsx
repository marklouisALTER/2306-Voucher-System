import React, {useState} from 'react'
import { Button, Modal } from 'antd'
import { Form, Input } from 'antd';
import axios from 'axios';	
import { FaExclamationTriangle } from "react-icons/fa";

export const Change_Password = ({open, cancel, user}) => {
    const [statusModal, setStatusModal] = useState(false);
    const [isSuccessFul, setIsSuccessful] = useState(false);
    const [statusMessage, setStatusMessage] = useState({
        title: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        const userPasswordInfo = {
            username: values.usernameInput,
            password: values.current_password,
            new_password: values.new_password,
            re_enter_new_password: values.re_enter_new_password
        }

        if(userPasswordInfo.new_password !== userPasswordInfo.re_enter_new_password){
            setLoading(false);
            setStatusMessage({
                title: 'Unsuccessful',
                message: 'Oppps! Passwords do not match'
            });
            console.log('error');
            setStatusModal(prevState => !prevState);
            return;
        }

        try{
            const response = await axios.post('http://localhost:4000/api/change_password', userPasswordInfo)
            
            if(response.status === 200){
                setLoading(false);
                setStatusMessage({
                    title: response.data.title,
                    message: response.data.message
                });
                setStatusModal(prevState => !prevState);
                setIsSuccessful(true);
                // cancel();
            }
            else{
                setLoading(false);
                setStatusMessage({
                    title: response.data.title,
                    message: response.data.message
                });
                setStatusModal(prevState => !prevState);
            }
        }catch(err){
            setLoading(false);
            setStatusMessage({
                title: err.response.data.title,
                message: err.response.data.message
            });
            setStatusModal(prevState => !prevState);
        }


    };

    const onFinishFailed = (errorInfo) => {
        console.error(errorInfo);
    }

  return (
    <div>
        <Modal
            title="Change Password"
            width={400}
            open={open}
            onCancel={cancel}
            // footer={[
            //     <Button key="back" onClick={cancel}>
            //         Return
            //     </Button>
            // ]}
            cancelButtonProps={{
                hidden: true,
            }}
            okButtonProps={{
                hidden: true,
            }}
        >
            <Form
                name="basic1"
                className='w-full font-secondary'
                initialValues={{ usernameInput: user }}
                labelCol={{
                    span: 20,
                }}  
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout='vertical'
            >

                <Form.Item
                    label="Username"
                    name="usernameInput"
                >
                    <Input 
                        className='p-1'
                        placeholder='Your username'
                        disabled={true}
                    />
                </Form.Item>
                <Form.Item
                    label="Current password"
                    name="current_password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your current password!',
                        },
                    ]}
                >
                    <Input.Password 
                        className='p-1'
                        placeholder='Enter your current password'
                    />
                </Form.Item>
                <Form.Item
                    label="New password"
                    name="new_password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your new password!',
                        },
                    ]}
                >
                    <Input.Password 
                        className='p-1'
                        placeholder='Enter your new password'
                    />
                </Form.Item>
                <Form.Item
                    label="Re-enter new password"
                    name="re_enter_new_password"
                    rules={[
                        {
                            required: true,
                            message: 'Please re-enter your new password!',
                        },
                    ]}
                >
                    <Input.Password 
                        className='p-1'
                        placeholder='Re-enter your new password'
                    />
                </Form.Item>
                <div className='flex items-center justify-end'>
                    <Button  
                        type="primary" 
                        htmlType="submit"
                        loading={loading}  
                        onClick={() => setLoading(prevState => !prevState)}
                        className='bg-primary text-white hover:bg-white'>
                            Submit
                    </Button>
                </div>
            </Form>
        </Modal>
            <Modal 
                title={
                    <span style={{ color: `${statusMessage.title === 'Success' ? 'green' : 'red'}`, display: 'flex', gap: '5px' }}>
                        <FaExclamationTriangle className='text-2xl'/> 
                        <h1 className='text-xl'>{statusMessage?.title}</h1>
                    </span>
                }
                width={300}
                open={statusModal}
                onCancel={() => setStatusModal(prevState => !prevState)}
                okButtonProps = {{
                    hidden: true
                }}
                cancelButtonProps={{
                    hidden: true
                }}>
                    <div className='flex items-center ml-5 mb-5 mt-3 gap-3'>
                        <h1 className='font-primary'>{statusMessage?.message}.</h1>
                    </div>
                    <div className='flex items-center justify-end'>
                        
                    </div>
            </Modal>
    </div>
    )
}
