import React, {useState} from 'react'
import { Modal, Table, Spin } from 'antd'

export const TransactionView = ({close, transactionInfo, open}) => {
    
    const [loading, setLoading] = useState(false);
    const columns = [
        {
            title: 'Extra credit request',
            dataIndex: 'extra_credit_point',
        },
        {
            title: 'Price',
            dataIndex: 'price',
        },
        {
            title: 'Reference number',
            dataIndex: 'reference_num',
        },
        {
            title: 'Screenshot',
            dataIndex: 'screenshot',
            render: (screenshot, record) => (
                <a
                    href={`data:image/png;base64,${screenshot}`}
                    download={`screenshot_${record.reference_num}.png`}
                    className='text-primary underline'
                >
                    Download
                </a>
                ),
            },
        {
            title: 'Status',
            dataIndex: 'status',
        },
        {
            title: 'Date created',
            dataIndex: 'created_at',
            sorter: (a, b) => a.age - b.age,
        }
        ];
        
        const onChange = (pagination, sorter) => {
            console.log('params', pagination, sorter);
        };

        // console.log('Transaction Info:', transactionInfo);
  return (
    <Modal
        title="Pending Transaction"
        centered
        open={open}
        onCancel={close}
        width={800}
        footer={null}
        >
            {transactionInfo ? 
                <Table columns={columns} dataSource={transactionInfo} onChange={onChange} />
            :
                <div className='flex items-center justify-center'>
                    <Spin />
                </div>
            }

        <div className='mt-10 flex items-center justify-end'>
            <button
            className='bg-optional text-white font-secondary p-1 px-5 rounded-md
            hover:bg-secondary transition-all delay-100 ease-in-out focus:outline-none
            focus:ring-4 focus:ring-blue-300'
            onClick={close}
            >
            Close
            </button>
        </div>
    </Modal>
  )
}
