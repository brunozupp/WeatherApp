import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

const UpcomingWeather = () => {
    return (
        <View style={styles.container}>
            <Text>Upcoming</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 32
    },
})

export default UpcomingWeather