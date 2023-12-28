import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';

import styles from '../style'

const TINDisplay = ({source, sourceType,style}) => {
    
    const tinDigits = sourceType === 1 ? source.info.tin.replace(/-/g, '').split('')
    : source.tin.replace(/-/g, '').split('');

    return (
        <>          
            <View style={style[0]}>
                    <View style={styles.box}>
                        <View style={styles.lineContainer}>                                    
                        <View style={styles.transparentLine} />
                            <Text style={{fontSize:10,marginTop:15}}> {tinDigits[0]}</Text>
                            <View style={styles.vline} />
                            <Text style={{fontSize:10,marginTop:15}}> {tinDigits[1]}</Text>       
                            <View style={styles.vline} />
                            <Text style={{fontSize:10,marginTop:15}}> {tinDigits[2]}</Text>
                            <View style={styles.transparentLine} />
                        </View>
                    </View>
            </View>

            <View style={style[1]}>
                    <View style={styles.box}>
                        <View style={styles.lineContainer}>                                    
                        <View style={styles.transparentLine} />
                            <Text style={{fontSize:10,marginTop:15}}> {tinDigits[3]}</Text>
                            <View style={styles.vline} />
                            <Text style={{fontSize:10,marginTop:15}}> {tinDigits[4]}</Text>       
                            <View style={styles.vline} />
                            <Text style={{fontSize:10,marginTop:15}}> {tinDigits[5]}</Text>
                            <View style={styles.transparentLine} />
                        </View>
                    </View>
            </View>

            <View style={style[2]}>
                    <View style={styles.box}>
                        <View style={styles.lineContainer}>                                    
                        <View style={styles.transparentLine} />
                            <Text style={{fontSize:10,marginTop:15}}> {tinDigits[6]}</Text>
                            <View style={styles.vline} />
                            <Text style={{fontSize:10,marginTop:15}}> {tinDigits[7]}</Text>       
                            <View style={styles.vline} />
                            <Text style={{fontSize:10,marginTop:15}}> {tinDigits[8]}</Text>
                            <View style={styles.transparentLine} />
                        </View>
                    </View>
            </View>
    
        </>
    )
}

export default TINDisplay;