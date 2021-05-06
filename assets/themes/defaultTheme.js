import React from 'react';
import {StyleSheet} from 'react-native';

export const PRIMARY_COLOR = "";
export const SECONDARY_COLOR = "red";
export const BACKGROUND_COLOR = "#121212";
export const HEADER_COLOR = "#242424";
export const TEXT_COLOR = "white";

export const globalTheme = StyleSheet.create({
    mainContainer: {
        backgroundColor: BACKGROUND_COLOR,
        flex: 1,
        position: 'relative'
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
    },
    h3: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        paddingLeft: 20,

    },
    highlight : {
        color: "red"
    },
    fillContainer: {
        position: 'absolute', top: 0, left: 0, bottom: 0, right: 0
    }
});

export const globalHeaderOptions = { 
        headerStyle: {
            backgroundColor: HEADER_COLOR
        },
        headerTintColor: TEXT_COLOR
    }
