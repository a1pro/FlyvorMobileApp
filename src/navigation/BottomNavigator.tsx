import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { Dimensions, Image, Platform, StyleSheet, View } from 'react-native';

import { BottomTabParamList } from '../types';

import COLORS from '../utils/Colors';

import UserProfile from '../screens/Profile/UserProfile';
import { getPlatformFont } from '../assets/fonts';
import IMAGES from '../assets/images';
import FoodScreen from '../screens/FoodScreen/FoodScreen';
import TravelScreen from '../screens/TravelScreen/TravelScreen';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: COLORS.White,
        tabBarInactiveTintColor: COLORS.grey,
        tabBarLabelStyle: {
          fontSize: 13,
          color: COLORS.White,
          fontFamily: getPlatformFont('regular'),
        },
        tabBarStyle: {
          backgroundColor: '#0A0A0A',
          borderTopWidth: 0,
          shadowRadius: 10,
          paddingTop: 15,
          paddingBottom: 5,
          height: 80,
        },
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === 'Food') {
            iconName = IMAGES.food;
          } else if (route.name === 'Travel') {
            iconName = IMAGES.travel
          } else if (route.name === 'UserProfile') {
            iconName = IMAGES.user;
          }
          return (
            <View>
              <Image source={iconName} style={styles.icon} />
            </View>
          );
        },
      })}
    >
      <Tab.Screen
        name="Food"
        component={FoodScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Travel"
        component={TravelScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="UserProfile"
        component={UserProfile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    resizeMode: 'contain',
    margin: 5,
    ...Platform.select({
      ios: {
        height: 25,
        width: 25,
      },
      android: {
        height: (Dimensions.get('window').width * 0.1) / 1.6,
        width: (Dimensions.get('window').width * 0.1) / 1,
      },
    }),
  },
});
export default BottomNavigator;
