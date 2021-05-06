import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { BACKGROUND_COLOR, globalTheme } from '../../assets/themes/defaultTheme';



export const Move = ({navigator}) => {
    const style = StyleSheet.create({
        tableCellHeight: {
            height: 40,
            borderColor: 'grey',            
        },
        headerContainerStyle: {
            justifyContent: 'center',
            flex: 1,
            backgroundColor: '#bdbdbd',
            height: 40,
            borderColor: 'grey',
            borderTopWidth: 3, borderLeftWidth: 3, borderBottomWidth: 3
        },
        headerTextStyle: {
        }
    });
    const TableHeader = () => {
        return (
            <View style={style.tableCellHeight}>
                <View style={globalTheme.horizontalWrap}>
                    <View style={style.headerContainerStyle}><Text style={{textAlign: 'center'}}>Notation</Text></View>
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
        <ScrollView style={globalTheme.mainContainer} >
            <View style={{flexDirection: 'row'}}>
                <View  style={{width: '50%'}}>
                    <TableHeader />
                    

                </View>
                <ScrollView horizontal={true} style={{flex: 1, borderColor: 'grey'}} bounces={false}  overScrollMode={'never'} snapToInterval={96} showsHorizontalScrollIndicator={false}>
                    <View style={{flexDirection: 'row', borderRightWidth: 3, borderColor: 'grey'}}>
                        <View style={{height: 40, width: 96 /* Change This */, backgroundColor: '#bdbdbd', flex: 1, justifyContent: 'center', borderTopWidth: 3, borderLeftWidth: 3, borderBottomWidth: 3, borderColor: 'grey'}}><Text style={{textAlign: 'center'}}>Speed</Text></View>
                        <View style={{height: 40, width: 96 /* Change This */, backgroundColor: '#bdbdbd', flex: 1, justifyContent: 'center', borderTopWidth: 3, borderLeftWidth: 3, borderBottomWidth: 3, borderColor: 'grey'}}><Text style={{textAlign: 'center'}}>On Block</Text></View>
                        <View style={{height: 40, width: 96 /* Change This */, backgroundColor: '#bdbdbd', flex: 1, justifyContent: 'center', borderTopWidth: 3, borderLeftWidth: 3, borderBottomWidth: 3, borderColor: 'grey'}}><Text style={{textAlign: 'center'}}>On Hit</Text></View>
                        <View style={{height: 40, width: 96 /* Change This */, backgroundColor: '#bdbdbd', flex: 1, justifyContent: 'center', borderTopWidth: 3, borderLeftWidth: 3, borderBottomWidth: 3, borderColor: 'grey'}}><Text style={{textAlign: 'center'}}>Counter Hit</Text></View>
                        <View style={{height: 40, width: 96 /* Change This */, backgroundColor: '#bdbdbd', flex: 1, justifyContent: 'center', borderTopWidth: 3, borderLeftWidth: 3, borderBottomWidth: 3, borderColor: 'grey'}}><Text style={{textAlign: 'center'}}>Hit Level(s)</Text></View>
                        <View style={{height: 40, width: 96 /* Change This */, backgroundColor: '#bdbdbd', flex: 1, justifyContent: 'center', borderTopWidth: 3, borderLeftWidth: 3, borderBottomWidth: 3, borderColor: 'grey'}}><Text style={{textAlign: 'center'}}>Damage</Text></View>
                    </View>

                </ScrollView>
            </View>
        </ScrollView>
    );
}
