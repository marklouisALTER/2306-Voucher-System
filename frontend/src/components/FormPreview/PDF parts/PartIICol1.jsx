import React from 'react';
import { Text, View,} from '@react-pdf/renderer';

import styles from '../style'

const Col1 = ({}) => {
    return (
        <View style={{justifyContent:'space-between', height:490}}>
            <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.bold}>Nature of Income</Text>
                <Text style={styles.bold}>Payment</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.bold}>A. </Text>
                <Text style={styles.bold}>Individual Payees</Text>
            </View>
        
            <View style={{flexDirection:'row'}}>
                <Text style={styles.bold}>10. </Text>
                <Text style={styles.bold}>Interest</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.bold}>11. </Text>
                <View style={{flexDirection:'column'}}>
                    <Text style={styles.bold}>Rent-Personal Property</Text>
                    <Text style={styles.bold}>regardless of amount</Text>                      
                </View>                      
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.bold}>12. </Text>
                <Text style={styles.bold}>Premium and Annuity</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.bold}>13. </Text>
                <Text style={styles.bold}>Pension</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.bold}>14. </Text>

                <View style={{flexDirection:'column'}}>
                    <Text style={styles.bold}>Prizes Ammounting to:</Text>
                    <Text style={styles.bold}>10,000 or less</Text>
                </View>                    
            
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.bold}>15. </Text>
                <View style={{flexDirection:'column'}}>
                    <Text style={styles.bold}>Transportation Contractors</Text>
                    <Text style={styles.bold}> for the Carriage of Goods</Text>
                    <Text style={{fontSize:7}}> and Merchandise Below P2,000</Text>
                </View>   
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.bold}>16. </Text>                      
                <View style={{flexDirection:'column'}}>
                    <Text style={styles.bold}>Others (Specify)</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.bold}> 16A</Text>
                        <View style={styles.input}>
                            <View style={styles.box}>  
                                <Text style={{fontSize:7}}>
                                    INCOME PAYMENT - GOODS
                                </Text> 
                            </View>
                        </View>
                    </View>
                    
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.bold}> 16B</Text>
                        <View style={styles.input}>
                            <View style={styles.box}>  
                                <Text style={{fontSize:7}}>
                                    INCOME PAYMENT - SERVICE
                                </Text> 
                            </View>
                        </View>
                    </View>

                </View>   
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.bold}>B. </Text>
                <Text style={styles.bold}>Corporate Payees</Text>
            </View>

            <View style={{flexDirection:'row'}}>
                <Text style={styles.bold}>17. </Text>
                <Text style={styles.bold}>Interest</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.bold}>18. </Text>
                <View style={{flexDirection:'column'}}>
                <Text style={styles.bold}>Rent-Personal Property</Text>
                <Text style={styles.bold}>regardless of amount</Text>                      
                </View> 
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.bold}>19. </Text>
                <Text style={styles.bold}>Premium and Annuity</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.bold}>20. </Text>
                <Text style={styles.bold}>Prizes regardless of amount</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.bold}>21. </Text>
                <View style={{flexDirection:'column'}}>
                <Text style={styles.bold}>Professional Fees Paid to Gen</Text>
                <Text style={styles.bold}>Professional Partnerships</Text>
                <Text style={styles.bold}>(Except to partnership</Text>
                <Text style={styles.bold}>of medical practitioners)</Text>

                </View> 
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.bold}>22. </Text>
                <View style={{flexDirection:'column'}}>
                    <Text style={styles.bold}>Transportation Contractors</Text>
                    <Text style={styles.bold}> for the Carriage of Goods</Text>
                    <Text style={{fontSize:7}}> and Merchandise Below P2,000</Text>
                </View>  
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.bold}>23. </Text>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.bold}>16. </Text>                      
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.bold}>Others (Specify)</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.bold}> 16A</Text>
                            <View style={styles.input}>
                                <View style={styles.box}>  
                                    <Text style={{fontSize:7}}>
                                        INCOME PAYMENT - GOODS
                                    </Text> 
                                </View>
                            </View>
                        </View>
                        
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.bold}> 16B</Text>
                            <View style={styles.input}>
                                <View style={styles.box}>  
                                    <Text style={{fontSize:7}}>
                                        INCOME PAYMENT - SERVICE
                                    </Text> 
                                </View>
                            </View>
                        </View>
                    </View>   
                </View> 
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.bold}>24. </Text>
                <Text style={styles.bold}>Total</Text>
            </View>
        </View>
    )
}

export default Col1