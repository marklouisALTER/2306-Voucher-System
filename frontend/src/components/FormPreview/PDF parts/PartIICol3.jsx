import React from 'react';
import { Text, View,} from '@react-pdf/renderer';

import styles from '../style'

const Col3 = ({userInfo, taxPayerParty, partyInfo, total})=> {
    
    return (
        <>
            <View style={{justifyContent:''}}>
                <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <Text style={styles.bold}>Amount of </Text>
                    <Text style={styles.bold}>Income Payment</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:21}}>
                    <Text style={styles.bold}>10</Text>
                    <View style={styles.input}>
                    <View style={styles.box}>
                    {taxPayerParty.class === 'individual' && taxPayerParty.type === 'Payee' ? 
                        <Text style={styles.inputText2}>{partyInfo.details.interest}
                        </Text> 
                    : userInfo.user_type === 'individual' && taxPayerParty.type !== 'Payee' ? (
                        <Text style={styles.inputText2}>{partyInfo.details.interest}
                        </Text> 
                    ) : (
                        null
                    )}
                    </View>
                    </View>
                </View>

                {/* Number 11 */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.bold}>11</Text>
                    <View style={styles.input}>
                    <View style={styles.box}>
                        {taxPayerParty.class === 'individual' && taxPayerParty.type === 'Payee' ? 
                        <Text style={styles.inputText2}>{partyInfo.details.rent}
                        </Text> 
                        : userInfo.user_type === 'individual' && taxPayerParty.type !== 'Payee' ? (
                        <Text style={styles.inputText2}>{partyInfo.details.interest}
                        </Text> 
                    ) : (
                        null
                    )}
                    </View>
                    </View>
                </View>

                {/* Number 12 */}
                <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:5}}>
                    <Text style={styles.bold}>12</Text>
                    <View style={styles.input}>
                    <View style={styles.box}>
                        {taxPayerParty.class === 'individual' && taxPayerParty.type === 'Payee' ? 
                        <Text style={styles.inputText2}>{partyInfo.details.prem}
                        </Text> 
                        : userInfo.user_type === 'individual' && taxPayerParty.type !== 'Payee' ? (
                        <Text style={styles.inputText2}>{partyInfo.details.interest}
                        </Text> 
                    ) : (
                        null
                    )}
                    </View>
                    </View>
                </View>

                {/* Number 13 */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.bold}>13</Text>
                    <View style={styles.input}>
                    <View style={styles.box}>
                        {taxPayerParty.class === 'individual' && taxPayerParty.type === 'Payee' ? 
                        <Text style={styles.inputText2}>{partyInfo.details.pension}
                        </Text> 
                        : userInfo.user_type === 'individual' && taxPayerParty.type !== 'Payee' ? (
                        <Text style={styles.inputText2}>{partyInfo.details.interest}
                        </Text> 
                    ) : (
                        null
                    )}
                    </View>
                    </View>
                </View>

                {/* Number 14 */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.bold}>14</Text>
                    <View style={styles.input}>
                    <View style={styles.box}>
                        {taxPayerParty.class === 'individual' && taxPayerParty.type === 'Payee' ? 
                        <Text style={styles.inputText2}>{partyInfo.details.prizes}
                        </Text> 
                        : userInfo.user_type === 'individual' && taxPayerParty.type !== 'Payee' ? (
                        <Text style={styles.inputText2}>{partyInfo.details.interest}
                        </Text> 
                    ) : (
                        null
                    )}
                    </View>
                    </View>
                </View>

                {/* Number 15 */}
                <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:11}}>
                    <Text style={styles.bold}>15</Text>
                    <View style={styles.input}>
                    <View style={styles.box}>
                        {taxPayerParty.class === 'individual' && taxPayerParty.type === 'Payee' ? 
                        <Text style={styles.inputText2}>{partyInfo.details.transpo}
                        </Text> 
                        : userInfo.user_type === 'individual' && taxPayerParty.type !== 'Payee' ? (
                        <Text style={styles.inputText2}>{partyInfo.details.interest}
                        </Text> 
                    ) : (
                        null
                    )}
                    </View>
                    </View>
                </View>

                {/* Number 16a OTHERS */}
                <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:19}}>
                    <Text style={styles.bold}>16A</Text>
                    <View style={styles.input}>
                        <View style={styles.box}>
                            {taxPayerParty.class === 'individual' && taxPayerParty.type === 'Payee' ? 
                            <Text style={styles.inputText2}>{partyInfo.details.goods}
                            </Text> 
                            : userInfo.user_type === 'individual' && taxPayerParty.type !== 'Payee' ? (
                        <Text style={styles.inputText2}>{partyInfo.details.interest}
                        </Text> 
                    ) : (
                        null
                    )}
                        </View> 
                    </View>
                </View>

                {/* Number 16b OTHERS*/}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.bold}>16B</Text>
                    <View style={styles.input}>
                        <View style={styles.box}>    
                            {taxPayerParty.class === 'individual' && taxPayerParty.type === 'Payee' ? 
                            <Text style={styles.inputText2}>{partyInfo.details.service}
                            </Text> 
                            : userInfo.user_type === 'individual' && taxPayerParty.type !== 'Payee' ? (
                        <Text style={styles.inputText2}>{partyInfo.details.interest}
                        </Text> 
                    ) : (
                        null
                    )}                        
                        </View>
                    </View>
                </View>

                {/* Number 17 */}
                <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:25}}>
                    <Text style={styles.bold}>17</Text>
                    <View style={styles.input}>
                    <View style={styles.box}>
                        {taxPayerParty.class !== 'individual' && taxPayerParty.type === 'Payee' ? 
                        <Text style={styles.inputText2}>{partyInfo.details.interest}
                        </Text> 
                        : null}
                    </View>
                    </View>
                </View>

                {/* Number 18 */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.bold}>18</Text>
                    <View style={styles.input}>
                    <View style={styles.box}>
                        {taxPayerParty.class !== 'individual' && taxPayerParty.type === 'Payee' ? 
                        <Text style={styles.inputText2}>{partyInfo.details.rent}
                        </Text> 
                        : null}
                    </View>
                    </View>
                </View>

                {/* Number 19 */}
                <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:11}}>
                    <Text style={styles.bold}>19</Text>
                    <View style={styles.input}>
                    <View style={styles.box}>
                        {taxPayerParty.class !== 'individual' && taxPayerParty.type === 'Payee' ? 
                        <Text style={styles.inputText2}>{partyInfo.details.prem}
                        </Text> 
                        : null}
                    </View>
                    </View>
                </View>

                {/* Number 20 */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.bold}>20</Text>
                    <View style={styles.input}>
                    <View style={styles.box}>
                        {taxPayerParty.class !== 'individual' && taxPayerParty.type === 'Payee' ? 
                        <Text style={styles.inputText2}>{partyInfo.details.prizesregard}
                        </Text> 
                        : null}
                    </View>
                    </View>
                </View>

                {/* Number 21 */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.bold}>21</Text>
                    <View style={styles.input}>
                    <View style={styles.box}>
                        {taxPayerParty.class !== 'individual' && taxPayerParty.type === 'Payee' ? 
                        <Text style={styles.inputText2}>{partyInfo.details.proffees}
                        </Text> 
                        : null}
                    </View>
                    </View>
                </View>

                {/* Number 22 */}
                <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:26}}>
                    <Text style={styles.bold}>22</Text>
                    <View style={styles.input}>
                    <View style={styles.box}>
                    <View style={styles.box}>
                        {taxPayerParty.class !== 'individual' && taxPayerParty.type === 'Payee' ? 
                        <Text style={styles.inputText2}>{partyInfo.details.transpo}
                        </Text> 
                        : null}
                    </View>
                    </View>
                    </View>
                </View>

                {/* Number 23a */}
                <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:42}}>
                    <Text style={styles.bold}>23A</Text>
                    <View style={styles.input}>
                        <View style={styles.box}>
                            {taxPayerParty.class !== 'individual' && taxPayerParty.type === 'Payee' ? 
                                <Text style={styles.inputText2}>{partyInfo.details.goods}
                                </Text> 
                            : null}                                                   
                        </View>
                    </View>
                </View>

                {/* Number 23b */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.bold}>23B</Text>
                    <View style={styles.input}>
                        <View style={styles.box}>
                            {taxPayerParty.class !== 'individual' && taxPayerParty.type === 'Payee' ? 
                                <Text style={styles.inputText2}>{partyInfo.details.service}
                                </Text> 
                            : null}                                
                        </View>
                    </View>
                </View>

                {/* Number 24 */}
                <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:1}}>
                    <Text style={styles.bold}>24</Text>
                    <View style={styles.input}>
                    <View style={styles.box}>
                        <Text style={styles.inputText2}>{total}</Text>
                    </View>
                    </View>
                </View>
            
                </View>
        </>
    )
}

export default Col3
