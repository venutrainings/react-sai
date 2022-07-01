import { StyleSheet, Text, View, Button , Image,TouchableOpacity} from 'react-native'
import React from 'react';
import Image1 from '../assets/google.png';
import Image2 from '../assets/scanner.png';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

const Coupons = ({navigation}) => {
  return (
    <View style={styles.conatainer}>
      <Text style={styles.text} >Coupons</Text>
      {/* <Button title='scan' onPress={()=>navigation.navigate('SCAN PRODUCT')} ></Button> */}
      {/* <TouchableOpacity style={styles.imgContainer}  >
      <Image source={Image1}  /> */}
      {/* <Image source={Image2} /> */}
      <MaterialCommunityIcons name='barcode-scan' style={styles.icon}onPress={()=>navigation.navigate('SCAN PRODUCT')}  />

      {/* </TouchableOpacity> */}
     
      

    

    </View>
  )
}

export default Coupons

const styles = StyleSheet.create({
  conatainer:{
  
   
  },
  text:{
    textAlign:'center'
  },
  imgContainer:{
  
 
  }

})