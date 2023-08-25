import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { styles, theme } from './components/styles/Screens';
import HomeScreen from './components/homeScreen/HomeScreen'
import AddItems from './components/modal/AddItems';
import Alert from './components/modal/Alert';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={
            {
              headerTitle: 'Encrypted Zone',
              headerTintColor: theme.text,
              headerStyle: styles.headerBar,

            }
          } />
        <Stack.Screen name='Add' component={AddItems} options={{
          title: 'New Item',
          presentation: 'modal',
          cardStyle: { backgroundColor: 'transparent' },
          headerMode: 'none'
        }}></Stack.Screen>
        <Stack.Screen name='Alert' component={Alert} options={{
          title: 'New Item',
          presentation: 'modal',
          cardStyle: { backgroundColor: 'transparent' },
          headerMode: 'none'
        }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
