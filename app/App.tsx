import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import Navigator from './screens/Navigator';

const Stack = createNativeStackNavigator();

export const THEME = extendTheme({
  config: {
    // TODO: future -> support dark and use useColorModeValue wherever needed
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
});

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar style="dark" />
      <Navigator />
    </NativeBaseProvider>
  );
}
