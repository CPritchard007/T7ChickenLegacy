import React from 'react';
import {StyleSheet} from 'react-native';

const PRIMARY_COLOR = ""
const SECONDARY_COLOR = ""
const BACKGROUND_COLOR = "#121212"
const HEADER_COLOR = "#242424";
const TEXT_COLOR = "white"
export const globalTheme = StyleSheet.create({
    mainContainer: {
        backgroundColor: BACKGROUND_COLOR,
        flex: 1
    },
    horizontalWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap'
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

    },
    highlight : {
        color: "red"
    }
});

export const globalHeaderOptions = { 
        headerStyle: {
            backgroundColor: HEADER_COLOR
        },
        headerTintColor: TEXT_COLOR
    }
