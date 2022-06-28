
import { StyleSheet, Text, View } from 'react-native';
import Singup from './components/screens/Singup';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/screens/Login';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name='login' component={Login} /> */}
        <Stack.Screen name='singup' component={Singup} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

