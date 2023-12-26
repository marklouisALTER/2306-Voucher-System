import React from 'react';
import { Text, View,} from '@react-pdf/renderer';

import styles from '../style'

const Col2 = ({}) => {
    return (
        <View style={{justifyContent:''}}>
            <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:5}}>
                <Text style={styles.bold}>ATC</Text>                    
            </View>

            <View style={{
                width: 60,
                height: 20,
                border: 1,
                borderColor: 'black',
                backgroundColor: 'white',
                marginTop:25
            }}>
                <View style={styles.atcbox}>        
                <Text style={styles.bold}> | |  1 1 0</Text>
                </View>
            </View>

            <View style={styles.input}>
                <View style={styles.atcbox}>
                <Text style={styles.bold}> | |  0 0 1</Text>
                </View>
            </View>

            <View style={{
                width: 60,
                height: 20,
                border: 1,
                borderColor: 'black',
                backgroundColor: 'white',
                marginTop:5
            }}>
                <View style={styles.atcbox}>
                <Text style={styles.bold}> | |  0 0 0</Text>
                </View>
            </View>
            <View style={styles.input}>
                <View style={styles.atcbox}>
                <Text style={styles.bold}> | |  0 7 0</Text>
                </View>
            </View>
            <View style={styles.input}>
                <View style={styles.atcbox}>
                <Text style={styles.bold}> | |  1 2 0</Text>
                </View>
            </View>
            <View style={{
                width: 60,
                height: 20,
                border: 1,
                borderColor: 'black',
                backgroundColor: 'white',
                marginTop:10
            }}>
                <View style={styles.atcbox}>
                <Text style={styles.bold}> | |  0 0 0</Text>
                </View>
            </View>
            <View style={{
                width: 60,
                height: 20,
                border: 1,
                borderColor: 'black',
                backgroundColor: 'white',
                marginTop:10
            }}>
                <View style={styles.atcbox}>        
                <Text style={styles.bold}> | |  0 0 0</Text>
                </View>
            </View>
            <View style={{
                width: 60,
                height: 20,
                border: 1,
                borderColor: 'black',
                backgroundColor: 'white',
                marginTop:55
            }}>
                <View style={styles.atcbox}>
                <Text style={styles.bold}> | C  1 7 0</Text>
                </View>
            </View>
            <View style={styles.input}>
                <View style={styles.atcbox}>
                <Text style={styles.bold}> | C  1 3 0</Text>
                </View>
            </View>
            <View style={{
                width: 60,
                height: 20,
                border: 1,
                borderColor: 'black',
                backgroundColor: 'white',
                marginTop:10
            }}>
                <View style={styles.atcbox}>        
                <Text style={styles.bold}> | C  1 4 0</Text>
                </View>
            </View>
            <View style={styles.input}>
                <View style={styles.atcbox}>
                <Text style={styles.bold}> | C  1 2 0</Text>
                </View>
            </View>
            <View style={styles.input}>
                <View style={styles.atcbox}>        
                <Text style={styles.bold}> | C  1 2 1</Text>
                </View>
            </View>
            <View style={{
                width: 60,
                height: 20,
                border: 1,
                borderColor: 'black',
                backgroundColor: 'white',
                marginTop:25
            }}>
                <View style={styles.atcbox}>        
                <Text style={styles.bold}> | C  1 6 0</Text>
                </View>
            </View>
            <View style={{
                width: 60,
                height: 20,
                border: 1,
                borderColor: 'black',
                backgroundColor: 'white',
                marginTop:5
            }}>
                <View style={styles.atcbox}>
                <Text style={styles.bold}> | C  1 5 0</Text>
                </View>
            </View>

            </View>
    )
}

export default Col2