import React from 'react';
import { Text, View,} from '@react-pdf/renderer';

import styles from '../style'
import Row4 from './PartIIRow4';
const Col4 = ({}) => {
    return (
        <View style={{justifyContent:'space-between', height:420, alignItems:'center'}}> 
            <Text style={styles.bold}>Amount</Text>
            <View style={{flexDirection:'column',alignItems:'center',height:'100%'}}>
                
                    
                <Row4/>
            </View>            
        </View>
      
    )
}

export default Col4