import React, { useState, useEffect } from 'react'
import { BiSolidReceipt } from 'react-icons/bi'
import moment from 'moment';
import { Button, Divider, Modal } from 'antd';



export const VoucherCard = (props) => {
    const date = props.created_at
    const formattedDate = moment.utc(date).format('MMMM DD YYYY hh:mm:ss A');
    const [open, setOpen] = useState(false);
    const [pdfUrl, setPdfUrl] = useState(null);

    useEffect(() => {        
        const fetchPdfBlob = () => {
            if (props?.voucher) {                    
                const pdfDataUrl = `data:application/pdf;base64,${props.voucher.toString('base64')}`;
                setPdfUrl(pdfDataUrl);
            } 
        };
        fetchPdfBlob();
        
    }, []); 
    
 
    return (
        <>
            <div                 
                className={`bg-transparent transition-all delay-100 ease-in-out mt-3 h-[4rem] rounded-md 
                flex items-center justify-between px-2 cursor-pointer hover:bg-optional2`}      
                onClick={() => setOpen(true)}      
            >
                <div className='flex items-center gap-3'>
                    <div className='bg-optional2 rounded-full p-2 lg:p-3'>
                        <BiSolidReceipt className='text-xl lg:text-2xl text-primary'/>
                    </div>
                    <div>
                        <h1 className='font-secondary text-md text-black'>Voucher   </h1>
                        <span className='font-secondary text-[13px] text-black'>Control No. {props.control_no}</span>
                        <h1 className='font-secondary text-xs lg:text-md text-gray-500'>{formattedDate}</h1>
                    </div>
                </div>
                <div className='p-2 px-5 rounded-full'>
                    <h1 className='font-secondary text-black text-sm'>View</h1>
                </div>
                               
            </div>  
            <Modal
                title="Voucher ID Preview"
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={1000}
                >
                <embed
                    src={pdfUrl}
                    type="application/pdf"
                    width="100%"
                    height="600px"
                />
            </Modal>
        </>
    )
}
