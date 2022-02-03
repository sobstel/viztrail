import React from 'react';
import { Button, Center, Text } from 'native-base';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './HomeScreen';
import TrailScreen from './TrailScreen';

function HomeEmptyScreen() {
  const navigation: any = useNavigation();

  return (
    <Center my="4">
      <Text mb="4">under construction</Text>
      <Button onPress={() => navigation.navigate('Trail')}>Trail</Button>
    </Center>
  );
}

function TrailEmptyScreen() {
  return (
    <Center>
      <Text>under construction</Text>
    </Center>
  );
}

const HomeTab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <HomeTab.Navigator screenOptions={{ headerShown: false }}>
      <HomeTab.Screen name="AllTrails" component={HomeEmptyScreen} />
      <HomeTab.Screen name="FavTrails" component={HomeEmptyScreen} />
      <HomeTab.Screen name="MyTrails" component={HomeEmptyScreen} />
    </HomeTab.Navigator>
  );
}

const TrailTab = createBottomTabNavigator();

function TrailTabs() {
  const navigation: any = useNavigation();

  return (
    <TrailTab.Navigator screenOptions={{ headerShown: false }}>
      <TrailTab.Screen
        name="TrailMap"
        component={TrailScreen}
        options={{
          title: 'Map',
          headerLeft: () => (
            <HeaderBackButton onPress={() => navigation.goBack(null)} />
          ),
        }}
      />
      <TrailTab.Screen
        name="TrailPeople"
        component={TrailEmptyScreen}
        options={{
          title: 'People',
        }}
      />
      <TrailTab.Screen
        name="TrailMe"
        component={TrailEmptyScreen}
        options={{
          title: 'Me',
        }}
      />
    </TrailTab.Navigator>
  );
}

//

const MainStack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="Home"
          component={HomeTabs}
          options={{ title: 'Trails' }}
        />
        <MainStack.Screen name="Trail" component={TrailTabs} />
        {/* TODO: UserTrail screen */}
        {/* TODO: Settings screen */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
