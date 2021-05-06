import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, ImageBackground, Dimensions } from 'react-native';
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import FontIcon from 'react-native-vector-icons/FontAwesome';


export const TileButton = ({ title, img, location, disabled, fullwidth }) => {
    const navigation = useNavigation();


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


export const CharacterTileItem = ({title, location, disabled, image, favourited}) => {
    const navigation = useNavigation();

    //calculate a good ratio for the application (poorly). A better verison will be done later on in time
    const screen = Dimensions.get('screen');
    const numberOfTilesPerLine = screen.width < 400 ? 3: Math.ceil(screen.width / 200);
    const marginSpacing = 3;
    const tileWidth = screen.width / numberOfTilesPerLine - (marginSpacing * 2);
    
    const style = StyleSheet.create({
        tiles: {
            width: tileWidth,
            height: tileWidth * 1.3,
            backgroundColor: "#232323",
            margin: marginSpacing
        },
        textFit: {
            width: '100%',
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
            padding: 5,
            position: 'absolute', bottom: 0, left: 0,
            backgroundColor: '#121212ee',
            textAlign: 'center'
        },
        imageContainer: {
            position: 'relative',
            width: '100%',
            flex: 1
        },
        starIcon: {
            padding: 5
        }
    });
    // using this will allow to asure that only favourited characters have a star.
    // this will allow the screen to show more of the art, without too much clutter.
    favouritedIcon = (isFavourited) => isFavourited? <FontIcon onPress={() => {alert("hit")}} style={style.starIcon} color="white" size={28} name="star"/> : null

    return (
        <TouchableOpacity onLongPress={() => {alert('favourited');}} onPress={() => {navigation.navigate('CharacterSpotlight')}} style={style.tiles}>
            <ImageBackground source={image} imageStyle={{resizeMode: 'cover'}} style={style.imageContainer}>
                {favouritedIcon(favourited)}
            </ImageBackground>
            <Text numberOfLines={2} style={style.textFit}>{title}</Text>
        </TouchableOpacity>
    );
}