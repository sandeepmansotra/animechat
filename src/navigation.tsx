import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from './screens/OnboardingScreen';
import PayWallScreen from './screens/PayWallScreen';

const Stack = createNativeStackNavigator();

const Navigation = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="OnboardingScreen">
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="PayWall" component={PayWallScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
