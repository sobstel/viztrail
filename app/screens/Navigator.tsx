import React from 'react';
// import { useTheme } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './HomeScreen';
import TrailScreen from './TrailScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Stack.Navigator  screenOptions={{
// const { colors } = useTheme();
// headerStyle: { backgroundColor: colors.coolGray[800] },
// headerTintColor: colors.lightText,
// headerTitleStyle: { fontWeight: 'bold', },
// headerShadowVisible: false,
//
//

function TrailTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Trail"
        component={TrailScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen */}
        {/*  name="Home" */}
        {/*  component={HomeScreen} */}
        {/*  options={{ title: 'Trails' }} */}
        {/* /> */}

        <Stack.Screen name="Trail" component={TrailTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
