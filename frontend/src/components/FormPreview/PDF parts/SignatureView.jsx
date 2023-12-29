import React, { useState } from 'react';
import { Text, View, Image, } from '@react-pdf/renderer';
import styles from '../style'


export const SignatureView = ({source, name, style}) => {
    
    const getFullSignature = () => {
        if (!source.startsWith('data:image/png;base64,')) {
          return `data:image/png;base64,${source}`;
        }
        return source;
      };
    return(
        <View style={style}> 
            
            <Image src= {getFullSignature()} style={styles.signatureImage} />
            <Text style={{fontSize:10}}>
            {name}
                                    
            </Text>
            
        </View>
    )
}