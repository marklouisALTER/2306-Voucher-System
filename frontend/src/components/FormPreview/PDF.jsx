import React, { useEffect } from 'react';
import { Document, Page, pdf, View, PDFViewer, Image, PDFDownloadLink, BlobProvider,Text } from '@react-pdf/renderer';


import BodyPartII from './2000B Details/PartII';
import Header from './PDF parts/Header';
import Footer from './PDF parts/Footer';
import BodyPartI from './PDF parts/PartI';
// import BodyPartII from './PDF parts/PartII';
import TINDisplay from './PDF parts/TIN';
import { Table } from './PDF parts/Table';
import { DateBox } from './PDF parts/DateViewBoxes';
import { SignatureView } from './PDF parts/SignatureView';
import bir from '../../assets/form.jpg';
import { payeeStyle, payorStyle, signature1, signature2, signature3, signature4, date1, date2,
date3, date4, date5, date6, date7, date8, date9, date10 } from './PDF parts/customStyles';
import styles from './style'

const MyPDFDocument = ({userInfo, partyInfo, taxPayerParty, controlNo}) => {
   
  
  const MyDoc = () => (
    <Document pageMode='fullScreen'>
      <Page size="A4" style={styles.page}>        
        <Image src={bir}/>            
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
                {`${partyInfo.firstname} ${partyInfo.middlename} ${partyInfo.lastname}`}
              </Text>
            ): (
              <Text style={styles.inputText}>
                {`${partyInfo.payor_name}`}
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
                {partyInfo.address}
              </Text>
          ): (
              <Text style={styles.inputText}>
                {userInfo.registered_address}
              </Text>
          )} 
        </View>
      
        

        {taxPayerParty.type === 'Payee' ?  
          <TINDisplay source={partyInfo} sourceType={1} style={payorStyle}/> 
        : 
          <TINDisplay source={userInfo} sourceType={0} style={payorStyle}/>  
        }

        <Table/>
        <View style={{position: 'absolute',
        top: 255.5,
        left:60,
        width: 488,
        height: 12,}}>
                
          {/* {taxPayerParty.type === 'Payee'  ? ( */}
              <Text style={styles.inputText}>
                Manuel Marin
              </Text>
          {/* ): (
              <Text style={styles.inputText}>
                {`${userInfo.firstname} ${userInfo.middlename} ${userInfo.lastname}`}
              </Text>
          )} */}
        </View>

        <View style={{position: 'absolute',
        top: 280,
        left:60,
        width: 439,
        height: 12,}}>
                
          {/* {taxPayerParty.type === 'Payee'  ? ( */}
              <Text style={styles.inputText}>
                dito sa tabi tabi
              </Text>
          {/* ): (
              <Text style={styles.inputText}>
                {`${userInfo.firstname} ${userInfo.middlename} ${userInfo.lastname}`}
              </Text>
          )} */}
        </View>

        <View style={{
            position: 'absolute',
            top: 281,
            left:506,
            width: 40,
            height: 12,                
            }}>
                <View style={styles.box}>
                    <View style={styles.lineContainer}>                                    
                    <View style={styles.transparentLine} />
                    <View style={styles.transparentLine} />
                        <Text style={{fontSize:10,marginTop:15}}> {1}</Text>
                        <View style={styles.vline} />
                        <Text style={{fontSize:10,marginTop:15}}> {3}</Text>
                        <View style={styles.vline} />
                        <Text style={{fontSize:10,marginTop:15}}> {4}</Text>
                        <View style={styles.vline} />
                        <Text style={{fontSize:10,marginTop:15}}> {5}</Text>
                        <View style={styles.transparentLine} />
                    </View>
                </View>
        </View>
                  

        <SignatureView style={signature1}/>
        <DateBox style={date1}/>

        <DateBox style={date7}/>
        <DateBox style={date2}/>

        <SignatureView style={signature2}/>
        <DateBox style={date3}/>
        
        
        <DateBox style={date8}/>
        <DateBox style={date4}/>

        <SignatureView style={signature3}/>
        <DateBox style={date9}/>
        <DateBox style={date5}/>

        <SignatureView style={signature4}/>
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
