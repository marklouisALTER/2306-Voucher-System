import React from 'react';
import { Text, View, } from '@react-pdf/renderer';


export const Table1 = ({partyInfo}) => {    
    const totalAmount = partyInfo.details1.users.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);

    return(
        <View style={{            
            position:'absolute',
            width:509,
            height:145,
            top:296,
            left:45,
            
        }}> 
            <View style={{
                position:'absolute',
                width:508,
                height:12,
                top:19,
                left:0,}}>
                
            
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:0,
                    width: 214,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details1.users[0]?.description}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:213,
                    width: 65,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details1.users[0]?.price}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:278,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details1.users[0]?.quantity}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:391.5,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details1.users[0]?.amount}</Text>
                </View>
            </View>
            <View style={{                
                position:'absolute',
                width:508,
                height:12,
                top:30,
                left:0,}}>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:0,
                    width: 214,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details1.users[1]?.description}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:213,
                    width: 65,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details1.users[1]?.price}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:278,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details1.users[1]?.quantity}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:391.5,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details1.users[1]?.amount}</Text>
                </View>
            </View>

             <View style={{                
                position:'absolute',
                width:508,
                height:12,
                top:41,
                left:0,}}>
                    <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:0,
                    width: 214,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details1.users[2]?.description}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:213,
                    width: 65,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details1.users[2]?.price}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:278,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details1.users[2]?.quantity}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:391.5,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details1.users[2]?.amount}</Text>
                </View>
            </View>

            <View style={{                
                position:'absolute',
                width:508,
                height:12,
                top:53,
                left:0,}}>
                    <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:0,
                    width: 214,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details1.users[3]?.description}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:213,
                    width: 65,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details1.users[3]?.price}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:278,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details1.users[3]?.quantity}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:391.5,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details1.users[3]?.amount}</Text>
                </View>
            </View>
          
            <View style={{                
                position:'absolute',
                width:508,
                height:12,
                top:64,
                left:0,}}>
                
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:391.5,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{totalAmount}</Text>
                </View>
            </View>
             
            <View style={{                
                position:'absolute',
                width:508,
                height:12,
                top:75,
                left:0,}}>
                
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:391.5,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}></Text>
                </View>
            </View>
           
            <View style={{                
                position:'absolute',
                width:508,
                height:12,
                top:86,
                left:0,}}>
                
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:391.5,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}></Text>
                </View>
            </View>
             
            <View style={{                
                position:'absolute',
                width:508,
                height:12,
                top:98,
                left:0,}}>
                
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:391.5,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}></Text>
                </View>
            </View>
       
            <View style={{                
                position:'absolute',
                width:508,
                height:12,
                top:109,
                left:0,}}>
                
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:391.5,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}></Text>
                </View>
            </View>
             
            <View style={{                
                position:'absolute',
                width:508,
                height:12,
                top:120,
                left:0,}}>
                
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:391.5,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}></Text>
                </View>
            </View>
               
            <View style={{                
                position:'absolute',
                width:508,
                height:12,
                top:132,
                left:0,}}>
                    
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:278,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}></Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:391.5,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{totalAmount}</Text>
                </View>
            </View> 
        </View>
    )
}