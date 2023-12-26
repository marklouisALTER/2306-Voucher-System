import React, { useState } from 'react';
import { Text, View, Image, } from '@react-pdf/renderer';
import styles from '../style'
import moment from 'moment';


const Footer = ({userInfo, partyInfo, taxPayerParty}) => {
    
    const currentDate = moment();
    const month = currentDate.format('MM').split('');
    const day = currentDate.format('DD');
    const year = currentDate.format('YYYY').split('');
    
    const getFullSignature = () => {
        if (!partyInfo.signature.startsWith('data:image/png;base64,')) {
          return `data:image/png;base64,${partyInfo.signature}`;
        }
        return partyInfo.signature;
      };
    return(
        <>
            <View style={styles.footer}>            
                <View style={{paddingRight: 50,paddingLeft:50, paddingTop:10}}>
                    <Text style={styles.footerText}>
                    ‎ ‎ ‎ ‎
                    ‎ ‎ ‎ ‎
                    ‎ ‎ ‎ ‎
                    I declare, under the penalties of perjury, 
                    that this certificate has been made in good faith, verified 
                    by me, and to the best of my knowledge and belief,is true and 
                    correct, pursuant to the provisions of the National Internal 
                    Revenue Code, as amended, and the regulations issued under 
                    authority thereof.</Text>
                    <View style={{marginTop:25}}>
                    
                        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                            <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={styles.number}> 25 </Text>
                                    <View style={styles.signatureArea}>                                  
                                        {taxPayerParty.type !== 'Payee' ? (
                                            <>
                                                <Image src={getFullSignature()} style={styles.signatureImage} />
                                                
                                                <Text style={styles.signatureText}>
                                                    {taxPayerParty.class === 'individual' ? (
                                                        `${partyInfo.info.firstname} ${partyInfo.info.middlename} ${partyInfo.info.lastname}`.toUpperCase()
                                                    ) : (
                                                        `${partyInfo.info.payor_name}`.toUpperCase()
                                                    )}
                                                    
                                                </Text>
                                            </>
                                        ): (
                                            <>
                                                <Image src={`data:image/png;base64,${userInfo.signature}`} style={styles.signatureImage} />
                                                <Text style={styles.signatureText}>
                                                {`${userInfo.firstname} ${userInfo.middlename} ${userInfo.lastname}`.toUpperCase()}
                                                </Text>
                                            </>
                                        )}               
                                        
                                        <View style={styles.line} />
                                        <View style={styles.line} />
                                    </View>
                                </View>                      
                            
                                <Text style={styles.signatureLabel}>Payor/Authorized Agent Signature over Printed Name</Text>    
                            </View>

                            <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={styles.number}> 26 </Text>
                                    
                                    <View style={styles.signatureArea}> 
                                        {taxPayerParty.type === 'Payee' ? (
                                            <>
                                                <Image src={getFullSignature()} style={styles.signatureImage} />
                                                <Text style={styles.signatureText}>
                                                    {taxPayerParty.class === 'individual' ? (
                                                        `${partyInfo.info.firstname} ${partyInfo.info.middlename} ${partyInfo.info.lastname}`.toUpperCase()
                                                    ) : (
                                                        `${partyInfo.info.payor_name}`.toUpperCase()
                                                    )}
                                                    
                                                </Text>
                                            </>
                                        ): (
                                            <>
                                                <Image src={`data:image/png;base64,${userInfo.signature}`} style={styles.signatureImage} />
                                                <Text style={styles.signatureText}>
                                                {`${userInfo.firstname} ${userInfo.middlename} ${userInfo.lastname}`.toUpperCase()}
                                                </Text>
                                            </>
                                        )}                     
                                        <View style={styles.line} />
                                    </View>
                                </View>
                                
                                <Text style={styles.signatureLabel}>Payee/Authorized Agent Signature over Printed Name</Text>    
                            </View>                                                        
                        </View>
                    </View>                                                                      
                </View>
                <View style={{width: '100%',
                    height: '20%',
                    // padding: 10,
                    borderTop: 1,
                    borderColor: 'black',                
                    flexDirection:'row',
                    justifyContent:'space-between',
                    marginTop:10}}>
                    
                </View>
                <View style={{width: '100%',
                    height: '20%',
                    // padding: 10,
                    borderTop: 1,
                    borderColor: 'black',                
                    flexDirection:'column',
                    alignItems:'center',
                    justifyContent:'center',
                    marginTop:10,
                    backgroundColor: '#c0c0c0',}}>
                    <Text style={styles.normal}>Signature over Printed Name of Payee/Payee's Authorized Representative/Tax Agent</Text>
                    <Text style={styles.normal}>(Indicate Title/Designation and TIN)</Text>
                </View>
                <View style={{width: '100%',
                    height: '20%',
                    padding: 5,
                    borderTop: 1,
                    borderColor: 'black',                
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    backgroundColor: '#c0c0c0',}}>
                    
                    <View style={{flexDirection:'column',alignItems:'center'}}>
                        <Text style={{fontSize:6}}> Tax Agent Accreditation No./</Text>
                        <Text style={{fontSize:6}}> Attorney's Roll No. (if applicable)</Text>
                    </View>
                    <View style={{width: '20%',
                    height: 15,
                    border: 1,
                    borderColor: 'black',
                    backgroundColor: 'white',}}>
                        <View style={styles.rectanglebox}>
                        {/* INPUT HERE */}
                        </View>
                    </View>
                    
                    <View style={{flexDirection:'column',alignItems:'center'}}>
                        <Text style={{fontSize:6}}> Date of Issue</Text>
                        <Text style={{fontSize:6}}> (MM/DD/YYYY)</Text>
                    </View>
                                                            
                    <View style={{flexDirection:'row'}}> 
                        <View style={{width: 30,
                        height: 20,
                        border: 1,
                        borderColor: 'black',
                        backgroundColor: 'white',}}>
                            <View style={styles.box}>
                                <View style={styles.lineContainer}>                                    
                                    <View style={styles.transparentLine} />
                                    <Text style={{fontSize:11}}> {month[0]}</Text>
                                    <View style={styles.vline} />                
                                    <Text style={{fontSize:11}}> {month[1]}</Text>        
                                    <View style={styles.transparentLine} />
                                </View>
                            </View>
                        </View>
                        <View style={{width: 30,
                        height: 20,
                        border: 1,
                        borderColor: 'black',
                        backgroundColor: 'white',}}>
                            <View style={styles.box}>
                                <View style={styles.lineContainer}>                                    
                                    <View style={styles.transparentLine} />
                                    <Text style={{fontSize:11}}> {day[0]}</Text>
                                    <View style={styles.vline} />
                                    <Text style={{fontSize:11}}> {day[1]}</Text>       
                                    <View style={styles.transparentLine} />
                                </View>
                            </View>
                        </View>          
                        <View style={{width: 50,
                        height: 20,
                        border: 1,
                        borderColor: 'black',
                        backgroundColor: 'white',}}>
                            <View style={styles.box}>
                                <View style={styles.lineContainer}>                                    
                                    <View style={styles.transparentLine} />
                                    <Text style={{fontSize:11}}> {year[0]}</Text>
                                    <View style={styles.vline} />
                                    <Text style={{fontSize:11}}> {year[1]}</Text>
                                    <View style={styles.vline} />
                                    <Text style={{fontSize:11}}> {year[2]}</Text>
                                    <View style={styles.vline} />
                                    <Text style={{fontSize:11}}> {year[3]}</Text>
                                    <View style={styles.transparentLine} />
                                </View>
                            </View>
                        </View>          
                    </View>
                    

                    <View style={{flexDirection:'column',alignItems:'center'}}>
                        <Text style={{fontSize:6}}> Date of Expiry</Text>
                        <Text style={{fontSize:6}}> (MM/DD/YYYY)</Text>
                    </View>
                    <View style={{flexDirection:'row'}}> 
                        <View style={{width: 30,
                        height: 20,
                        border: 1,
                        borderColor: 'black',
                        backgroundColor: 'white',}}>
                            <View style={styles.box}>
                                <View style={styles.lineContainer}>                                    
                                    <View style={styles.transparentLine} />
                                    <Text style={{fontSize:11}}> {month[0]}</Text>
                                    <View style={styles.vline} />                
                                    <Text style={{fontSize:11}}> {month[1]}</Text>        
                                    <View style={styles.transparentLine} />
                                </View>
                            </View>
                        </View>
                        <View style={{width: 30,
                        height: 20,
                        border: 1,
                        borderColor: 'black',
                        backgroundColor: 'white',}}>
                            <View style={styles.box}>
                                <View style={styles.lineContainer}>                                    
                                    <View style={styles.transparentLine} />
                                    <Text style={{fontSize:11}}> {day[0]}</Text>
                                    <View style={styles.vline} />
                                    <Text style={{fontSize:11}}> {day[1]}</Text>       
                                    <View style={styles.transparentLine} />
                                </View>
                            </View>
                        </View>          
                        <View style={{width: 50,
                        height: 20,
                        border: 1,
                        borderColor: 'black',
                        backgroundColor: 'white',}}>
                            <View style={styles.box}>
                                <View style={styles.lineContainer}>                                    
                                    <View style={styles.transparentLine} />
                                    <Text style={{fontSize:11}}> {year[0]}</Text>
                                    <View style={styles.vline} />
                                    <Text style={{fontSize:11}}> {year[1]}</Text>
                                    <View style={styles.vline} />
                                    <Text style={{fontSize:11}}> {year[2]}</Text>
                                    <View style={styles.vline} />
                                    <Text style={{fontSize:11}}> {year[3]}</Text>
                                    <View style={styles.transparentLine} />
                                </View>
                            </View>
                        </View>          
                    </View>
                </View>
            </View>
            <Text style={styles.bold}>*Note The BIR Data Privacy is in the BIR website(www.bir.gov.ph)</Text>
        </>
    )
} 

export default Footer