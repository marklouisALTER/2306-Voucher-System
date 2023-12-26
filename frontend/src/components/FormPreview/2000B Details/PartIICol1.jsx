import React from 'react';
import { Text, View,} from '@react-pdf/renderer';

import styles from '../style'
import Row1 from './PartIIRow1';
const Col1 = ({}) => {
    return (
        <View style={{justifyContent:'space-between', height:420, alignItems:'center'}}>   
            <Text style={styles.bold}>Description</Text>
            <View style={{flexDirection:'column',alignItems:'center',height:'100%'}}>
                
                    
                <Row1/>
            </View>               

            
        </View>
    )
}

export default Col1