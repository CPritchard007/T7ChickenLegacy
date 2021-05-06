import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { BACKGROUND_COLOR, globalTheme, SECONDARY_COLOR } from '../../assets/themes/defaultTheme';

const border_width = 2

export const Move = ({navigator}) => {
    const style = StyleSheet.create({
        
        headerContainerStyle: {
            justifyContent: 'center',
            flex: 1,
            backgroundColor: '#232323',
            height: 44,
            borderColor: '#121212',
            borderLeftWidth: border_width,
            borderTopWidth: border_width,
            borderBottomWidth: border_width,
            borderTopWidth: border_width,
            borderBottomColor: SECONDARY_COLOR
        },
        headerTextStyle: {
            height: 40,
            width: 96 /* Change This */,
            backgroundColor: '#232323',
            flex: 1, justifyContent: 'center',
            borderLeftWidth: border_width,
            borderColor: '#121212'
        }
    });
    const TableHeader = () => {
        return (
            <View>
                <View style={globalTheme.horizontalWrap}>
                    <View style={style.headerContainerStyle}><Text style={{textAlign: 'center', color:'#fff'}}>Notation</Text></View>
                </View>
            </View>
        ) 
    }
    const TableCol = () => {
        return (
            <View style={style.tableCellHeight}></View>
        );
    } 
    return (
        <ScrollView style={globalTheme.mainContainer} bounces={false} overScrollMode={'never'} showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row'}}>
                <View  style={{width: '50%'}}> 
                    <TableHeader />

                </View>
                <ScrollView horizontal={true} bounces={false} overScrollMode={'never'} snapToInterval={96} showsHorizontalScrollIndicator={false}>
                    <View style={{height: 300, }}>
                        <View style={{flexDirection: 'row', borderRightWidth: border_width, borderTopWidth: border_width, borderBottomWidth: border_width, borderColor: '#121212', borderBottomColor: SECONDARY_COLOR}}>
                            <View style={style.headerTextStyle}><Text style={{textAlign: 'center', color:'#fff'}}>Speed</Text></View>
                            <View style={style.headerTextStyle}><Text style={{textAlign: 'center', color:'#fff'}}>On Block</Text></View>
                            <View style={style.headerTextStyle}><Text style={{textAlign: 'center', color:'#fff'}}>On Hit</Text></View>
                            <View style={style.headerTextStyle}><Text style={{textAlign: 'center', color:'#fff'}}>Counter Hit</Text></View>
                            <View style={style.headerTextStyle}><Text style={{textAlign: 'center', color:'#fff'}}>Hit Levels</Text></View>
                            <View style={style.headerTextStyle}><Text style={{textAlign: 'center', color:'#fff'}}>Damage</Text></View>
                        </View>
                        
                    </View>
                </ScrollView>
            </View>
        </ScrollView>
    );
}
