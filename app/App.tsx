import React from "react";
import {
  Text,
  HStack,
  Container,
  Heading,
  NativeBaseProvider,
  extendTheme,
  VStack,
} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';


const Stack = createNativeStackNavigator();

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Trails',
              headerStyle: {
                // TODO: useTheme
                backgroundColor: '#1f2937',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

function HomeScreen() {
  return (
    <Container _dark={{ bg: "coolGray.900" }} flex={1} p={4}>
      <VStack space={6} alignItems="center">
        <Heading fontFamily="heading">Trails</Heading>
        <HStack space={2} alignItems="center">
          <Text>under construction</Text>
        </HStack>
      </VStack>
    </Container>
  );
}

