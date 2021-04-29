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
import { CharSelect } from './CharacterSelect';



const App = () => {

    const Stack = createStackNavigator();
    
    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={HomePage} options={{headerShown: false,headerStyle: {backgroundColor: "#242424"}, headerTintColor: "#fff"}}/>
        <Stack.Screen name="CharSelect" component={CharSelect} options={{headerStyle: {backgroundColor: "#242424"}, headerTintColor: "#fff"}}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
};

const styles = StyleSheet.create({
  
});

export default App;
