import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Dimensions, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import FontIcon from 'react-native-vector-icons/FontAwesome5';




export const CharSelect = ({navigation}) => {
    React.useLayoutEffect( () => {
        navigation.setOptions({
            title: "Character Select",
            headerRight: () => (
                <FontIcon name="ellipsis-v" size={18} style={{padding:15}} color="#fff" onPress={() => alert("Hello World")}/>
            ), 
        })
    });

    const TileItem = ({title, location, disabled}) => {
        const screen = Dimensions.get('screen');
        const numberOfTilesPerLine = 4;
        const marginSpacing = 3;
        const tileWidth = screen.width / numberOfTilesPerLine - (marginSpacing * 2);
        
        const style = StyleSheet.create({
            tiles: {
                width: tileWidth,
                height: tileWidth*1.5,
                backgroundColor: "red",
                margin: marginSpacing
            }
        });

        return (
            <TouchableOpacity style={style.tiles}>
                <Text>{title}</Text>
            </TouchableOpacity>
        );
    }


    return(
        <SafeAreaView style={{backgroundColor: "#121212",flex: 1}}>
            <ScrollView>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                <TileItem title="Working"></TileItem>
                <TileItem title="Working"></TileItem>
                <TileItem title="Working"></TileItem>
                <TileItem title="Working"></TileItem>
                <TileItem title="Working"></TileItem>
                <TileItem title="Working"></TileItem>
                <TileItem title="Working"></TileItem>
                <TileItem title="Working"></TileItem>
                <TileItem title="Working"></TileItem>
                <TileItem title="Working"></TileItem>
                <TileItem title="Working"></TileItem>
                <TileItem title="Working"></TileItem>
                <TileItem title="Working"></TileItem>
                <TileItem title="Working"></TileItem>
                <TileItem title="Working"></TileItem>
                <TileItem title="Working"></TileItem>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}