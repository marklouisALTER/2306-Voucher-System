import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Button, Modal } from 'antd';
import sample from '../../assets/images/sample.png'
import { Link } from 'react-router-dom';

export const ExampleUserIDModal = ({cancel}) => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const navigate = useNavigate();
    const handleOk = () => {
        setIsModalOpen(false);
        cancel(false)
    };

    const handleCancel = () => {
        navigate('/admin/account')
        setIsModalOpen(false);
        cancel(false)
        
    };

    return (
        <>            
            <Modal title={`Where to get the key ID ?`} 
                centered 
                open={isModalOpen} 
                onOk={handleOk} 
                onCancel={handleCancel}
                okText="Ok"
                cancelText="Go to Account Settings"
                okButtonProps={{ style: { background: '#357ae6', borderColor: '#357ae6' } }}
                
                >
                    <div className='flex justify-center  flex-col'>
                        <span className='text-xs text-gray-500'>Follow these steps:</span>                                                
                        <p className='text-lg'>1. Access your Account Settings</p>
                        <p className='text-lg'>2. Copy the key ID, or just click the "Copy to Clipboard"</p>
                        <img src={sample} alt="" width={250} height={250} />
                        <span className='text-xs text-gray-500'>See the photo for your reference</span>
                    </div>                
                
            </Modal>
        </>
    );    
}