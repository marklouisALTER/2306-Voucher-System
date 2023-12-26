import React from 'react';
import { Text, View,} from '@react-pdf/renderer';

import styles from '../style'

const Row1 = ({}) => {
    return (
        <View style={{width:100,height:200, gap:5, flexDirection:'column',marginTop:180}}>  
            <View style={{width: '100%',
        height: '12%',            
        alignItems: 'center',
        justifyContent: 'center',
        padding:5,
        backgroundColor: 'white',}}>
                <Text style={{fontSize:5}}>TOTAL</Text>                
            </View>

            <View style={{width: '100%',
        height: '12%',
        alignItems: 'center',
        justifyContent: 'center',
        padding:5,            
        backgroundColor: 'white',}}>
                <Text style={{fontSize:5}}>ADD</Text>                
            </View>

            <View style={{width: '100%',
        height: '12%',
        alignItems: 'center',
        justifyContent: 'center',
        padding:5,            
        backgroundColor: 'white',}}>
                <Text style={{fontSize:5}}>VALUE ADDED TAX</Text>                
            </View>

            <View style={{width: '100%',
        height: '12%',
        alignItems: 'center',
        justifyContent: 'center',
        padding:5,            
        backgroundColor: 'white',}}>
                <Text style={{fontSize:5}}>PERCENTAGE TAX</Text>                
            </View>

            <View style={{width: '100%',
        height: '12%',
        alignItems: 'center',
        justifyContent: 'center',
        padding:5,            
        backgroundColor: 'white',}}>
                <Text style={{fontSize:5}}>DOCUMENTARY STAMP TAX</Text>                
            </View>

            <View style={{width: '100%',
        height: '12%',
        alignItems: 'center',
        justifyContent: 'center',
        padding:5,            
        backgroundColor: 'white',}}>
                <Text style={{fontSize:5}}>LOCAL TAX</Text>                
            </View>
            
            <View style={{width: '100%',
        height: '12%',
        alignItems: 'center',
        justifyContent: 'center',
        padding:5,            
        backgroundColor: 'white',}}>
                <Text style={{fontSize:5}}>GRAND TOTAL</Text>                
            </View>          
        </View>
    )
}

export default Row1