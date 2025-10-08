import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootStackParamList } from '../types';

import SplashScreen from '../screens/SplashScreen/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import SignupScreen from '../screens/RegisterScreen/SignupScreen';
import BottomNavigator from './BottomNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name='Signup' component={SignupScreen}/>
          <Stack.Screen name="Food" component={BottomNavigator} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default AppNavigator;
