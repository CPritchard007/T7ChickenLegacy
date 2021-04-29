import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
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

    return(
        <SafeAreaView style={{backgroundColor: "#121212",flex: 1}}>
            <ScrollView style={{flexDirection: 'row', flexWrap: 'wrap'}}>

            </ScrollView>
        </SafeAreaView>
    )
}