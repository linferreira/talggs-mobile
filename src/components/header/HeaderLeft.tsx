import React from 'react';
import { View, Text} from 'react-native';
import SvgUri from 'expo-svg-uri';

import {StyleSheet} from 'react-native';

function HeaderLeft( props ) {
    return (
        <View>
            <View style={Style.header}>
                <SvgUri
                    width="50"
                    height="50"
                    source={require('../../../assets/Logo.svg')}
                />
                 <Text style={Style.header_name}>{props.name}</Text>
            </View>
            <Text style={Style.header_title}>{props.title}</Text>
        </View>
    )
}

const Style = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: -56,
    },

    header_name: {
        color: '#F7F6EE',
        marginLeft: 10,
        fontSize: 20,
    },

    header_title: {
        color: '#F7F6EE',
        marginLeft: 8,
        fontSize: 20,
    },
})


export default HeaderLeft