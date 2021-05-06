import React from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, StyleSheet, Text, ScrollView, Dimensions } from 'react-native'
import FontFiveIcon from 'react-native-vector-icons/FontAwesome5'
import { globalTheme, SECONDARY_COLOR } from '../assets/themes/defaultTheme';
import { HomePage } from './HomePage';
import { CharacterSelect } from './CharacterSelect'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Move } from './DataPages/Moves';
/// requires react-native-tab-view and react-native-pager-view
const Tab = createMaterialTopTabNavigator();


const Temp_Data = {
    "fullname": "Asuka Kazama",
    "displayName": "Asuka",
    "label": "asuka",
    "movelist": []
}

export const CharacterSpotlight = ({navigation}) => {

    React.useLayoutEffect( () => {
        navigation.setOptions({
            title: "",
            
            headerRight: () => (
                <View style={globalTheme.horizontalWrap}>
                    <FontFiveIcon name="star" size={18} style={{padding:15}} color="#fff" onPress={() => alert("Hello World")}/>
                    <FontFiveIcon name="ellipsis-v" size={18} style={{padding:15}} color="#fff" onPress={() => alert("Hello World")}/>
                </View>
            ), 
        })
    });
    
    const style = StyleSheet.create({
        headerStyle: {
            position: 'relative', height: 200,
            borderBottomWidth: 6,
            borderColor: SECONDARY_COLOR
        },
        textStyle: {
            position: 'absolute', bottom: 0, left: 0,
            backgroundColor: '#ffffffee',
            color: 'black',
            paddingTop: 5,
            paddingRight: 30,
            paddingBottom: 0,
            paddingLeft: 10,
            fontSize: 24,
            fontWeight: '800'
        }
    })

    const screenHeight = Dimensions.get('screen').height - 130 // <= Nav Height (I need to learn how to get its height programatically)

    return (
    <SafeAreaView style={globalTheme.mainContainer}>
        <StatusBar barStyle={'light-content'}/>
        <ScrollView bounces={false} overScrollMode={'never'} snapToInterval={200}>
        <View style={style.headerStyle}>
            <ImageBackground source={require('../assets/images/characterBanners/asuka_banner.png')} imageStyle={{justifyContent: 'center', resizeMode: 'cover'}} style={[globalTheme.fillContainer, {opacity: .7}]}/>
            <Text style={style.textStyle}>{Temp_Data.fullname}</Text>
        </View>
        <View style={{height: screenHeight}}>
            <Tab.Navigator  tabBarOptions={{
                labelStyle: { color: 'white' },
                style: { backgroundColor: 'black' },
                indicatorStyle: {
                    backgroundColor: SECONDARY_COLOR,
                },
            }}>
                <Tab.Screen name="Moves" component={Move} />
                <Tab.Screen name="Combos" component={HomePage} />
                <Tab.Screen name="Spotlight" component={HomePage} />
            </Tab.Navigator>
        </View>     
        </ScrollView>
    </SafeAreaView>
    );
}