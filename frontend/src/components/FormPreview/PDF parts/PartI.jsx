import React from 'react';
import { Text, View,} from '@react-pdf/renderer';

import ZipCode from './Zipcode';
import TINDisplay from './TIN';
import styles from '../style'

const BodyPartI = ({title, number, partyInfo, userInfo, taxPayerParty }) => {
    
    return (
    <>  
        {number[0] === '2' ? (
            <View style={{position: 'absolute',left:3,top:3,width:'100%'}}>
                <Text style={styles.bold}>Part I</Text>
            </View>
        ) : (
            <View style={{position: 'absolute',left:3,top:260,width:'100%'}}>
                <Text style={styles.bold}>Part II</Text>
            </View>   
        )}             
        <View style={{borderBottom:1, height:'3%',justifyContent:'center',alignItems:'center'}}>        
            <Text style={styles.bold}>{title}</Text>
        </View>
        
        <View style={{borderBottom:1, height:'5%',flexDirection:'row',backgroundColor: '#c0c0c0',}}>
            <Text style={styles.number}>{number[0]}</Text>
            <View style={{flexDirection:'column',justifyContent:'center',marginRight:10}}>
                <Text style={styles.normal}>Taxpayer</Text>
                <Text style={styles.normal}>Identification No.</Text>
            </View>
            
            <View style={{flexDirection:'column',justifyContent:'center'}}>
                <Text style={styles.normal}>{number[0]}</Text>
                <Text style={styles.normal}>{'>'}</Text>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center', width:'80%'}}>
                {number[0] === '2' ? (
                    taxPayerParty.type === 'Payee' ?  
                        <TINDisplay source={partyInfo} sourceType={1}/> 
                    : 
                        <TINDisplay source={userInfo} sourceType={0}/>  
                ) : (
                    taxPayerParty.type !== 'Payee' ?  
                        <TINDisplay source={partyInfo} sourceType={1}/>                         
                    : 
                        <TINDisplay source={userInfo} sourceType={0}/>
                      
                )}
                    
                <View style={styles.smallInput}>
                    <View style={styles.box}>
                    <View style={styles.lineContainer}>                          
                        <View style={styles.transparentLine} />
                        <View style={styles.vline} />
                        <View style={styles.vline} />
                        <View style={styles.transparentLine} />
                    </View>
                    </View>
                </View>                  
            </View>
        </View> 

        <View style={{borderBottom:1, height:'8%',flexDirection:'column',backgroundColor: '#c0c0c0',}}>

            <View style={{flexDirection:'row'}}>
                <Text style={styles.number}>{number[1]}</Text>
                <View style={{flexDirection:'column',justifyContent:'center',marginRight:10,marginTop:5}}>
                    <Text style={styles.normal}>Payee's Name (For Non-Individuals)</Text>                    
                </View>            
            </View>

            <View style={{flexDirection:'row',marginLeft:5,alignItems:'center',marginTop:3}}>
                <View style={{flexDirection:'column',justifyContent:'center',marginRight:5}}>
                    <Text style={styles.normal}>{number[1]}</Text>
                    <Text style={styles.normal}>{'>'}</Text>
                </View>
                <View style={styles.regtangleinput}>
                {number[0] === '2' && taxPayerParty.class !== 'individual' ? (
                    taxPayerParty.type === 'Payee'  ? (
                        <Text style={styles.inputText}>
                            {partyInfo.info.payor_name}
                        </Text>
                    ) : (
                        userInfo.user_type !== 'individual' ? (
                            <Text style={styles.inputText}>
                            {`${userInfo.firstname} ${userInfo.middlename} ${userInfo.lastname}`}
                            </Text>
                        ) : (<></>)
                                                
                    )
                ) : (
                    taxPayerParty.type !== 'Payee' ? (
                        <Text style={styles.inputText}>
                            {partyInfo.info.payor_name}
                        </Text>
                    ) : (
                        userInfo.user_type !== 'individual' ? (
                            <Text style={styles.inputText}>
                            {`${userInfo.firstname} ${userInfo.middlename} ${userInfo.lastname}`}
                            </Text>
                        ) : (<></>)
                    )
                 )}
                    
                    <View style={styles.rectanglebox}>
                                                                
                    </View>
                </View>
            </View>
        </View>

        <View style={{borderBottom:1, height:'18%',flexDirection:'column',backgroundColor: '#c0c0c0',}}>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.number}>{number[2]}</Text>
                <View style={{flexDirection:'column',justifyContent:'center',marginRight:10,marginTop:5}}>
                    <Text style={styles.normal}>Payee's Name (For Individuals)</Text>                    
                </View>                    
            </View>  

            <View style={{flexDirection:'row',marginLeft:5,alignItems:'center',marginTop:4}}>
            <View style={{flexDirection:'column',justifyContent:'center',marginRight:10}}>
                <Text style={styles.normal}>Last</Text>
                <Text style={styles.normal}>Name</Text>
            </View>
            <View style={{flexDirection:'column',justifyContent:'center',marginRight:5}}>
                <Text style={styles.normal}>{number[2]}A</Text>
                <Text style={styles.normal}>‎‎{'>'}</Text>
            </View>
            <View style={styles.regtangleinput}>
            {number[0] === '2' ? (
                userInfo.user_type === 'individual' && (
                    <Text style={styles.inputText}>
                    {taxPayerParty.type === 'Payee'
                        ? partyInfo.info.lastname
                        : userInfo.lastname}
                    </Text>
                )
                ) : (
                userInfo.user_type === 'individual' && (
                    <Text style={styles.inputText}>
                    {taxPayerParty.type !== 'Payee'
                        ? partyInfo.info.lastname
                        : userInfo.lastname}
                    </Text>
                )
            )}                
                <View style={styles.rectanglebox}>
                
                </View>
            </View>
            </View>

            <View style={{flexDirection:'row',marginLeft:5,alignItems:'center',marginTop:4}}>
            <View style={{flexDirection:'column',justifyContent:'center',marginRight:10}}>
                <Text style={styles.normal}>First</Text>
                <Text style={styles.normal}>Name</Text>
            </View>
            <View style={{flexDirection:'column',justifyContent:'center',marginRight:5}}>
                <Text style={styles.normal}>{number[2]}B</Text>
                <Text style={styles.normal}>‎‎{'>'}</Text>
            </View>
            <View style={styles.regtangleinput}>
                {number[0] === '2' ? (
                    userInfo.user_type === 'individual' && (
                        <Text style={styles.inputText}>
                        {taxPayerParty.type === 'Payee'
                            ? partyInfo.info.firstname
                            : userInfo.firstname}
                        </Text>
                    )
                    ) : (
                    userInfo.user_type === 'individual' && (
                        <Text style={styles.inputText}>
                        {taxPayerParty.type !== 'Payee'
                            ? partyInfo.info.firstname
                            : userInfo.firstname}
                        </Text>
                    )
                )}                
                <View style={styles.rectanglebox}>
                </View>
            </View>
            </View>

            <View style={{flexDirection:'row',marginLeft:5,alignItems:'center',marginTop:4}}>
            <View style={{flexDirection:'column',justifyContent:'center',marginRight:8}}>
                <Text style={styles.normal}>Middle</Text>
                <Text style={styles.normal}>Name</Text>
            </View>
            <View style={{flexDirection:'column',justifyContent:'center',marginRight:5}}>
                <Text style={styles.normal}>{number[2]}C</Text>
                <Text style={styles.normal}>‎‎{'>'}</Text>
            </View>
            <View style={styles.regtangleinput}>
                {number[0] === '2' ? (
                    userInfo.user_type === 'individual' && (
                        <Text style={styles.inputText}>
                        {taxPayerParty.type === 'Payee'
                            ? partyInfo.info.middlename
                            : userInfo.middlename}
                        </Text>
                    )
                    ) : (
                    userInfo.user_type === 'individual' && (
                        <Text style={styles.inputText}>
                        {taxPayerParty.type !== 'Payee'
                            ? partyInfo.info.middlename
                            : userInfo.middlename}
                        </Text>
                    )
                )}                
                <View style={styles.rectanglebox}>              
                </View>
            </View>
            </View>
        </View>

        <View style={{borderBottom:1, height:'18%',flexDirection:'column',backgroundColor: '#c0c0c0',}}>
            <View style={{flexDirection:'row'}}>
            <Text style={styles.number}>{number[3]}</Text>
            <View style={{flexDirection:'column',justifyContent:'center',marginRight:10,marginTop:5}}>
                <Text style={styles.normal}>Registered Address </Text>                    
            </View>                    
            </View>

            <View style={{flexDirection:'row',marginLeft:5,alignItems:'center'}}>
            <View style={{flexDirection:'column',justifyContent:'center',marginRight:10}}>
                <Text style={styles.normal}></Text>
                <Text style={styles.normal}></Text>
            </View>
            <View style={{flexDirection:'column',justifyContent:'center',marginRight:5}}>
                <Text style={styles.normal}>{number[3]}A</Text>
                <Text style={styles.normal}>‎‎{'>'}</Text>
            </View>
            <View style={styles.regtangleinput}>
                {number[0] === '2' ? (
                    taxPayerParty.type === 'Payee' ?  
                        <Text style={styles.inputText}>{partyInfo.info.address}</Text> 
                    : 
                        <Text style={styles.inputText}>{userInfo.registered_address}</Text> 
                    ) : (
                    taxPayerParty.type !== 'Payee' ?  
                        <Text style={styles.inputText}>{partyInfo.info.address}</Text> 
                    : 
                        <Text style={styles.inputText}>{userInfo.registered_address}</Text> 
                )}       
               
                <View style={styles.rectanglebox}>                        
                </View>
            </View>
            </View>
            <View style={{flexDirection:'row',marginLeft:5,alignItems:'center',marginTop:2}}>
            <View style={{flexDirection:'column',justifyContent:'center',marginRight:10}}>
                <Text style={styles.normal}></Text>
                <Text style={styles.normal}></Text>
            </View>
            <View style={{flexDirection:'column',justifyContent:'center',marginRight:5}}>
                <Text style={styles.normal}>{number[3]}A</Text>
                <Text style={styles.normal}>‎‎{'>'}</Text>
            </View>
            <View style={styles.smallregtangleinput}>
                <View style={styles.rectanglebox}>
                {/* <Text style={styles.inputText}>{partyInfo.info.address}</Text> */} 
                </View>
            </View>
            
            <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center',marginRight:5,marginLeft:8}}>                      
                <Text style={styles.normal}> Zip Code</Text>
                <Text style={styles.normal}> {number[3]}B</Text>                      
            </View>                    
            <View style={{ width:70,
                height: 20,
                border: 1,
                borderColor: 'black',
                backgroundColor: 'white',}}>
                {number[0] === '2' ? (
                    taxPayerParty.type === 'Payee' ?  
                    <ZipCode source={partyInfo} sourceType={1}/> 
                  : 
                    <ZipCode source={userInfo} sourceType={0}/>
                ) : (
                    taxPayerParty.type !== 'Payee' ?  
                      <ZipCode source={partyInfo} sourceType={1}/> 
                    : 
                      <ZipCode source={userInfo} sourceType={0}/>
                )}
            </View>
            </View>
            
            <View style={{flexDirection:'column',marginLeft:5,marginTop:2}}>
            
                <Text style={styles.normal}>Foreign Address</Text>
                <Text style={styles.normal}></Text>
            
            <View style={{flexDirection:'row',justifyContent:'center',marginRight:10,marginTop:2}}>
                <View style={{flexDirection:'column',justifyContent:'center',marginRight:5}}>
                <Text style={styles.normal}>{number[3]}C</Text>
                <Text style={styles.normal}>‎‎{'>'}</Text>
                </View>
                <View style={styles.regtangleinput}>
                <View style={styles.rectanglebox}>
                    {/* <Text style={styles.inputText}>{partyInfo.info.address}</Text> */}
                </View>
                </View>
            </View>
            </View>

        </View>
    </>  
  );
};

export default BodyPartI;
