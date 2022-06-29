import { StyleSheet, Text, View,TouchableOpacity,ScrollView,Dimensions} from 'react-native'
import React from 'react'

const options=['SELECT PREFERRED STORE','Kingman','Lindsborg','Lyons','Medicine Lodge','Phillipsburg','Scott City','St.John'];
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Modal = (props) => {

  return (
   <TouchableOpacity style={styles.container}>
        <View style={[styles.model,{width:Width -20,height:Height/2}]}>
            <ScrollView>
                
            </ScrollView>
        </View>
   </TouchableOpacity>
  )
}

export default Modal

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
        },
        model:{
            backgroundColor:'white',
            borderRadius:10
        },
        option:{
            alignItems:'flex-start'
        },
        text:{
            margin:20,
            fontSize:20,
            fontWeight:'bold'
        }
})