import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

const IconText = ({iconName, iconColor, bodyText, bodyTextStyles}) => {
    return (
        <View style={styles.container}>
            <Feather name={iconName} size={50} color={iconColor} />
            <Text style={[styles.textTheme, bodyTextStyles]}>{bodyText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textTheme: {
        fontWeight: 'bold',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export default IconText