import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './components/Dashboard';
import StressInput from './components/StressInput';
import Recommendation from './components/Recommendation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="StressInput" component={StressInput} />
        <Stack.Screen name="Recommendation" component={Recommendation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
