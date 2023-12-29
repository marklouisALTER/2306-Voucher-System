import React, { useState } from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';

import '../../../css.css'

export const DetailsPaymentForm1 = ({ taxPayerParty, partyDetails, nextHandler, backHandler}) => {
  const [form] = Form.useForm();

  
  const onFinish = (values) => {
    partyDetails(values)
    nextHandler()
  };

  const handleChange = (value, name, key) => {    
    
    const updatedUsers = form.getFieldValue('users');
    
    updatedUsers[key] = {
        ...updatedUsers[key],
        amount: updatedUsers[key].price * updatedUsers[key].quantity,
    };
    
    form.setFieldsValue({
        users: updatedUsers,
    });
              
  };
  
  return (
    
    <Form
        form={form}
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        layout={{wrapperCol: {
            span: 14,
          },}}
        style={{
        maxWidth: 600,
        }}
        autoComplete="off"        
    >
        <Form.List name="users">
        {(fields, { add, remove }) => (
            <>
            {fields.map(({ key, name, ...restField }) => (
                <Space
                key={key}
                style={{
                    display: 'flex',
                    marginBottom: 8,
                }}
                align="baseline"
                >
            
                <Form.Item
                    {...restField}
                    name={[name, 'description']}
                    rules={[
                        {
                        required: true,
                        message: 'Missing Description',
                        },  
                    ]}
                    label={'Description'}
                >
                
                    <Input placeholder="Description" />
                </Form.Item>
                <Form.Item    
                    {...restField}                
                    name={[name, 'price']}
                    rules={[
                        {
                        required: true,
                        message: 'Missing price',
                        },
                    ]}
                    label={'Price'}
                    initialValue={0}
                >
                
                    <Input
                        type="number" 
                        placeholder="Price"
                        onChange={(value) => handleChange(value, name, key)}
                    />
                </Form.Item>
                <Form.Item
                    {...restField}
                    name={[name, 'quantity']}
                    rules={[
                        {
                        required: true,
                        message: 'Missing quantity',
                        },
                    ]}
                    label={'Quantity'}
                    initialValue={0}
                >
                
                    <Input
                        type="number" 
                        placeholder="Quantity"
                        onChange={(value) => handleChange(value, name, key)}
                    />
                </Form.Item>
                <Form.Item
                    {...restField}
                    name={[name, 'amount']}
                    rules={[
                        {
                        required: true,
                        message: 'Missing amount',
                        },                        
                    ]} 
                    label={'Amount'}                  
                    initialValue={0}                            
                >
                
                <Input placeholder="Amount" readOnly/>
                    
                </Form.Item>
                
                <MinusCircleOutlined onClick={() => remove(name)} />
                
                </Space>
            ))}
            <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add new field
                </Button>
            </Form.Item>
            </>
        )}
        </Form.List>
        <Form.Item style={{
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center'
        
        }}>
            <Button type="primary" className='bg-blue-500 mr-2 'onClick={backHandler}> Back
            </Button>            
            <Button type="primary" className='bg-blue-500' htmlType="submit">Next</Button>
        </Form.Item>
  </Form>

  );
};
