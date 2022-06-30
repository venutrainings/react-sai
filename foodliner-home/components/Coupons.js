import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Coupons = ({navigation}) => {
  return (
    <View>
      <Text>Coupons</Text>
      <Button title='scan' onPress={()=>navigation.navigate('SCAN PRODUCT')} ></Button>
    </View>
  )
}

export default Coupons

const styles = StyleSheet.create({})