import React from 'react';
import { Button, Center, Text } from 'native-base';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { HeaderBackButton } from '@react-navigation/elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './MainScreen';
// import TrailScreen from './TrailScreen';

function HomeScreen() {
  const navigation: any = useNavigation();

  return (
    <Center my="4">
      <Text mb="4">under construction</Text>
      <Button onPress={() => navigation.navigate('Trail')}>Trail</Button>
    </Center>
  );
}

function EmptyScreen() {
  return (
    <Center>
      <Text>under construction</Text>
    </Center>
  );
}

const MainStack = createNativeStackNavigator();

//             headerLeft: () => (
//               <HeaderBackButton onPress={() => navigation.goBack(null)} />
//             ),

export default function Navigator() {
  const navigation: any = useNavigation();

  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Home" component={MainScreen} />
        <MainStack.Screen name="Trails" component={EmptyScreen} />
        <MainStack.Screen name="Trail" component={EmptyScreen} />
        <MainStack.Screen name="Settings" component={EmptyScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
