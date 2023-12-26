import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom'



export const Success = () => {
    const navigate = useNavigate();
    return (
        <Result
            status="success"
            title="You submitted your BIR FORM 2304!"
            subTitle="You will see in the right your generated BIR FORM 2304. 
            If not appearing yet, it might take a while. Please wait, and thank you!"
            extra={[                
            <Button type="primary" key="console" 
                onClick={() => navigate('/admin')}
                className='bg-blue-500'>
                Go back to Dashboard
            </Button>,
            <Button key="buy" onClick={() => window.location.reload()}>Issue new BIR FORM</Button>,
            ]}
        />
    )
  
};
 