import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Dimensions, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import FontFiveIcon from 'react-native-vector-icons/FontAwesome5';
import { globalTheme } from '../assets/themes/defaultTheme';
import { CharacterTileItem } from './components/TileButton';

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
        itemList.push(<CharacterTileItem key={index} title={item.label} image={item.image} id={index} location={'CharacterSpotlight'} favourited={item.favourited}/>)
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