import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Components/Home';
import Punch from './Components/Screen/Punch';
import Camera from './Components/Screen/CameraModule';
import Visit from './Components/Screen/Visit';
import Expense from './Components/Screen/Expense';
import Customer from './Components/Screen/Customer';
import { useEffect } from 'react';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
  <NavigationContainer>
  <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
    <Stack.Screen name="Punch" component={Punch} options={{headerShown:true}} />
    <Stack.Screen name="camera" component={Camera} options={{headerShown:true}} />
    <Stack.Screen name="Visit" component={Visit} options={{headerShown:true}} />      
    <Stack.Screen name="Expense" component={Expense} options={{headerShown:true}} />  
    <Stack.Screen name="Customer" component={Customer} options={{headerShown:true}} />  
  </Stack.Navigator>
  </NavigationContainer>

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
