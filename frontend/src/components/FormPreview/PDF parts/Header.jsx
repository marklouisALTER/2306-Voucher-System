import React from 'react';
import { Text, View, Image, } from '@react-pdf/renderer';
import styles from '../style'

import bir from '../../../assets/logo.jpg';

import DateView from './DateView';
const Header = ({controlNo}) => {

    const initialControlNo = 1000 + controlNo + 1;
    const stringControlNo = initialControlNo + 'A';

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    const currentHour = currentDate.getHours();    
    const currentMinute = currentDate.getMinutes().toString().padStart(2, '0');
    
    return (
        <>
            <View style={{
                justifyContent: 'space-between',                
                flexDirection: 'row',
                
            }}>
                <Text style={styles.bold}> {' ▶ '}  DLN: </Text>
                <View style={{
                    flexDirection: 'row',                
                }}>
                    <Text style={{fontSize:12}}> Internal Control No.  </Text>
                    <Text style={{color:'red',fontSize:12}}> {stringControlNo} </Text>
                </View>
            </View>

            <View style={styles.header}>              
              
                <View style={{flexDirection:'column', padding:10,}}>
                    <View style={{
                    flexDirection: "row",
                    justifyContent:'space-between',
                    marginBottom: 30,}}>                                            
                        <View style={styles.logoContainer}>                        
                        <Image src={bir}/>
                        </View>
                        <View style={{flexDirection:'column', marginLeft:10}}>
                        <Text style={{fontSize:8,marginBottom:8}}>
                            Republika ng Pilipinas
                        </Text>
                        <Text style={{fontSize:8,marginBottom:8}}>
                            Kagawaran ng Pananalapi
                        </Text>
                        <Text style={{fontSize:9}}>
                            Kawanihan ng Rentas Internas
                        </Text>
                        </View>
                    </View>

                    <Text style={{ fontSize: 12, fontStyle: 'italic', fontFamily: 'Times-Roman' }}>
                        (Excluding Compensation Income)
                    </Text>
                </View>
              
                <View style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    
                    
                }}>
                    <Text style={{fontSize:15, fontWeight: 'bold'}}>Certificate of Income</Text>
                    <Text style={{fontSize:15, fontWeight: 'bold'}}>Payment Not Subject</Text>
                    <Text style={{fontSize:15, fontWeight: 'bold'}}>to Withholding Tax</Text>
                    
                </View>
                {/* THIRD COLUMN */}
                <View style={{flexDirection:'column',padding:5,marginRight:10,}}>
                    <View style={{flexDirection:'column'}}>
                        <Text style={{fontSize:9}}>BIR Form No.</Text>
                        <Text style={{fontSize:26}}>2304</Text>
                        <Text style={{fontSize:9}}>July 1999(ENCS)</Text>
                    </View>
                    <Text style={{fontSize:13}}>Original Copy</Text>
                </View>
            </View>

            <View style={styles.subHeader}>
                <View style={{flexDirection:'row',}}>
                    <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
                        <Text style={styles.normal}> 1 </Text>
                        <View style={{flexDirection:'column',justifyContent:'space-evenly'}}>
                            <Text style={styles.normal}> For the year </Text>
                            <Text style={styles.normal}> ( YYYY )</Text>
                        </View>
                    </View>
                        
                    <View style={{flexDirection:'row',marginLeft:10, justifyContent:'center', alignItems:'center'}}>
                        <View style={{flexDirection:'col',justifyContent:'space-between',marginRight:5}}>
                            <Text style={styles.normal}> 1 </Text>
                            <Text style={styles.normal}> {'>'} </Text>
                        </View>
                        <DateView/>
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center',
                        marginLeft:30}}>                        
                        <View style={{flexDirection:'column',justifyContent:'space-evenly'}}>
                            <Text style={{fontSize:9}}> Month </Text>                            
                        </View>
                    </View>
                        
                    <View style={{flexDirection:'row',marginLeft:10, justifyContent:'center', alignItems:'center'}}>                        
                        <View style={styles.input}>
                            <View style={styles.box}>
                                <Text style={{marginTop:2.5, marginLeft:10,  fontSize:11}}> {currentMonth} </Text>
                            </View>
                        </View>
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center',
                        marginLeft:30}}>                        
                        <View style={{flexDirection:'column',justifyContent:'space-evenly'}}>
                            <Text style={{fontSize:9}}> Day </Text>                            
                        </View>
                    </View>
                        
                    <View style={{flexDirection:'row',marginLeft:10, justifyContent:'center', alignItems:'center'}}>                        
                        <View style={styles.input}>
                            <View style={styles.box}>
                                <Text style={{marginTop:2.5, marginLeft:10,  fontSize:11}}> {currentDay} </Text>
                            </View>
                        </View>
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center',
                        marginLeft:30}}>                        
                        <View style={{flexDirection:'column',justifyContent:'space-evenly'}}>
                            <Text style={{fontSize:9}}> Time </Text>                            
                        </View>
                    </View>
                        
                    <View style={{flexDirection:'row',marginLeft:10, justifyContent:'center', alignItems:'center'}}>                        
                        <View style={styles.input}>
                            <View style={styles.box}>
                            <Text style={{marginTop:2.5, marginLeft:10,  fontSize:11}}> 
                                {currentHour}:{currentMinute}
                            </Text>
                            
                            </View>
                        </View>
                    </View>
                </View>
               
                   
               
            </View>
        </>
    )
}

export default Header;