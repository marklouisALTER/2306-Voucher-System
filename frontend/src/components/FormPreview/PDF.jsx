import React, { useEffect } from 'react';
import { Document, Page, pdf, View, PDFViewer, Image, PDFDownloadLink, BlobProvider,Text } from '@react-pdf/renderer';


import BodyPartII from './2000B Details/PartII';
import Header from './PDF parts/Header';
import Footer from './PDF parts/Footer';
import BodyPartI from './PDF parts/PartI';
// import BodyPartII from './PDF parts/PartII';
import TINDisplay from './PDF parts/TIN';
import { DateBox } from './PDF parts/DateViewBoxes';

import bir from '../../assets/form.jpg';

import styles from './style'

const MyPDFDocument = ({userInfo, partyInfo, taxPayerParty, controlNo}) => {
  
  const total = Object.values(partyInfo.details)
  .filter(value => !isNaN(Number(value))) 
  .reduce((acc, curr) => acc + Number(curr), 0);

  const payeeStyle = [
    {
      position: 'absolute',
      top: 131.3,
      left: 206,
      width: 33,
      height: 12,
    },
    {
      position: 'absolute',
      top: 131.4,
      left: 251.5,
      width: 33,
      height: 12,
    },
    {
      position: 'absolute',
      top: 131.4,
      left: 297.5,
      width: 33,
      height: 12,
    },
  ];

  const payorStyle = [
    {
      position: 'absolute',
      top: 232.6,
      left: 206,
      width: 33,
      height: 12,
    },
    {
      position: 'absolute',
      top: 232.5,
      left: 251.5,
      width: 33,
      height: 12,
    },
    {
      position: 'absolute',
      top: 232.5,
      left: 297.5,
      width: 33,
      height: 12,
    },
  ];

  
  const date1 = [
    {
      position: 'absolute',
      top: 483.3,
      left:456.9,
      width: 22,
      height: 12,                
    },
    {
      position: 'absolute',
      top: 483.3,
      left:480.5,
      width: 22,
      height: 12,                
    },
    {
      position: 'absolute',
      top: 483.3,
      left:503.5,
      width: 45,
      height: 12,                
      }
    
  ]

  const date2 = [
    {
      position: 'absolute',
      top: 518.3,
      left:456.9,
      width: 22,
      height: 12,                
    },
    {
      position: 'absolute',
      top: 518.3,
      left:480.5,
      width: 22,
      height: 12,                
    },
    {
      position: 'absolute',
      top: 518.3,
      left:503.5,
      width: 45,
      height: 12,                
      }
    
  ]

  const date3 = [
    {
      position: 'absolute',
      top: 550.9,
      left:456.9,
      width: 22,
      height: 12,                
    },
    {
      position: 'absolute',
      top: 550.9,
      left:480.5,
      width: 22,
      height: 12,                
    },
    {
      position: 'absolute',
      top: 550.9,
      left:503.5,
      width: 45,
      height: 12,                
      }
    
  ]

  const date4 = [
    {
      position: 'absolute',
      top: 585.7,
      left:456.9,
      width: 22,
      height: 12,                
    },
    {
      position: 'absolute',
      top: 585.7,
      left:480.5,
      width: 22,
      height: 12,                
    },
    {
      position: 'absolute',
      top: 585.7,
      left:503.5,
      width: 45,
      height: 12,                
      }
    
  ]

  const date5 = [
    {
      position: 'absolute',
      top: 682.9,
      left:456.9,
      width: 22,
      height: 12,                
    },
    {
      position: 'absolute',
      top: 682.9,
      left:479.5,
      width: 22,
      height: 12,                
    },
    {
      position: 'absolute',
      top: 682.9,
      left:503.5,
      width: 45,
      height: 12,                
      }
    
  ]

  const date6 = [
    {
      position: 'absolute',
      top: 791.7,
      left:457.5,
      width: 22,
      height: 12,                
    },
    {
      position: 'absolute',
      top: 791.7,
      left:480.5,
      width: 22,
      height: 12,                
    },
    {
      position: 'absolute',
      top: 791.7,
      left:503.5,
      width: 45,
      height: 12,                
      }
    
  ]

  const MyDoc = () => (
    <Document pageMode='fullScreen'>
      <Page size="A4" style={styles.page}>        
        <Image src={bir}/>            
        <Header controlNo={controlNo}/>
        {/* {taxPayerParty.type === 'Payee' ?   */}
          <TINDisplay source={partyInfo} sourceType={1} style={payeeStyle}/> 
        {/* : 
          <TINDisplay source={userInfo} sourceType={0} style={payeeStyle}/>  
        } */}
        <View style={{position: 'absolute',
        top: 153.7,
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
        top: 179,
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
            top: 179.8,
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

        {/* {taxPayerParty.type === 'Payee' ?   */}
        <TINDisplay source={partyInfo} sourceType={1} style={payorStyle}/> 
        {/* : 
          <TINDisplay source={userInfo} sourceType={0} style={payorStyle}/>  
        } */}

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
        
        <DateBox style={date1}/>

        <DateBox style={date2}/>

        <DateBox style={date3}/>

        <DateBox style={date4}/>

        <DateBox style={date5}/>

        <DateBox style={date6}/>


{/*
            <View style={styles.body}>
              
              <View style={{border:3,width:'50%'}}>      
                <BodyPartI                  
                  title="P a y e e ‎ I n f o r m a t i o n "
                  number={['2', '3', '4', '5']}
                  partyInfo={partyInfo}
                  userInfo={userInfo}
                  taxPayerParty={taxPayerParty}
                
                />
                <BodyPartI                  
                  title="P a y o r ‎ I n f o r m a t i o n "
                  number={['6', '7', '8', '9']}
                  partyInfo={partyInfo}
                  userInfo={userInfo}
                  taxPayerParty={taxPayerParty}               
                />
              </View>   
              
              <BodyPartII userInfo={userInfo} partyInfo={partyInfo} taxPayerParty={taxPayerParty} total={total}/>
              <BodyPartII/>
               */}
            {/* </View> */}
            
            {/* <Footer userInfo={userInfo} partyInfo={partyInfo} taxPayerParty={taxPayerParty} /> */}
            
                   
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
