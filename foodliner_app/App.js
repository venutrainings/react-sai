
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './components/screens/SignUp';
import Login from './components/screens/Login'
import Footer from './components/Footer';
import Scanner from './components/screens/Scanner';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SING UP" component={SignUp} />
        <Stack.Screen name="SCAN PRODUCT" component={Scanner} />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
    // <SignUp />
  );
}

export default App;

