import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './components/Home';
import Coupons from './components/Coupons';
import Rewards from './components/Rewards';
import Wallet from './components/Wallet';
import Account from './components/Account';
import HeaderTitle from './components/HeaderTitle';
import Scanner from './components/Scanner';
import { MaterialCommunityIcons } from '@expo/vector-icons';
//import  {MaterialCommunityIcons}  from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './components/Header';
import Sample from './components/Sample';
export default function App() {
const Stack = createBottomTabNavigator();
  // const Stack= createMaterialBottomTabNavigator();
  const Tab = createNativeStackNavigator();
 
  return (
  




      //  <NavigationContainer>
    
  
        
      //   <Stack.Navigator
      //   initialRouteName='HOME'
      //   activeColor='blue'
      //   style={{backgroundColor:'white',color:'red'}}
    
        
      //   >
      //    <Stack.Screen name="HOME"

      //     options={{
      //       tabBarLabel:'Home',
      //       tabBarIcon:({color})=>(
      //         <MaterialCommunityIcons name='home-circle' color={color} size={20} />
      //       ),
      //       title: 'Whites Foodliner',
      //         headerStyle:{
      //             backgroundColor:'darkred',
             
      //           },
      //        headerTitle:
      //           ()=><HeaderTitle />
      //        ,
      //           headerTintColor:'#fff',
              
      //         headerTitleStyle:{
      //         fontSize:20,
               
      //          fontWeight:'bold'
      //         },
         
      //  }}
      //    component={Home} />
      //     <Stack.Screen name="COUPONS" component={Coupons}
      //      options={{
      //       tabBarLabel:'Coupons',
      //       tabBarIcon:({color})=>(
      //         <MaterialCommunityIcons name='ticket-percent' color={color} size={20} />
      //       ),
      //       title: 'Whites Foodliner',
      //         headerStyle:{
      //             backgroundColor:'darkred',
             
      //           },
      //        headerTitle:
      //           (props)=><HeaderTitle {...props} />
      //        ,
      //           headerTintColor:'#fff',
              
      //         headerTitleStyle:{
      //         fontSize:20,
               
      //          fontWeight:'bold'             },
         
      //  }}
      //     />
      //     <Stack.Screen name="REWARDS" component={Rewards}
      //      options={{
      //       tabBarLabel:'Rewards',
      //       tabBarIcon:({color})=>(
      //         <MaterialCommunityIcons name='seal' color={color} size={20} />
      //       ),
      //       title: 'Whites Foodliner',
      //         headerStyle:{
      //             backgroundColor:'darkred',
             
      //           },
      //        headerTitle:
      //           (props)=><HeaderTitle {...props} />
      //        ,
      //           headerTintColor:'#fff',
              
      //         headerTitleStyle:{
      //         fontSize:20,
               
      //          fontWeight:'bold'             },
         
      //  }} />
      //     <Stack.Screen name="WALLET" component={Wallet}
      //      options={{
      //       tabBarLabel:'Wallet',
      //       tabBarIcon:({color})=>(
      //         <MaterialCommunityIcons name='card' color={color} size={20} />
      //       ),
      //       title: 'Whites Foodliner',
      //         headerStyle:{
      //             backgroundColor:'darkred',
             
      //           },
      //        headerTitle:
      //           (props)=><HeaderTitle {...props}  />
      //        ,
      //           headerTintColor:'#fff',
              
      //         headerTitleStyle:{
      //         fontSize:20,
               
      //          fontWeight:'bold'             },
         
      //  }} />
      //     <Stack.Screen name="ACCOUNT" component={Account}
      //      options={{
      //       tabBarLabel:'Account',
      //       tabBarIcon:({color})=>(
      //         <MaterialCommunityIcons name='account-circle-outline' color={color} size={20} />
      //       ),
      //       title: 'Whites Foodliner',
      //         headerStyle:{
      //             backgroundColor:'darkred',
             
      //           },
      //        headerTitle:
      //           (props)=><HeaderTitle {...props} />
      //        ,
      //           headerTintColor:'#fff',
              
      //         headerTitleStyle:{
      //         fontSize:20,
               
      //          fontWeight:'bold'             },
         
      //  }} /> 
      //       <Stack.Screen  name="SCAN PRODUCT" component={Scanner}  />
            
      //    </Stack.Navigator>
      //  </NavigationContainer>
       <Sample />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
