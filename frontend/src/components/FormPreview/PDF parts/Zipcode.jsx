import React from 'react';
import { Document, Page, Text, View, PDFViewer, Image } from '@react-pdf/renderer';

import styles from '../style'

const ZipCode = ({source, sourceType}) => {
    
    const zipCode = sourceType === 1 ? source.info.zipcode.split('') 
    : source.zip_code.split('') 
    
    return (
    
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
                    <Text style={{fontSize:10,marginTop:15}}> {zipCode[0]}</Text>
                    <View style={styles.vline} />
                    <Text style={{fontSize:10,marginTop:15}}> {zipCode[1]}</Text>
                    <View style={styles.vline} />
                    <Text style={{fontSize:10,marginTop:15}}> {zipCode[2]}</Text>
                    <View style={styles.vline} />
                    <Text style={{fontSize:10,marginTop:15}}> {zipCode[3]}</Text>
                    <View style={styles.transparentLine} />
                </View>
            </View>
    </View>
    
    );
}

export default ZipCode