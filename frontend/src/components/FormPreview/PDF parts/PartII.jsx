import React from 'react';
import { Text, View,} from '@react-pdf/renderer';

import styles from '../style'
import Col2 from './PartIICol2';
import Col1 from './PartIICol1';
import Col3 from './PartIICol3';

const BodyPartII = ({userInfo, partyInfo, taxPayerParty, total}) => {
    return (
        <>
            <View style={{borderRight:3,borderTop:3,borderBottom:3,width:'50%'}}>
                <View style={{position: 'absolute',left:3,top:3,width:'100%'}}>
                    <Text style={styles.bold}>Part III</Text>
                </View>
                <View style={{borderBottom:1, height:'3%',justifyContent:'center',alignItems:'center'}}>        
                  <Text style={styles.bold}> {'>'} Details of Income Payment</Text>
                </View>
                
                <View style={{flexDirection:'row',justifyContent:'space-between',padding:5,backgroundColor: '#c0c0c0'}}>
                    <Col1/>  
                    <Col2/>
                    <Col3 userInfo={userInfo} taxPayerParty={taxPayerParty} partyInfo={partyInfo} total={total}/>
                </View>
            </View>
        </>
    )
}

export default BodyPartII