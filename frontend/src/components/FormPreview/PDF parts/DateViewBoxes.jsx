import React from 'react';
import { Text, View, } from '@react-pdf/renderer';
import moment from 'moment';
import styles from '../style'

export const DateBox = ({style}) => {
   
    const currentDate = moment();
    const month = currentDate.format('MM').split('');
    const day = currentDate.format('DD');
    const year = currentDate.format('YYYY').split('');
    return (
        <>
        <View style={style[0]}>
                <View style={styles.box}>
                    <View style={styles.lineContainer}>                                    
                        <View style={styles.transparentLine} />
                        <Text style={{fontSize:10,marginTop:15}}> {month[0]}</Text>
                        <View style={styles.vline} />                
                        <Text style={{fontSize:10,marginTop:15}}> {month[1]}</Text>        
                        <View style={styles.transparentLine} />
                    </View>
                </View>
        </View>
        <View style={style[1]}>
                <View style={styles.box}>
                    <View style={styles.lineContainer}>                                    
                    <View style={styles.transparentLine} />
                        <Text style={{fontSize:10,marginTop:15}}> {day[0]}</Text>
                        <View style={styles.vline} />
                        <Text style={{fontSize:10,marginTop:15}}> {day[1]}</Text>       
                        <View style={styles.transparentLine} />
                    </View>
                </View>
        </View>
        <View style={style[2]}>
                <View style={styles.box}>
                    <View style={styles.lineContainer}>                                    
                    <View style={styles.transparentLine} />
                    <View style={styles.transparentLine} />
                        <Text style={{fontSize:10,marginTop:15}}> {year[0]}</Text>
                        <View style={styles.vline} />
                        <Text style={{fontSize:10,marginTop:15}}> {year[1]}</Text>
                        <View style={styles.vline} />
                        <Text style={{fontSize:10,marginTop:15}}> {year[2]}</Text>
                        <View style={styles.vline} />
                        <Text style={{fontSize:10,marginTop:15}}> {year[3]}</Text>
                        <View style={styles.transparentLine} />
                    </View>
                </View>
        </View>
        </>
    );
};
  

  