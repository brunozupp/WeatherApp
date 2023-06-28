import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

const IconText = () => {
    return (
        <View style={styles.populationWrapper}>
            <Feather name={'user'} size={50} color={'red'} />
            <Text style={styles.populationText}>8000</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default IconText