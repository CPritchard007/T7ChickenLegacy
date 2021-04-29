import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, ImageBackground, SafeAreaView, StatusBar, ScrollView } from 'react-native';



export const HomePage = ({navigation}) => {
    const style = StyleSheet.create({
        mainContainer: {
            flex: 1,
            backgroundColor: '#121212',
            flexWrap: 'wrap',
            flexDirection: 'row'  
        },
        h2: {
            color: 'white',
            fontSize: 35,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            fontFamily: 'Faustina',
            top: -10
        },
        h3: {
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold',
            paddingLeft: 20,

        }
    });



    const TileButton = ({ title, img, location, disabled, fullwidth}) => {
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
            <TouchableOpacity style={style.tileButton} onPress={() => navigation.navigate("CharSelect")}>
                <ImageBackground source={img} style={style.imageContainer} imageStyle={style.imageStyle}>
                <Text style={style.textStyle}>{title}</Text>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={style.mainContainer}>
            <StatusBar barStyle='light-content'/>
            
            <View style={{padding: 20}}>
                <Text style={style.h3}>Welcome to</Text>
                <Text style={style.h2}><Text style={{color: "red", fontSize: 45}}>T7 </Text>Chicken Legacy</Text>
            </View>
            <TileButton title="Character Select" img={require("../assets/images/mainMenu/character-select-background.png")} location='CharSelect' fullwidth/>
            <TileButton title="Sponsors" img={require('../assets/images/mainMenu/sponsors.jpg')}/>
            <TileButton title="Support Us" img={require('../assets/images/mainMenu/support-us.jpg')}/>
            <TileButton title="About The Team" img={require('../assets/images/mainMenu/about-the-team.png')} />
            <TileButton title="Settings"/>
            
        
        </SafeAreaView>
    );

}