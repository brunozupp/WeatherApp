import React from "react";
import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native';
import IconText from "../components/IconText";
import moment from 'moment';

const City = ({weatherData}) => {

    const {
        container,
        imageLayout,
        cityText,
        populationText,
        cityName,
        countryName,
        populationWrapper,
        rowLayout,
        riseSetWrapper,
        riseSetText
    } = styles;

    const {name, country, population, sunrise, sunset} = weatherData

    return (
        <View style={container}>
            <ImageBackground source={require("../../assets/city-background.jpg")} style={imageLayout}>
                <Text style={[cityName, cityText]}>{name}</Text>
                <Text style={[countryName, cityText]}>{country}</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText
                        bodyText={population}
                        bodyTextStyles={populationText}
                        iconColor={"red"}
                        iconName={"user"}
                    />
                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText
                        bodyText={moment(sunrise).format("hh:mm a")}
                        bodyTextStyles={riseSetText}
                        iconColor={"white"}
                        iconName={"sunrise"}
                    />
                    <IconText
                        bodyText={moment(sunset).format("hh:mm a")}
                        bodyTextStyles={riseSetText}
                        iconColor={"white"}
                        iconName={"sunset"}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight || 0,
    },
    imageLayout: {
        flex: 1,
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30,
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30,
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default City