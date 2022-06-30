import { StyleSheet, Text, TextInput, View,TouchableOpacity, Pressable ,Button} from 'react-native'
import React from 'react';
import FontAwesomeIcon  from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon  from 'react-native-vector-icons/MaterialIcons';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';


const HeaderTitle = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>White's Foodliner</Text>
      <Text style={styles.text}>All Shoppings and savings in one App</Text>
     <View style={styles.inputContainer}>
        <MaterialIcon name='search' style={styles.icon} />
        <TextInput  style={styles.input }placeholder='What are you looking for?' />
        <MaterialIcon name='mic' style={styles.icon} />
        {/* <FontAwesomeIcon name='barcode' style={styles.icon} /> */}
        {/* <Ionicons name='barcode' style={styles.icon} /> */}
       
        <MaterialCommunityIcons name='barcode-scan' style={styles.icon} onPress={()=>navigation.navigate('SCAN PRODUCT')} />

      




     </View>

    </View>
  )
}

export default HeaderTitle

const styles = StyleSheet.create({
    container:{
        flex:1,
            justifyContent:'center',
             alignItems:'flex-start',
        },
        text:{
            color:'white',
            fontSize:13
        },
        inputContainer:{
        backgroundColor:"white",
        borderRadius:5,
        marginBottom:15,
        flexDirection:"row",
        
       
      
        },
      input:{
        width:240,
        height:30,
        borderRadius:10,
        color:'red',
        outlineWidth: 0,
        
    },
    icon:{
        padding:6,
        fontSize:20
    }
})