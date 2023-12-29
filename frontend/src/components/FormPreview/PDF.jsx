import React from 'react';
import { Document, Page, View, Image, Text } from '@react-pdf/renderer';


import Header from './PDF parts/Header';

import TINDisplay from './PDF parts/TIN';
import ZipCode from './PDF parts/Zipcode';
import { Table } from './PDF parts/Table';
import { Table1 } from './PDF parts/2000b/Table';
import { DateBox } from './PDF parts/DateViewBoxes';
import { SignatureView } from './PDF parts/SignatureView';
import bir from '../../assets/form.jpg';
import bir1 from '../../assets/form1.jpg';
import { payeeStyle, payorStyle, signature1, signature2, signature3, signature4, date1, date2,
date3, date4, date5, date6, date7, date8, date9, date10, zipcode1, zipcode2 } from './PDF parts/customStyles';
import styles from './style'

const MyPDFDocument = ({userInfo, partyInfo, taxPayerParty, controlNo}) => {
  
  const MyDoc = () => (
    <Document pageMode='fullScreen'>
      <Page size="A4" style={styles.page}>        
        <Image src={bir1}/>            
        <Header controlNo={controlNo}/>
        
        {taxPayerParty.type === 'Payee' ?  
          <TINDisplay source={partyInfo} sourceType={1} style={payeeStyle}/> 
        : 
          <TINDisplay source={userInfo} sourceType={0} style={payeeStyle}/>  
        } 
        <View style={{position: 'absolute',
        top: 153.7,
        left:60,
        width: 488,
        height: 12,}}>
                
          {taxPayerParty.type === 'Payee'  ? (
            taxPayerParty.class === 'individual' ? (
              <Text style={styles.inputText}>
                {`${partyInfo.info.firstname} ${partyInfo.info.middlename} ${partyInfo.info.lastname}`}
              </Text>
            ): (
              <Text style={styles.inputText}>
                {`${partyInfo.info.payor_name}`}
              </Text>
            )
              
          ): (
              <Text style={styles.inputText}>
                {`${userInfo.firstname} ${userInfo.middlename} ${userInfo.lastname}`}
              </Text>
          )}
        </View>

        <View style={{position: 'absolute',
        top: 179,
        left:60,
        width: 439,
        height: 12,}}>
                
          {taxPayerParty.type === 'Payee'  ? (
              <Text style={styles.inputText}>
                {partyInfo.info.address}
              </Text>
          ): (
              <Text style={styles.inputText}>
                {userInfo.registered_address}
              </Text>
          )} 
        </View>
        
        {taxPayerParty.type === 'Payee' ?  
          <ZipCode source={partyInfo} sourceType={1} style={zipcode1} /> 
        : 
          <ZipCode source={userInfo} sourceType={0} style={zipcode1} />  
        } 
        

        {taxPayerParty.type === 'Payor' ?  
          <TINDisplay source={partyInfo} sourceType={1} style={payorStyle}/> 
        : 
          <TINDisplay source={userInfo} sourceType={0} style={payorStyle}/>  
        }

        {/* <Table partyInfo={partyInfo}/> */}
        <Table1 partyInfo={partyInfo}/> 
        <View style={{position: 'absolute',
        top: 255.5,
        left:60,
        width: 488,
        height: 12,}}>
                
          {taxPayerParty.type  === 'Payor'  ? (
            taxPayerParty.class === 'individual' ? (
              <Text style={styles.inputText}>
                {`${partyInfo.info.firstname} ${partyInfo.info.middlename} ${partyInfo.info.lastname}`}
              </Text>
            ): (
              <Text style={styles.inputText}>
                {`${partyInfo.info.payor_name}`}
              </Text>
            )
              
          ): (
              <Text style={styles.inputText}>
                {`${userInfo.firstname} ${userInfo.middlename} ${userInfo.lastname}`}
              </Text>
          )}
        </View>

        <View style={{position: 'absolute',
        top: 280,
        left:60,
        width: 439,
        height: 12,}}>
                
          {taxPayerParty.type  === 'Payor'  ? (
              <Text style={styles.inputText}>
                {partyInfo.info.address}
              </Text>
          ): (
              <Text style={styles.inputText}>
                {userInfo.registered_address}
              </Text>
          )} 
        </View>

        {taxPayerParty.type === 'Payor' ?  
          <ZipCode source={partyInfo} sourceType={1} style={zipcode2}/> 
        : 
          <ZipCode source={userInfo} sourceType={0} style={zipcode2}/>  
        }


                  
        <SignatureView 
          source={taxPayerParty.type !== 'Payee' ? partyInfo.signature : userInfo.signature}
          name={taxPayerParty.type !== 'Payee' ? 
            (taxPayerParty.class === 'individual' ? 
              `${partyInfo.info.firstname} ${partyInfo.info.middlename} ${partyInfo.info.lastname}` 
            : `${partyInfo.info.payor_name}`) 
          : `${userInfo.firstname} ${userInfo.middlename} ${userInfo.lastname}`}

          style={signature1}/>
        <DateBox style={date1}/>

        <DateBox style={date7}/>
        <DateBox style={date2}/>

        <SignatureView 
          source={taxPayerParty.type === 'Payee' ? partyInfo.signature : userInfo.signature}
          name={taxPayerParty.type === 'Payee' ? 
            (taxPayerParty.class === 'individual' ? 
              `${partyInfo.info.firstname} ${partyInfo.info.middlename} ${partyInfo.info.lastname}` 
            : `${partyInfo.info.payor_name}`) 
          : `${userInfo.firstname} ${userInfo.middlename} ${userInfo.lastname}`}
          style={signature2}/>
        <DateBox style={date3}/>
        
        
        <DateBox style={date8}/>
        <DateBox style={date4}/>

        <SignatureView 
         source={taxPayerParty.type !== 'Payee' ? partyInfo.signature : userInfo.signature}
         name={taxPayerParty.type !== 'Payee' ? 
           (taxPayerParty.class === 'individual' ? 
             `${partyInfo.info.firstname} ${partyInfo.info.middlename} ${partyInfo.info.lastname}` 
           : `${partyInfo.info.payor_name}`) 
         : `${userInfo.firstname} ${userInfo.middlename} ${userInfo.lastname}`}
          style={signature3}/>
        <DateBox style={date9}/>
        <DateBox style={date5}/>

        <SignatureView 
        source={taxPayerParty.type === 'Payee' ? partyInfo.signature : userInfo.signature}
        name={taxPayerParty.type === 'Payee' ? 
          (taxPayerParty.class === 'individual' ? 
            `${partyInfo.info.firstname} ${partyInfo.info.middlename} ${partyInfo.info.lastname}` 
          : `${partyInfo.info.payor_name}`) 
        : `${userInfo.firstname} ${userInfo.middlename} ${userInfo.lastname}`}
          style={signature4}/>
        <DateBox style={date10}/>
        <DateBox style={date6}/>
                   
      </Page>
    </Document>
  );


  return (
    <>
      <MyDoc />
      
    </>
  );
};

export default MyPDFDocument;
