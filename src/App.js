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
import { globalHeaderOptions } from '../assets/themes/defaultTheme';



const App = () => {




    const Stack = createStackNavigator();
    
    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={HomePage} options={globalHeaderOptions("")}/>
        <Stack.Screen name="CharSelect" component={CharSelect} options={globalHeaderOptions()}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
};

const styles = StyleSheet.create({
  
});

export default App;
