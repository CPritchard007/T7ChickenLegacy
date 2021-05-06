import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, ImageBackground, SafeAreaView, StatusBar, ScrollView, Platform } from 'react-native';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import FontFiveIcon from 'react-native-vector-icons/FontAwesome5';
import { globalTheme } from '../assets/themes/defaultTheme';
import { TileButton } from './components/TileButton'

/**
 * @name HomePage
 * Screen 1, this page is what the user will see once they first launch.
 *   More information will be added in the future
 * 
 * @author Curtis Pritchard
 */


export const HomePage = ({navigation}) => {
    //top navigation will contain an elipse icon or a gear icon (dependent on the device type), 
    // as well as remove the header title
    React.useLayoutEffect( () => {
        navigation.setOptions({
            headerTitle: " ",
            headerRight: () => {
                if (Platform.OS === "ios")
                    return <FontFiveIcon name="ellipsis-v" size={18} style={{padding:15}} color="#fff" onPress={() => navigation.navigate('Settings')}/>
                else 
                    return <FontistoIcon name="player-settings" size={18} style={{padding:15}} color="#fff" onPress={() => navigation.navigate('Settings')}/>
            }
        })
    });


    return (
        <SafeAreaView style={globalTheme.mainContainer}>
            <StatusBar barStyle='light-content'/>
            
            <View style={{padding: 20}}>
                <Text style={globalTheme.h3}>Welcome to</Text>
                <Text style={[globalTheme.h2, {top: -10}]}><Text style={{color: "red", fontSize: 45}}>T7 </Text>Chicken Legacy</Text>
            </View>
            <ScrollView bounces={false} overScrollMode={'never'}>
                <View style={globalTheme.horizontalWrap}>
                    <TileButton title="Character Select" img={require("../assets/images/mainMenu/character-select-background.png")} location='CharSelect' fullwidth/>
                    <TileButton title="Sponsors" img={require('../assets/images/mainMenu/sponsors.jpg')} disabled/>
                    <TileButton title="Support Us" img={require('../assets/images/mainMenu/support-us.jpg')} disabled/>
                    <TileButton title="About The Team" img={require('../assets/images/mainMenu/about-the-team.png')} disabled/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}