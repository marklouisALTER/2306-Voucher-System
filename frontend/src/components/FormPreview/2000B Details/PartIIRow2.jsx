import React from 'react';
import { Text, View,} from '@react-pdf/renderer';

import styles from '../style'

const Row2 = ({}) => {
    return (
        <View style={{justifyContent:'space-between', height:100, marginTop:10}}>
            <Text style={{fontSize:6, backgroundColor:'white',padding:2}}>            
            This document serves as a binding contract, 
            signifying the Payor's acceptance of goods or services 
            provided by the Payee. All purchases or expenses are hereby 
            certified as ordinary, necessary, lawful, and in adherence to 
            the management's guidelines and directives. The term 'price/amount' 
            is defined as the total sum, or its equivalent, which the Payor paid 
            or is obligated to remit to the Payee in exchange for goods or services. 
            This document, recognized as a Commercial/Supplementary Receipt/invoice 
            (RR 18-2012), stands as digital evidence of the agreement. Being 
            computer-generated, manual signatures are deemed unnecessary yet are 
            presumed affixed, embodying the mutual consent and understanding of 
            both parties. Copies of this contract have been distributed to their 
            respective email addresses, ensuring accessible proof of this transaction 
            for legal reference if required.
            </Text>
        </View>
    )
}

export default Row2