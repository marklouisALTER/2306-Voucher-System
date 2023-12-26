import React, { useEffect } from 'react';
import { Document, Page, pdf, View, PDFViewer, Image, PDFDownloadLink, BlobProvider } from '@react-pdf/renderer';


import BodyPartII from './2000B Details/PartII';
import Header from './PDF parts/Header';
import Footer from './PDF parts/Footer';
import BodyPartI from './PDF parts/PartI';
// import BodyPartII from './PDF parts/PartII';


import styles from './style'

const MyPDFDocument = ({userInfo, partyInfo, taxPayerParty, controlNo}) => {

  const total = Object.values(partyInfo.details)
  .filter(value => !isNaN(Number(value))) 
  .reduce((acc, curr) => acc + Number(curr), 0);

  const MyDoc = () => (
    <Document pageMode='fullScreen'>
      <Page size="A4" style={styles.page}>
        <View style={styles.borderContainer}>
          <View style={styles.content}>
            <Header controlNo={controlNo}/>

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
              
              {/* <BodyPartII userInfo={userInfo} partyInfo={partyInfo} taxPayerParty={taxPayerParty} total={total}/> */}
              <BodyPartII/>
              
            </View>
            
            <Footer userInfo={userInfo} partyInfo={partyInfo} taxPayerParty={taxPayerParty} />
            
          </View>
        </View>               
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
