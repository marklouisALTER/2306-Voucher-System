import React, { useState } from 'react'
import { StepsComponent } from '../components/steps/Steps'
import { UserType } from '../components/usertype/UserType'
import { Name } from '../components/Name/Name'
import { Address } from '../components/Address/Address'
import { Credentials } from '../components/Credentials/Credentials'
import { Signature } from '../components/Signature/Signature'
import { Modal } from '../components/Modal/Modal'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export const Register = () => {

    const [loading, setLoading] = useState(false);
    const [showStatus, setShowStatus] = useState(false);
    const [statusMessage, setStatusMessage] = useState({
      title: "",
      comment: "",
    })
    const [isRegistrationComplete, setIsRegistrationComplete] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        tin: "",
        usertype: "",
        firstname: "",
        middlename: "",
        lastname: "",
        registeredAddress: "",
        zipCode: "",
        foreignAddress: "",
        emailAddress: "",
        password: "",
        signature: "",
    })

    const [stepCounter, setStepCounter] = useState(0);
    
    const handleForm = (event) => {
        const { name, checked, type, value } = event.target        
        setFormData(prevState => ({
            ...prevState, 
            [name] : type === "checkbox" ? checked : value
        }))
    }

    const submitForm = async () => {
        try {
        const response = await axios.post('http://localhost:4000/api/register', formData);
            if (response.status === 200) {
                setLoading(false);
                setStatusMessage({
                    title: response.data.title,
                    comment: response.data.message
                });
                setShowStatus(prevState => !prevState);
                // navigate('/sign-in');
                setIsRegistrationComplete(true);
            } else if (response.status === 401) {
                setLoading(false);
                setStatusMessage({
                    title: response.data.title,
                    comment: response.data.message
                });
            setShowStatus(prevState => !prevState);
        }
            } catch (e) {
            setStatusMessage({
                title: e.response.data.title,
                comment:e.response.data.message
            });
            setShowStatus(prevState => !prevState);
        }
    };
    
    function showStep(step){
        switch(step){
            case 0 : 
                return <UserType 
                        tin={formData.tin} 
                        usertype = {formData.usertype}
                        handleForm={handleForm}

                        toggle={() => setStepCounter(prevState => prevState + 1)}
                    />
            case 1 : 
                return <Name 
                            firstname={formData.firstname} 
                            middlename={formData.middlename} 
                            lastname={formData.lastname}
                            handleForm={handleForm}
                            toggle={() => setStepCounter(prevState => prevState + 1)}
                            handleBack={() => setStepCounter(prevState => prevState - 1)}
                        />
            case 2 : 
                return <Address
                            registedAddress={formData.registedAddress} 
                            zipCode={formData.zipCode} 
                            foreignAddress={formData.foreignAddress}
                            handleForm={handleForm}
                            toggle={() => setStepCounter(prevState => prevState + 1)}
                            handleBack={() => setStepCounter(prevState => prevState - 1)}
                        />
            case 3 : 
                return <Credentials
                            emailAddress={formData.emailAddress} 
                            password={formData.password} 
                            confirmPassword={formData.confirmPassword}
                            handleForm={handleForm}
                            toggle={() => setStepCounter(prevState => prevState + 1)}
                            handleBack={() => setStepCounter(prevState => prevState - 1)}
                        />
            case 4 : 
                return <Signature 
                            handleForm={handleForm}
                            submitForm={submitForm}
                            // toggle={() => setStepCounter(prevState => prevState + 1)}
                            signature={formData.signature}
                            formData={setFormData}
                            handleBack={() => setStepCounter(prevState => prevState - 1)}
                        />
            default:
                break;
        }
    }

    return (
        <div className='w-full h-screen flex flex-col justify-center px-[1rem]'>
            <div className='flex flex-col items-center gap-5'>
            <h1 className='text-2xl font-primary text-center'><span className='text-primary font-semibold'>2307</span> VOUCHER SYSTEM</h1>
            <h1 className='font-secondary text-sm md:text-md text-center'>Sign up to create your account</h1>
                <div className='w-[80%] md:w-[60%] lg:w-[40%]'>
                    <StepsComponent steps={stepCounter}/>
                </div>
                <div className='w-[20rem] h-[20rem]'>
                    {/* <UserType tin={formData.tin} handleForm={handleForm}/> */}
                    {showStep(stepCounter)}
                </div>
            </div>
        {showStatus &&
            <Modal 
                title={statusMessage.title} 
                comment={statusMessage.comment} 
                toggle={
                    () => {
                        setShowStatus(prevState => !prevState);
                        if(isRegistrationComplete){
                            navigate('/sign-in');
                        }
                    }
                }/>
        }
        </div>
    )
}
