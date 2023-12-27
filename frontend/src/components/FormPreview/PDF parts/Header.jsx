import React from 'react';
import { Text, View, Image, } from '@react-pdf/renderer';
import styles from '../style'

import { DateBox } from './DateViewBoxes';


import DateView from './DateView';
const Header = ({controlNo}) => {

    const initialControlNo = 1000 + controlNo;
    const stringControlNo = initialControlNo + 'A';

    const date1 = [
        {
          position: 'absolute',
          top: 104.6,
          left:159.5,
          width: 22,
          height: 12,                
        },
        {
          position: 'absolute',
          top: 104.6,
          left:182.5,
          width: 22,
          height: 12,                
        },
        {
          position: 'absolute',
          top: 104.6,
          left:205.5,
          width: 45,
          height: 12,                
          }
        
      ]
    
      const date2 = [
        {
            position: 'absolute',
            top: 104.6,
            left:378.5,
            width: 22,
            height: 12,                
        },
        {
            position: 'absolute',
            top: 104.6,
            left:401.5,
            width: 22,
            height: 12,                
        },
        {
            position: 'absolute',
            top: 104.6,
            left:424.5,
            width: 45,
            height: 12,                
        }
        
      ]
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

            <DateBox style={date1}/>
            <DateBox style={date2}/>
        
        

        </>
    )
}

export default Header;