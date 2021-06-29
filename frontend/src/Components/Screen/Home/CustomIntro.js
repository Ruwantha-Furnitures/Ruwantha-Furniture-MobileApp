import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import Card from '../../UI/Card'
const CustomIntro=()=>{
    return(
        <Card width={415} height={310} ml={20} bg="#fff">
            <Image source={require('../../../../assets/customization.png')} style={{width:417,height:310,borderSize:10,resizeMode="contain"}} />
        </Card>
    )
}

export default CustomIntro