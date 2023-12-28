import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import React, { useState,useEffect } from 'react';
import { Avatar, Card, Skeleton, Switch, Alert, Space } from 'antd';
import PDFPreview from './PDF';
import { PDFViewer, PDFDownloadLink, BlobProvider, pdf } from '@react-pdf/renderer';
import { Authentication } from '../../Auth/Authentication';
const { Meta } = Card;


import axios from 'axios'

export const FormPreview = ({ userInfo, partyInfo, taxPayerParty, done }) => {

  const { getUser } = Authentication();
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(null);
  const [pdfBlob, setPdfBlob] = useState(null);
  const [controlNo, setControlNo] = useState();
  
  
  useEffect(() => {
    const getCountVoucher = async () => {

      // try {
      //   const response =  await axios.get(`http://localhost:4000/api/get_count_voucher/${getUser()}`);

      //   if (response.status === 200) {
      //     const {data} = response
          
      //     setControlNo(data.rowCount)
          
      //   }
      // } catch(err) {
      //   console.log('Something went wrong', err);
      // }
    }

    getCountVoucher()
  }, []);

  useEffect(() => {
    const saveBlobToDatabase = async () => {
      if (pdfBlob) {
  
        const initialControlNo = 1000 + controlNo + 1;
        const stringControlNo = initialControlNo + 'A';
        const data = new FormData();
        data.append('email', userInfo.email_address);
        data.append('control_no', stringControlNo);
        data.append('file', pdfBlob);
        
        try{
          const response = await axios.post('http://localhost:4000/api/save_voucher', data)
          if(response.status === 200){
            setSuccess(true);
          }
                
        }catch(err){
          console.error('Error saving blob to the database:', err);
          setSuccess(false)
        }
       
      }
    };

    saveBlobToDatabase();
  }, [pdfBlob]);
  useEffect(() => {
    
    setLoading(!done);
    // setLoading(false)
  }, [done]);

  
  return (
    <>           
      <Card
        className='w-full min-h-screen border-l-2 border-0'
        loading={loading}
      >         
        <PDFViewer width="100%" height={1300} showToolbar={false}>
          <PDFPreview 
            userInfo={userInfo} 
            partyInfo={partyInfo}              
            taxPayerParty={taxPayerParty}
            controlNo={controlNo} />
        </PDFViewer>
        {/* <PDFDownloadLink 
          document={
            <PDFPreview 
              userInfo={userInfo} 
              partyInfo={partyInfo}                
              taxPayerParty={taxPayerParty} 
            />} fileName="somename.pdf">
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink> */}

        {/* <BlobProvider document={
          <PDFPreview 
            userInfo={userInfo} 
            partyInfo={partyInfo}                
            taxPayerParty={taxPayerParty} 
          />}
        >
        {({ blob, url, loading, error }) => {
          if (loading) {
            return <div>Loading...</div>;
          }

          if (error) {
            return <div>Error: {error.message}</div>;
          }

          // Store the blob in the component's state
          if (blob && !pdfBlob) {            
            setPdfBlob(blob);
          }
        }}
        </BlobProvider> */}
      </Card>      
        
      
      
    </>
  );
};
