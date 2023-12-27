import React from 'react';
import { Text, View, Image, } from '@react-pdf/renderer';
import styles from '../style'
import moment from 'moment';


import DateView from './DateView';
const Header = ({controlNo}) => {

    const initialControlNo = 1000 + controlNo;
    const stringControlNo = initialControlNo + 'A';

    const currentDate = moment();
    const month = currentDate.format('MM').split('');
    const day = currentDate.format('DD');
    const year = currentDate.format('YYYY').split('');
    // const currentMonth = currentDate.getMonth() + 1;
    // const currentDay = currentDate.getDate();

    // const currentHour = currentDate.getHours();    
    // const currentMinute = currentDate.getMinutes().toString().padStart(2, '0');
    
    return (
        <>
            <View style={{
                position: 'absolute',
                top: 40,
                right: 50,  // Change left to right
            }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 12 }}> Internal Control No. </Text>
                    <Text style={{ color: 'red', fontSize: 12 }}> {stringControlNo} </Text>
                </View>
            </View>

            <View style={{
                position: 'absolute',
                top: 104.6,
                left:159.5,
                width: 22,
                height: 12,                
                }}>
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
            <View style={{
                position: 'absolute',
                top: 104.6,
                left:182.5,
                width: 22,
                height: 12,                
                }}>
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
            <View style={{
                position: 'absolute',
                top: 104.6,
                left:205.5,
                width: 45,
                height: 12,                
                }}>
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
            

            <View style={{
                position: 'absolute',
                top: 104.6,
                left:378.5,
                width: 22,
                height: 12,                
                }}>
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
             <View style={{
                position: 'absolute',
                top: 104.6,
                left:401.5,
                width: 22,
                height: 12,                
                }}>
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
            <View style={{
                position: 'absolute',
                top: 104.6,
                left:424.5,
                width: 45,
                height: 12,                
                }}>
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
    )
}

export default Header;