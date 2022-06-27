import axios from 'axios';
import React ,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  const [data,setData] = useState([]);

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then((res)=>{
      setData(res.data);
      console.log(res)
    })
  },[])
  return (
    <View >
      <Text style={styles.header}>Products App </Text>
      
        {
          data.map((product,index) =>{
          return <View key={index}>
              <Text> NAME:{product.title}</Text>
             <View>
              <Image  source={{uri:product.image}} style={{width:300,height:100 ,padding:10,flex:1,textAlign:'center',justifyContent:'center'}}/>  
             </View>
            <Text> Price: {product.price}</Text>
            <hr style={{width:400, border:'1px solid grey',background:'grey'}} />
      </View> })
        }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:50,
  },
  header:{
    color:'darkred',
    fontSize:40,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:50
  },
  hr:{
    border:'2px solid grey'
  }
});
