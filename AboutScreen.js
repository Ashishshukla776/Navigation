import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default function AboutScreen(){
    return(
        <View style={Styles.aboutStyle}>
           <Text style={{fontSize:50}}>My name is Bani</Text>
        </View>
       )
}
const Styles=StyleSheet.create({
    aboutStyle:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
