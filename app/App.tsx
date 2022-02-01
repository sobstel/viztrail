import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { extendTheme, NativeBaseProvider } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
