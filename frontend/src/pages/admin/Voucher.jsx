import React, { useState, useEffect} from 'react';
import { Tabs, Typography, Button, Input } from 'antd';
import { DropdownType } from '../../components/Dropdown/dropdown';
import { DropdownType1 } from '../../components/Dropdown/dropdown1';
import { InformationForm } from '../../components/VoucherInformationForm/InformationForm';
import { Signature } from '../../components/FormPreview/PDF parts/Signature';
import { FormPreview } from '../../components/FormPreview/FormPreview';
import { Authentication } from '../../Auth/Authentication'
import { useNavigate, useLocation } from 'react-router-dom'
import { DetailsPaymentForm } from '../../components/VoucherInformationForm/DetailsPaymentForm';
import { ExampleUserIDModal } from '../../components/Modal/ExampleUserIdModal';
import { Success } from '../../components/FormPreview/Success';
import { DetailsPaymentForm1 } from '../../components/VoucherInformationForm/2000b/DetailsPaymentForm';


const { Search } = Input;
import axios from 'axios'

const { Text, Title } = Typography;
const { TabPane } = Tabs;
export const Voucher = () => {

  const { isAuthenticated, getUser } = Authentication();
  
  const [done, setDone]= useState(false)
  const [modalState, setModalState] = useState(false)
  const [userInfo, setUserInfo] = useState([])
  const [partyInfo, setPartyInfo] = useState({
    info: [],
    details: [],
    signature: '',
    details1:[],
  });

  const [activeTab, setActiveTab] = useState('1');
  
  const [taxPayerParty, setTaxPayerParty] = useState({

    type: 'Payor',
    class: 'individual',

  })
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if(!isAuthenticated()){
      navigate('/sign-in', {state: {message: "You must login first", from: location.pathname}});
    }

    const onLoad = async () => {
      const username = {
        userEmail: getUser()
      };
  
      try{
        const response = await axios.post('http://localhost:4000/api/user_retrieve', username);    
          if(response.status === 200){
            // console.log(response.data.user);
                        
            setUserInfo(response.data.user)
          }
          
      }catch(err){
        console.log(err);
      }
    }
    onLoad();
  },[])
  
  const getUserByID = async (value) => {
       
    if (value) {      
      const user = {
        usernum: value
      };

      try{
        const response = await axios.post('http://localhost:4000/api/party_retrieve', user);    
          
        if(response.status === 200){
          const { data } = response
          
          const userType = data?.user?.user_type;
          setTaxPayerParty((prevTaxPayerParty) => ({
            ...prevTaxPayerParty,
            class: userType,
          }));
          setPartyInfo((prevPartyInfo) => ({
            ...prevPartyInfo,
            signature:data?.user?.signature
          }))
          setPartyInfo((prevPartyInfo) => ({
            ...prevPartyInfo,
            info: {
              
                tin: data?.user?.tin,
                ...(data?.user?.user_type === 'non-individual'
                  ? {
                      payors_name:
                        data?.user?.firstname +
                        data?.user?.middlename +
                        data?.user?.lastname,
                    }
                  : {
                      lastname: data?.user?.lastname, 
                      firstname: data?.user?.firstname,
                      middlename: data?.user?.middlename,
                    }),
                address: data?.user?.registered_address,
                zipcode: data?.user?.zip_code,              
            },
          }));                     
        }
        handleNext()
      }catch(err){
        console.log(err);
      }
    }
    
  }
  
  const handlePartyInfoChange = (values) => setPartyInfo((prevPartyInfo) => ({ ...prevPartyInfo, info: values }));
  const handlePartyDetailsChange = (values) => setPartyInfo((prevPartyInfo) => ({ ...prevPartyInfo, details: values })); 
  const handlePartyDetails1Change = (values) => setPartyInfo((prevPartyInfo) => ({ ...prevPartyInfo, details1: values })); 
  const handlePartySignatureChange = (values) => setPartyInfo((prevPartyInfo) => ({ ...prevPartyInfo, signature: values })); 

  const handlePartyClass = (newClass) => setTaxPayerParty((prevTaxPayerParty) => ({ ...prevTaxPayerParty, class: newClass }));
  const handleTaxPayerTypeChange = (newType) => setTaxPayerParty((prevTaxPayerParty) => ({ ...prevTaxPayerParty, type: newType }));
    
  const handleTabChange = (key) => { setActiveTab(key);};
  const handleNext = () => setActiveTab(((parseInt(activeTab, 10) % 5) + 1).toString());
  const handleBack = () => setActiveTab(((parseInt(activeTab, 10) - 2 + 5) % 5 + 1).toString());
  const handleOverallSubmit = async () => { setDone(true); handleNext()};
 
  const handleCloseModal = () => { setModalState(false) }
  
  return (
    <>         
      {modalState ? (
        <ExampleUserIDModal cancel={handleCloseModal}/>
      ) : null}
      <div className='p-4 max-h-screen'>
        <div className="flex lg:flex-row flex-col gap-4">
          <div className='w-full h-full'>                          
            <Tabs defaultActiveKey="1" tabBarGutter={5} activeKey={activeTab} onChange={handleTabChange} type="card" centered>
              <TabPane tab="1" key="1" disabled>
                <div className='flex flex-col p-6 gap-4'>
                  <div>
                    <Title level={3}>Are you a Payee or Payor?</Title>
                    <Text type="secondary">Click and choose from the checkbox</Text>
                  </div>                  
                  <DropdownType type={handleTaxPayerTypeChange} />
                </div>
                <div className='flex flex-col p-6 gap-4'>
                  <div>
                    <Title level={3}>Are you dealing with a person or a company in your transaction?</Title>
                    <Text type="secondary">Click and choose from the checkbox</Text>
                  </div>                  
                  <DropdownType1 type={handlePartyClass} />
                </div>
              </TabPane>
              <TabPane tab="2" key="2" disabled>
                <div className='flex flex-col gap-4 p-6'>
                  
                  <Title level={3}> {taxPayerParty.type + ' Information'}</Title>
                  <div className='flex flex-col w-full gap-4'>
                    <Text type="secondary">Enter the {taxPayerParty.type}'s key ID to automatically fill the form. 
                    How? click <a onClick={() => setModalState(true)}>here</a> </Text>
                          
                    <Search placeholder="example; 1000000ABCZZ" onSearch={getUserByID}/>
            
                    <Text type="secondary">Or manually input the {taxPayerParty.type + ' Information'}</Text>                              
                    <InformationForm 
                      taxPayerParty={taxPayerParty} 
                      partyInfo={handlePartyInfoChange} 
                      nextHandler={handleNext} 
                      backHandler={handleBack}
                    />                   
                  </div>                  
                </div>
              </TabPane>
              <TabPane tab="3" key="3" disabled>
                <div className='flex flex-col gap-4 p-6'>                  
                  <Title level={3}>{` ${taxPayerParty.type} Nature of Payment`} </Title>                    
                  <div className='flex flex-col w-full gap-4'>                                      
                    {/* <DetailsPaymentForm 
                      taxPayerParty={taxPayerParty} 
                      partyDetails={handlePartyDetailsChange} 
                      nextHandler={handleNext} 
                      backHandler={handleBack}
                    /> */}
                    <DetailsPaymentForm1
                      taxPayerParty={taxPayerParty} 
                      partyDetails={handlePartyDetails1Change} 
                      nextHandler={handleNext} 
                      backHandler={handleBack}
                    />
                  </div>
                  
                </div>
              </TabPane>
              <TabPane tab="4" key="4" disabled>
                <div className='flex flex-col gap-4 p-6'>                  
                  <Title level={3}>{` ${taxPayerParty.type} Signatory`} </Title>                    
                  <div className='flex flex-col w-full gap-4'>
                    
                    <Signature
                      signature={partyInfo.signature}
                      partySignature={handlePartySignatureChange} 
                      nextHandler={handleOverallSubmit} 
                      backHandler={handleBack}
                    />
                  </div>                 
                </div>
              </TabPane>
              <TabPane tab="5" key="5" disabled>
                <div className='flex flex-col gap-4 p-6'>                  
                  <Success/>
                </div>
              </TabPane>
            </Tabs>
            
            {activeTab === '1' ? (
              <div className='mt-[16px] flex justify-center items-center gap-4'>
                <Button onClick={handleBack} disabled={activeTab === '1'}>
                  Back
                </Button>
                <Button onClick={handleNext} disabled={activeTab === '3'}>
                  Next
                </Button>
              </div>
            ) : ( 
              <></> 
            )}                          
          </div>
          <div className='w-full h-full flex flex-col align-center mt-12'>            
            <FormPreview userInfo={userInfo} partyInfo={partyInfo} taxPayerParty={taxPayerParty} done={done}/>                        
          </div>
        </div>
        
      </div>
    </>
  );
};