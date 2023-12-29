import React from 'react';
import { Text, View, } from '@react-pdf/renderer';


export const Table = ({partyInfo}) => {
    
    const totalAmount = partyInfo.details.reduce((accumulator, currentItem) => {
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
                    <Text style={{fontSize:7}}>{partyInfo.details[0]?.description}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:213,
                    width: 65,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[0]?.atc}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:278,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[0]?.amount}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:391.5,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[0]?.tax}</Text>
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
                    <Text style={{fontSize:7}}>{partyInfo.details[1]?.description}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:213,
                    width: 65,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[1]?.atc}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:278,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[1]?.amount}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:391.5,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[1]?.tax}</Text>
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
                    <Text style={{fontSize:7}}>{partyInfo.details[2]?.description}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:213,
                    width: 65,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[2]?.atc}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:278,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[2]?.amount}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:391.5,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[2]?.tax}</Text>
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
                    <Text style={{fontSize:7}}>{partyInfo.details[3]?.description}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:213,
                    width: 65,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[3]?.atc}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:278,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[3]?.amount}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:391.5,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[3]?.tax}</Text>
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
                    left:0,
                    width: 214,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[4]?.description}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:213,
                    width: 65,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[4]?.atc}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:278,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[4]?.amount}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:391.5,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[4]?.tax}</Text>
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
                    left:0,
                    width: 214,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[5]?.description}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:213,
                    width: 65,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[5]?.atc}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:278,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[5]?.amount}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:391.5,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[5]?.tax}</Text>
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
                    left:0,
                    width: 214,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[6]?.description}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:213,
                    width: 65,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[6]?.atc}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:278,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[6]?.amount}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:391.5,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[6]?.tax}</Text>
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
                    left:0,
                    width: 214,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[7]?.description}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:213,
                    width: 65,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[7]?.atc}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:278,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[7]?.amount}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:391.5,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[7]?.tax}</Text>
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
                    left:0,
                    width: 214,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[8]?.description}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:213,
                    width: 65,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[8]?.atc}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:278,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[8]?.amount}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:391.5,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[8]?.tax}</Text>
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
                    left:0,
                    width: 214,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[9]?.description}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:213,
                    width: 65,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[9]?.atc}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:278,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[9]?.amount}</Text>
                </View>
                <View style={{position: 'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection: 'column',
                    top: 1,
                    left:391.5,
                    width: 114,
                    height: 12, }}>
                    <Text style={{fontSize:7}}>{partyInfo.details[9]?.tax}</Text>
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
                    <Text style={{fontSize:7}}>{totalAmount}</Text>
                </View>
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
        </View>
    )
}