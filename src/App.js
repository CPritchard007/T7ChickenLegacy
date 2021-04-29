/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { HomePage } from './HomePage';



const App = () => {

    const Stack = createStackNavigator();
    
    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} options={{headerShown: false,headerStyle: {backgroundColor: "#242424"}, headerTintColor: "#fff"}}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
};

const styles = StyleSheet.create({
  
});

export default App;
