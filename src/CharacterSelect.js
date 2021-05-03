import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Dimensions, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import FontFiveIcon from 'react-native-vector-icons/FontAwesome5';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import { globalTheme } from '../assets/themes/defaultTheme';

/**
 * @name CharacterSelect
 * CharacterSelect is just as the name should sugest, this will allow the user to select
 *   A fighter from the list and learn anything and everything they need to know about them.
 * 
 * @author Curtis Pritchard
 */


const TempData = [
    {
        label: "Asuka",
        image: require('../assets/images/characterPortraits/asuka_portrait.png'),
        favourited: true
    }, 
    {
        label: "Eddy",
        image: require('../assets/images/characterPortraits/eddy_portrait.png'),
        favourited: false
    }, 
    {
        label: "Master Raven",
        image: require('../assets/images/characterPortraits/masterraven_portrait.png'),
        favourited: true,
    },
    {
        label: "Armor King",
        image: require('../assets/images/characterPortraits/armorking_portrait.png'),
        favourited: false
    }
];

export const CharSelect = ({navigation}) => {
    //top navigation will contain an elipse icon or a gear icon (dependent on the device type), 
    // as well as customize the header title (Character Select)
    React.useLayoutEffect( () => {
        navigation.setOptions({
            title: "Character Select",
            headerRight: () => (
                <FontFiveIcon name="ellipsis-v" size={18} style={{padding:15}} color="#fff" onPress={() => alert("Hello World")}/>
            ), 
        })
    });

    const TileItem = ({title, location, disabled, image, favourited}) => {
        
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
        favouritedIcon = (isFavourited) => isFavourited? <FontIcon style={style.starIcon} color="white" size={28} name="star"/> : null

        return (
            <TouchableOpacity style={style.tiles}>
                <ImageBackground source={image} imageStyle={{resizeMode: 'cover'}} style={style.imageContainer}>
                    {favouritedIcon(favourited)}
                </ImageBackground>
                <Text numberOfLines={2} style={style.textFit}>{title}</Text>
            </TouchableOpacity>
        );
    }

    //with all the character data, sort them by favourited, then by alphabetical
    const sortedData = TempData.sort((a,b) => {
        if (a.favourited && b.favourited) {
            if (a.label > b.label) {
                return 1
            } else if (a.label < b.label){
                return -1
            }
        } else if (a.favourited) {
            return -1
        } else if (b.favourited) {
            return 1
        } else if (!a.favourited && !b.favourited) {
            if (a.label > b.label) {
                return 1
            } else if (a.label < b.label){
                return -1
            }
        }
        return 0
    })
    
    //due to the fact that I need to create a list of tiles for flexbox, I am passing all the data into an itemList array as TIleItems
    const itemList = [];
    sortedData.forEach( (item, index) => { 
        itemList.push(<TileItem key={index} title={item.label} image={item.image} id={index} location={null} favourited={item.favourited}/>)
    });
    
    // TileItems will be placed one after the other from the array below
    return(
        <SafeAreaView style={globalTheme.mainContainer}>
            <ScrollView>
                <View style={globalTheme.horizontalWrap}>
                    {itemList}  
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}