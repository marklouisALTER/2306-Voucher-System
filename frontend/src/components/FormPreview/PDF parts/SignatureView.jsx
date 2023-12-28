import React, { useState } from 'react';
import { Text, View, Image, } from '@react-pdf/renderer';
import styles from '../style'


export const SignatureView = ({taxPayerParty, style}) => {
    return(
        <View style={style}> 
            {/* {taxPayerParty.type === 'Payee' ? (
                <> */}
                    {/* <Image src={getFullSignature()} style={styles.signatureImage} /> */}
                    <Text style={{fontSize:10}}>
                        MANUEL A MARIN                        
                        {/* `${partyInfo.info.firstname} ${partyInfo.info.middlename} ${partyInfo.info.lastname}`.toUpperCase() */}
                        
                        {/* `${partyInfo.info.payor_name}`.toUpperCase() */}
                                            
                    </Text>
                {/* </>
            ): (
                <>
                    <Image src={`data:image/png;base64,${userInfo.signature}`} style={styles.signatureImage} />
                    <Text style={styles.signatureText}>
                    {`${userInfo.firstname} ${userInfo.middlename} ${userInfo.lastname}`.toUpperCase()}
                    </Text>
                </>
            )}                     
            <View style={styles.line} /> */}
        </View>
    )
}