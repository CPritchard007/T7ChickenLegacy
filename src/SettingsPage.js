import React from 'react';
import {View, Text, SafeAreaView, StatusBar, StyleSheet, ScrollView} from 'react-native';
import { globalTheme } from '../assets/themes/defaultTheme';

export const SettingsPage = ({navigation}) => {
    const ListItem = ({title}) => {
        const style = StyleSheet.create({
            itemCasing: {
                position: 'relative',
                height: 50,
                borderBottomWidth: 3,
                borderBottomColor: '#22222233',
                backgroundColor: 'white'
            },
            itemText: {
                position: 'absolute', bottom: '28%', left: 10,
                fontSize: 18,
            }
        });
        
        return (
        <View style={style.itemCasing}>
            <Text style={style.itemText}>{title}</Text>
        </View>
        )
}

    return (
        <SafeAreaView style={globalTheme.mainContainer}>
            <StatusBar barStyle={'light-content'}/>
            <ScrollView>
                <ListItem title="Change Controller Style"/>
                <ListItem title="Change Theme"/>
                <ListItem title="Report a Bug"/>
                <ListItem title="Feature Request"/>
            </ScrollView>
        </SafeAreaView>
    );
}