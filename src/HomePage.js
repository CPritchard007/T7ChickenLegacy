import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, ImageBackground, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import { globalTheme } from '../assets/themes/defaultTheme';


export const HomePage = ({navigation}) => {

    const TileButton = ({ title, img, location, disabled, fullwidth}) => {
        const screen = Dimensions.get('screen');
        const numberOfTilesPerWidth = screen.width < 400 ? 2 : screen.width / 200;
        const marginSeperators = 3;
        const tileWidth = screen.width / numberOfTilesPerWidth;
        const importantFullWidth = screen.width - marginSeperators;
        
        const style = StyleSheet.create({
            tileButton: {
                width: fullwidth ? importantFullWidth : tileWidth,
                height: tileWidth,  
            },
            imageStyle: {
                borderRadius: 5,
                resizeMode: 'cover',  
            },
            imageContainer: {
                backgroundColor: "#888",
                    margin: marginSeperators,
                    flex: 1,
                    position: 'relative',
                    opacity: .5,
                    borderRadius: 5,
                },
                textStyle: {
                    position: 'absolute', bottom: 0, left : 0,
                    width: '100%',
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'white',
                    backgroundColor: "#000000dd",
                    padding: 5
                }
        });
        function disableIcon(){
            if (!disabled) return
            return <FontistoIcon name="locked" size={30} color="white" style={{position: 'absolute', top:10, left: 10}}/>   
        }

        return (
            <TouchableOpacity disabled={disabled} style={style.tileButton} onPress={() => navigation.navigate(location)}>
                <ImageBackground source={img} style={style.imageContainer} imageStyle={style.imageStyle}>
                    <Text style={style.textStyle}>{title}</Text>
                </ImageBackground>
                {disableIcon()}
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={globalTheme.mainContainer}>
            <StatusBar barStyle='light-content'/>
            
            <View style={{padding: 20}}>
                <Text style={globalTheme.h3}>Welcome to</Text>
                <Text style={globalTheme.h2}><Text style={{color: "red", fontSize: 45}}>T7 </Text>Chicken Legacy</Text>
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