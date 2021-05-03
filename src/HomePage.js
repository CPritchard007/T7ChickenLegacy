import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, ImageBackground, SafeAreaView, StatusBar, ScrollView, Platform } from 'react-native';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import FontFiveIcon from 'react-native-vector-icons/FontAwesome5';
import { globalTheme } from '../assets/themes/defaultTheme';

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

    const TileButton = ({ title, img, location, disabled, fullwidth}) => {
    
        //calculate a good ratio for the application (poorly). A better verison will be done later on in time
        const screen = Dimensions.get('screen');
        const numberOfTilesPerWidth = 2
        const marginSeperators = 3;
        const tileWidth = screen.width / numberOfTilesPerWidth;
        const importantFullWidth = screen.width - marginSeperators;

        // allow the ipad users to not deal with having to scroll on one huge screen
        const tileHeight = screen.width < 400 ? tileWidth  : tileWidth / 1.3
        
        const style = StyleSheet.create({
            tileButton: {
                width: fullwidth ? importantFullWidth : tileWidth,
                height: tileHeight,  
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
        
        //allow me to decide if the icon should render
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