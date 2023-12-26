import React, { useState } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Radio, Tag } from 'antd';


export const InformationForm = ({ taxPayerParty, partyInfo, nextHandler, backHandler}) => {
  const [form] = Form.useForm();
  
  const onFinish = (values) => {    
    partyInfo(values)    
    nextHandler()
  };

  const handleTinChange = (e) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    const formattedValue = inputValue.replace(/(\d{3})(?=\d)/g, '$1-'); // Add hyphen after every 3 digits

    // Update the form field value
    form.setFieldsValue({
      tin: formattedValue.substring(0, 11), // Limit to 9 digits
    });
  };

  return (
    <Form
      form={form}
      className="form"
      layout="vertical"
      initialValues={{
        requiredMarkValue: 'optional',
        items: [{}] 
      }}      
      requiredMark={'optional'}
      onFinish={onFinish}
  
    >
            
        <Form.Item name="tin" label="Taxpayer Identification No. (TIN)"  rules={[{ required: true, message: 'This is a required field' }]} tooltip="This is a required field">
        <Input
          placeholder="Example: 000-000-000"
          onChange={handleTinChange}
          maxLength={12} // To allow for hyphens
        />
        </Form.Item>
        
        {taxPayerParty.class === 'non-individual' ? (
            <Form.Item
                name="payor_name"
                label="Payor's Name"
                tooltip={{
                title: 'Tooltip with customize icon',
                icon: <InfoCircleOutlined />,
                }}
                rules={[{ required: true, message: 'This is a required field' }]}
            >
                <Input placeholder="Your name here..." />
            </Form.Item>
        ) : (
            <>
                <Form.Item
                    name="lastname"
                    label="Last Name"
                    tooltip="This is a required field"
                    rules={[{ required: true, message: 'This is a required field' }]}
                >
                    <Input placeholder="Last Name here..." />
                </Form.Item>

                <Form.Item
                    name="firstname"
                    label="First Name"
                    tooltip="This is a required field"
                    rules={[{ required: true, message: 'This is a required field' }]}
                >
                    <Input placeholder="First Name here..." />
                </Form.Item>

                <Form.Item
                    name="middlename"
                    label="Middle Name"
                    tooltip="This is a required field"
                    rules={[{ required: true, message: 'This is a required field' }]}
                >
                    <Input placeholder="Middle Name here..." />
                </Form.Item>
            </>
        )}
        <Form.Item
            name="address"
            label="Registered Address"
            tooltip="This is a required field"
            rules={[{ required: true, message: 'This is a required field' }]}
        >
            <Input placeholder="Your address here..." />
        </Form.Item>
        <Form.Item
            name="zipcode"
            label="Zip Code"
            tooltip="This is a required field"
            rules={[{ required: true, message: 'This is a required field' }]}
        >
            <Input placeholder="Zip code here..." />
        </Form.Item>                
        <Form.Item style={{
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center'
            
        }}>
            <Button type="primary" className='bg-blue-500 mr-2'onClick={backHandler}> Back
            </Button>
            <Button type="primary" className='bg-blue-500' htmlType="submit">Next</Button>
        </Form.Item>

        
    </Form>
    
  );
};
