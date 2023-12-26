import React from 'react';
import { Document, Page, Text, View, PDFViewer, Image } from '@react-pdf/renderer';

import styles from '../style'

const ZipCode = ({source, sourceType}) => {
    
    const zipCode = sourceType === 1 ? source.info.zipcode.split('') 
    : source.zip_code.split('') 
    
    return (
    
        <View style={styles.box}>
          <View style={styles.lineContainer}>
            <View style={styles.transparentLine} />
            {zipCode.map((digit, index) => (
              <React.Fragment key={index}>
                <Text style={styles.inputText1}>{digit}</Text>
                {index !== 3 && <View style={styles.vline} />}
              </React.Fragment>
            ))}
            <View style={styles.transparentLine} />
          </View>
        </View>
    
    );
}

export default ZipCode