import React, { useState } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Radio, Tag } from 'antd';

import '../../css.css'

export const DetailsPaymentForm = ({ taxPayerParty, partyDetails, nextHandler, backHandler}) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {    
    partyDetails(values)
    nextHandler()
  };
  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{
        requiredMarkValue: 'optional',
      }}      
      requiredMark={'optional'}
      onFinish={onFinish}
    >
            
        <Form.Item
            name="interest"
            label="Interest"
            tooltip={{
            title: 'Tooltip with customize icon',
            icon: <InfoCircleOutlined />,
            }}
            rules={[{ required: true, message: 'This is a required field' }]}
        >
            <Input type="number"placeholder="input placeholder" />
        </Form.Item>
        <Form.Item
        name="rent"
            label="Rent - Personal Property
            regardless of amount"
            tooltip={{
            title: 'Tooltip with customize icon',
            icon: <InfoCircleOutlined />,
            }}
            rules={[{ required: true, message: 'This is a required field' }]}
        >
            <Input type="number" placeholder="input placeholder" />
        </Form.Item>
        <Form.Item
        name="prem"
            label="Premium and Annuity"
            tooltip={{
            title: 'Tooltip with customize icon',
            icon: <InfoCircleOutlined />,
            }}
            rules={[{ required: true, message: 'This is a required field' }]}
        >
            <Input type="number" placeholder="input placeholder" />
        </Form.Item>
        {taxPayerParty.class === 'individual' ? (
            <>
                                
                <Form.Item
                name="pension"
                    label="Pension"
                    tooltip={{
                    title: 'Tooltip with customize icon',
                    icon: <InfoCircleOutlined />,
                    }}
                    rules={[{ required: true, message: 'This is a required field' }]}
                >
                    <Input type="number" placeholder="input placeholder" />
                </Form.Item>
                <Form.Item
                name="prizes"
                    label="Prizes Amounting to:
                    10,000 or less"
                    tooltip={{
                    title: 'Tooltip with customize icon',
                    icon: <InfoCircleOutlined />,
                    }}
                    rules={[{ required: true, message: 'This is a required field'},
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                            const thisValue = getFieldValue('prizes');
                
                            if (thisValue > 10000) {
                                return Promise.reject("You can't exceed to ₱10,000");
                            }
                
                            return Promise.resolve();
                            },
                        }),
                
                    ]}
                >
                    <Input type="number" placeholder="input placeholder" />
                </Form.Item>                               
            </>
            
        ) : (
            <>
                <Form.Item
                name="prizesregard"
                    label="Prizes regardless of amount"
                    tooltip={{
                    title: 'Tooltip with customize icon',
                    icon: <InfoCircleOutlined />,
                    }}
                    rules={[{ required: true }]}
                >
                    <Input type="number" placeholder="input placeholder" />
                </Form.Item>
                <Form.Item
                name="proffees"
                    label="Professional Fees Paid to Gen
                    Professional Partnerships
                    (Except to partnership
                    of medical practitioners)"
                    tooltip={{
                    title: 'Tooltip with customize icon',
                    icon: <InfoCircleOutlined />,
                    }}
                    rules={[{ required: true, message: 'This is a required field' }]}
                >
                    <Input type="number" placeholder="input placeholder" />
                </Form.Item>                                
            </>
        )}
        <Form.Item
        name="transpo"
            label="Transportation Contractors
            for the Carriage of Goods
            and merchandise Below P2,000"
            tooltip={{
            title: 'Tooltip with customize icon',
            icon: <InfoCircleOutlined />,
            }}
            rules={[{ required: true }]}
        >
            <Input type="number" placeholder="input placeholder" />
        </Form.Item>
        <Form.Item
            name="goods"
            label="Income Payment - Goods"
            tooltip={{
            title: 'Tooltip with customize icon',
            icon: <InfoCircleOutlined />,            
            }}            
            rules={[
                { required: true, message: 'This is a required field' },
                ({ getFieldValue, setFieldValue }) => ({
                  validator(_, value) {
                    const serviceValue = getFieldValue('service');
      
                    if (value > 0 && serviceValue > 0) {
                      return Promise.reject('Both Goods and Service cannot have values at the same time');
                    }
                         
                    return Promise.resolve();
                  },
                }),
            ]}
        >
            <Input type="number" placeholder="input placeholder" />
        </Form.Item>
        <Form.Item
            name="service"
            label="Income Payment - Service"
            tooltip={{
            title: 'Tooltip with customize icon',
            icon: <InfoCircleOutlined />,
            }}            
            rules={[
                { required: true, message: 'This is a required field' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    const goodsValue = getFieldValue('goods');
                    
                    if (value > 0 && goodsValue > 0) {
                      return Promise.reject('Both Goods and Service cannot have values at the same time');
                    }
                                       
                    return Promise.resolve();
                  },
                }),
            ]}
        >
            <Input type="number" placeholder="input placeholder" />
        </Form.Item>
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
