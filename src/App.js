import React from 'react';
import {NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { HomePage } from './HomePage';
import { CharSelect } from './CharacterSelect';
import { SettingsPage } from './SettingsPage';
import { globalHeaderOptions } from '../assets/themes/defaultTheme';


/**
 * @name App
 *
 * @author Curtis Pritchard
 */


const App = () => {
    
  //This is the navigator. All the screens will be added to the navigation container with a name
  // (which will be used to call for them when changing screens). These pages can be called by navigator.navigate('name')
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={HomePage} options={globalHeaderOptions}/>
        <Stack.Screen name="CharSelect" component={CharSelect} options={globalHeaderOptions}/>
        <Stack.Screen name="Settings" component={SettingsPage} options={globalHeaderOptions}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
