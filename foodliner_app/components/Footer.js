import { View, Text } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View style={{textAlign:'center', height:40,padding:10,backgroundColor:'lightgrey',marginTop:10}}>
      <Text>By tapping "SUBMIT" I agree <Text style={{color:'blue'}}>T&C and Privacy Policy</Text> </Text>
    </View>
  )
}

export default Footer;