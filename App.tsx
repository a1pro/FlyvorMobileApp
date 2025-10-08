import React from 'react';
import { LogBox } from 'react-native';

import AppNavigator from './src/navigation/AppNavigator';
import Toast from 'react-native-toast-message';

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <>
      <AppNavigator />
      <Toast />
    </>
  );
}
