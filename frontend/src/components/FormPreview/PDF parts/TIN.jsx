import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';

import styles from '../style'

const TINDisplay = ({source, sourceType}) => {
    
    // const tinDigits = sourceType === 1 ? source.info.tin.replace(/-/g, '').split('')
    // : source.tin.replace(/-/g, '').split('');
    
    const tinDigits = [
        ['1','2','3'],
        ['1', '2', '3'],
        ['1', '2', '3']
      ];
    
    // Group the digits into chunks of 3
    const tinChunks = [];
    for (let i = 0; i < tinDigits.length; i += 3) {        
      tinChunks.push(tinDigits.slice(i, i + 3));
    }
    console.log(tinChunks);
    
    return (
        <>          
            <View style={{
                position: 'absolute',
                top: 131.3,
                left:206,
                width: 33,
                height: 12,             
                }}>
                    <View style={styles.box}>
                        <View style={styles.lineContainer}>                                    
                        <View style={styles.transparentLine} />
                            <Text style={{fontSize:10,marginTop:15}}> {tinDigits[0][0]}</Text>
                            <View style={styles.vline} />
                            <Text style={{fontSize:10,marginTop:15}}> {tinDigits[0][1]}</Text>       
                            <View style={styles.vline} />
                            <Text style={{fontSize:10,marginTop:15}}> {tinDigits[0][2]}</Text>
                            <View style={styles.transparentLine} />
                        </View>
                    </View>
            </View>

            <View style={{
                position: 'absolute',
                top: 131.4,
                left:251.5,
                width: 33,
                height: 12,             
                }}>
                    <View style={styles.box}>
                        <View style={styles.lineContainer}>                                    
                        <View style={styles.transparentLine} />
                            <Text style={{fontSize:10,marginTop:15}}> {tinDigits[1][0]}</Text>
                            <View style={styles.vline} />
                            <Text style={{fontSize:10,marginTop:15}}> {tinDigits[1][1]}</Text>       
                            <View style={styles.vline} />
                            <Text style={{fontSize:10,marginTop:15}}> {tinDigits[1][2]}</Text>
                            <View style={styles.transparentLine} />
                        </View>
                    </View>
            </View>

            <View style={{
                position: 'absolute',
                top: 131.4,
                left:297.5,
                width: 33,
                height: 12,             
                }}>
                    <View style={styles.box}>
                        <View style={styles.lineContainer}>                                    
                        <View style={styles.transparentLine} />
                            <Text style={{fontSize:10,marginTop:15}}> {tinDigits[2][0]}</Text>
                            <View style={styles.vline} />
                            <Text style={{fontSize:10,marginTop:15}}> {tinDigits[2][1]}</Text>       
                            <View style={styles.vline} />
                            <Text style={{fontSize:10,marginTop:15}}> {tinDigits[2][2]}</Text>
                            <View style={styles.transparentLine} />
                        </View>
                    </View>
            </View>
    
        </>
    )
}

export default TINDisplay;