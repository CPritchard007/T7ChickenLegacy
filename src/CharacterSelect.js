import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Dimensions, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import FontFiveIcon from 'react-native-vector-icons/FontAwesome5';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import { globalTheme } from '../assets/themes/defaultTheme';



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
    React.useLayoutEffect( () => {
        navigation.setOptions({
            title: "Character Select",
            headerRight: () => (
                <FontFiveIcon name="ellipsis-v" size={18} style={{padding:15}} color="#fff" onPress={() => alert("Hello World")}/>
            ), 
        })
    });

    const TileItem = ({title, location, disabled, image, favourited}) => {
        const screen = Dimensions.get('screen');
        const numberOfTilesPerLine = 3;
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

        favouritedIcon = (isFavourited) => isFavourited? <FontIcon style={style.starIcon} color="white" size={28} name="star"/> : <FontIcon color="white" size={28} style={style.starIcon} name="star-o"/>

        return (
            <TouchableOpacity style={style.tiles}>
                <ImageBackground source={image} imageStyle={{resizeMode: 'cover'}} style={style.imageContainer}>
                    {favouritedIcon(favourited)}
                </ImageBackground>
                <Text numberOfLines={2} style={style.textFit}>{title}</Text>
            </TouchableOpacity>
        );
    }

    const itemList = [];

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

    sortedData.forEach( item => { 
        itemList.push(<TileItem title={item.label} image={item.image} location={null} favourited={item.favourited}/>)
    });
    
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