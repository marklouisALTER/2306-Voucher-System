import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';

import styles from '../style'

const TINDisplay = ({source, sourceType}) => {
    
    const tinDigits = sourceType === 1 ? source.info.tin.replace(/-/g, '').split('')
    : source.tin.replace(/-/g, '').split('');
  
    // Group the digits into chunks of 3
    const tinChunks = [];
    for (let i = 0; i < tinDigits.length; i += 3) {
      tinChunks.push(tinDigits.slice(i, i + 3));
    }
    return (
        <>
            {tinChunks.map((chunk, chunkIndex) => (
                <View key={chunkIndex} style={styles.smallInput}>
                    <View style={styles.box}>
                    <View style={styles.lineContainer}>
                        {/* Make the first and last lines not visible */}
                        <View style={styles.transparentLine} />
                        {/* Display each digit in the chunk */}
                        {chunk.map((digit, digitIndex) => (
                        <>
                            <Text key={digitIndex} style={styles.inputText1}>
                            {digit}
                            </Text>
                            {digitIndex !== 2 ? (
                            <View style={styles.vline} />
                            ) : (<></>)}
                            
                        </>
                        ))}
                                
                        {/* Make the last vline not visible */}
                        {chunkIndex === tinChunks.length - 1 && <View style={styles.transparentLine} />}
                    </View>
                    </View>
                </View>
            
            ))}
    
        </>
    )
}

export default TINDisplay;