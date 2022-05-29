import * as React from 'react';
import TitleScreen from './app/screens/TitleScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/screens/HomeScreen';

// import { createStackNavigator, createAppContainer } from '@react-navigation/native';

// You can import from local files
// or any pure javascript modules available in npm

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Title"
          component={TitleScreen}
          options={{ title: 'TitleScreen' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'HomeScreen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
