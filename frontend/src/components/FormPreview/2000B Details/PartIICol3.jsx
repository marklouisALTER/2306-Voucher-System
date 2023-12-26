import React from 'react';
import { Text, View,} from '@react-pdf/renderer';

import styles from '../style'

const Col3 = ({}) => {
    return (
        <View style={{justifyContent:'space-between', height:420, alignItems:'center'}}>
             <Text style={styles.bold}>Quantity</Text>
             <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                
            </View>            
        </View>
    )
}

export default Col3