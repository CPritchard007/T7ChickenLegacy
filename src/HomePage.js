import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, ImageBackground, SafeAreaView, StatusBar } from 'react-native';

const TileButton = ({title, img, location, disabled, fullwidth}) => {
    const screen = Dimensions.get('screen');
    const numberOfTilesPerWidth = screen.width < 400 ? 2 : screen.width / 200;
    const marginSeperators = 0;
    const tileWidth = screen.width / numberOfTilesPerWidth - (marginSeperators * 2);
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
                margin: 3,
                opacity: .5,
                borderRadius: 5,
                
            },
            
            textStyle: {
                position: 'absolute',
                bottom: 0,
                left : 0,
                width: '100%',
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
                backgroundColor: "#000000dd",
                padding: 5

            }
        
    });
    return (
        <TouchableOpacity style={style.tileButton} >
            <ImageBackground source={img} style={style.imageContainer} imageStyle={style.imageStyle}>
            <Text style={style.textStyle}>{title}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export const HomePage = (navigation) => {
    const style = StyleSheet.create({
        mainContainer: {
            flex: 1,
            backgroundColor: '#121212',
            flexWrap: 'wrap',
            flexDirection: 'row'  
        },
        h2: {
            color: 'white',
            fontSize: 32,
            fontWeight: 'bold',
        },
        h3: {
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold',            
        }
    });

    return (
        <SafeAreaView style={style.mainContainer}>
            <StatusBar barStyle='light-content'/>
            <View style={{padding: 20}}>
                <Text style={style.h3}>Welcome to</Text>
                <Text style={style.h2}>T7Chicken Legacy</Text>
            </View>
            <TileButton title="Character Select" img={require("../assets/images/character-select-background.png")}  fullwidth/>
            <TileButton title="Sponsors" img={require('../assets/images/sponsors.jpg')}/>
            <TileButton title="Support Us" img={require('../assets/images/support-us.jpg')}/>
            <TileButton title="About The Team" img={require('../assets/images/about-the-team.png')} />
            <TileButton title="Settings"  />
        
        </SafeAreaView>
    );

}