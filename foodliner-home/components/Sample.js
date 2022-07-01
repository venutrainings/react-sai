import React,{useState,useEffect} from "react";
import { TouchableOpacity,Text,TextInput,SafeAreaView,ActivityIndicator,StyleSheet,View,Image} from "react-native";
import Voice from '@react-native-community/voice';
import MaterialIcon  from 'react-native-vector-icons/MaterialIcons';
const Sample=()=>{
    const [result,setResult] = useState('');
    const [isLoading,setIsLoading] = useState(false);
    useEffect(()=>{
        Voice.onSpeechStart = onSpeechStartHandler;
        Voice.onSpeechEnd = onSpeechEndHandler;
        Voice.onSpeechResults = onSpeechResultsHandler;
        return ()=>{
        Voice.destroy().then(Voice.removeAllListeners())
        }
    },[]);
    const onSpeechStartHandler = (e) =>{
        isLoading(true);
        console.log('Start Handler ',e)
    }
    const onSpeechEndHandler = (e) =>{
        
        console.log('Stop Handler ',e)
    }
    const onSpeechResultsHandler = (e) =>{
        let text = e.value[0];
        setResult(text);
        console.log('Results Handler ',e)
     }
    const startRecording = async() =>{
        setIsLoading(true);
        try{
            await Voice.start('en-US');
        }catch(error){
            console.log('error raise',error);
        }
    }
    const stopRecording = async() =>{
        setIsLoading(false);
        try{
            await Voice.stop();
        }catch(error){
            console.log('error raise',error);
        }
    }

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Text style={styles.text}>Voice Recording</Text>
                <View style={styles.inputContainer}>
                    <MaterialIcon name='search' size={20}/>
                
                    <TextInput
                     placeholder="What are you Looking For? ."
                      style={{flex:1}}
                      value={result}
                      onChangeText={(text)=>setResult(text)}
                       />
                       {
                        isLoading ? <ActivityIndicator size={20} color='red' /> :
                        <TouchableOpacity onPress={startRecording}>
                            <Image
                source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/microphone.png' }}
               style={{ width: 25, height: 25 }}
               />
                        {/* <MaterialIcon name='mic' size={20}/> */}
                    </TouchableOpacity>
                       }
                    
                </View>
                <TouchableOpacity onPress={stopRecording}>
                    <Text style={styles.stop}>Stop</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
};

export default Sample;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    text:{
        marginVertical:25,
        fontSize:20,
        fontWeight:'bold',
        color:'red',
        alignSelf:'center'
    },
    inputContainer:{
        backgroundColor:'whitesmoke',
        width:300,
        height:40,
        flexDirection:'row',
        paddingHorizontal:10,
        alignItems:'center',
        borderRadius:20,
        shadowOffset:{width:0,height:1},
        shadowOpacity:0.2,
        elevation:4,
        shadowRadius:2,
        shadowColor:'darkred'
    },
    stop:
    {
        backgroundColor:'red',
        marginVertical:20,
        justifyContent:'center',
        width:200,
        height:40,
        alignItems:'center',
        marginHorizontal:50,
        padding:10,
        textAlign:'center',
        borderRadius:20,
        color:'white',
        fontWeight:'bold'

    }

})

// import React, { useEffect, useState } from 'react';
// import { View, Image, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
// import Voice from '@react-native-community/voice';

// const Sample = () => {

//   const [result, setResult] = useState('')
//   const [isLoading, setLoading] = useState(false)

//   useEffect(() => {
//     Voice.onSpeechStart = onSpeechStartHandler;
//     Voice.onSpeechEnd = onSpeechEndHandler;
//     Voice.onSpeechResults = onSpeechResultsHandler;

//     return () => {
//       Voice.destroy().then(Voice.removeAllListeners);
//     }
//   }, [])

//   const onSpeechStartHandler = (e) => {
//     console.log("start handler==>>>", e)
//   }
//   const onSpeechEndHandler = (e) => {
//     setLoading(false)
//     console.log("stop handler", e)
//   }

//   const onSpeechResultsHandler = (e) => {
//     let text = e.value[0]
//     setResult(text)
//     console.log("speech result handler", e)
//   }

//   const startRecording = async () => {
//     setLoading(true)
//     try {
//       await Voice.start('en-Us')
//     } catch (error) {
//       console.log("error raised", error)
//     }
//   }

//   const stopRecording = async () => {
//     try {
//       await Voice.stop()
//     } catch (error) {
//       console.log("error raised", error)
//     }
//   }


//   return (
//     <View style={styles.container}>
//       <SafeAreaView>
//         <Text style={styles.headingText}>Speech Recoginition</Text>
//         <View style={styles.textInputStyle}>
//           <TextInput
//             value={result}
//             placeholder="your text"
//             style={{ flex: 1 }}
//             onChangeText={text => setResult(text)}
//           />
//           {isLoading ? <ActivityIndicator size="large" color="red" />

//             :
            
//             <TouchableOpacity
//               onPress={startRecording}
//             >
//               <Image
//                 source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/microphone.png' }}
//                 style={{ width: 25, height: 25 }}
//               />
//             </TouchableOpacity>}
//         </View>

//         <TouchableOpacity
//           style={{
//             alignSelf: 'center',
//             marginTop: 24,
//             backgroundColor: 'red',
//             padding: 8,
//             borderRadius: 4
//           }}
//           onPress={stopRecording}
//         >
//           <Text style={{ color: 'white', fontWeight: 'bold' }}>Stop</Text>
//         </TouchableOpacity>
//       </SafeAreaView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24
//   },
//   headingText: {
//     alignSelf: 'center',
//     marginVertical: 26,
//     fontWeight: 'bold',
//     fontSize: 26
//   },
//   textInputStyle: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     height: 48,
//     borderRadius: 20,
//     paddingHorizontal: 16,
//     shadowOffset: { width: 0, height: 1 },
//     shadowRadius: 2,
//     elevation: 2,
//     shadowOpacity: 0.4
//   }
// });

// export default Sample;