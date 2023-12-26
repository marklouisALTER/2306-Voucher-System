import React from 'react';
import { Text, View,} from '@react-pdf/renderer';

import styles from '../style'
import Col1 from './PartIICol1';
import Col2 from './PartIICol2';
import Col3 from './PartIICol3';
import Col4 from './PartIICol4';

import Row2 from './PartIIRow2';

const BodyPartII = ({userInfo, partyInfo, taxPayerParty, total}) => {
    return (
        <>
            <View style={{borderRight:3,borderTop:3,borderBottom:3,width:'50%',backgroundColor: '#c0c0c0'}}>
                <View style={{height:15, backgroundColor: 'white'}}>
                    <View style={{position: 'absolute',left:3,top:3,width:'100%'}}>
                        <Text style={styles.bold}>Part III</Text>
                    </View>
                    <View style={{borderBottom:1, height:15,justifyContent:'center',alignItems:'center'}}>        
                    <Text style={styles.bold}> {'>'} Details of Income Payment</Text>
                    </View>
                </View>
                
                <View style={{flexDirection:'row',justifyContent:'space-between',padding:5,backgroundColor: '#c0c0c0'}}>
                    <Col1/>  
                    <Col2/>
                    <Col3/>
                    <Col4/>
                </View>
                <View style={{flexDirection:'column',justifyContent:'space-between',padding:5 ,backgroundColor: '#c0c0c0'}}> 
                    
                    <Row2/>
                </View>
                
            </View>
        </>
    )
}

export default BodyPartII