import React from "react"
import {View, Text, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons';
import RowText from "../components/RowText";
import { weatherType } from "../utils/weatherType"; 

const CurrentWeather = ({weatherData}) => {

  const {
    wrapper,
    container,
    tempStyle,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message
  } = styles;

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData;

  const weatherCondition = weather[0]?.main


  return (
    <View style={[wrapper, { backgroundColor: weatherType[weatherCondition]?.backgroundColor}]}>
      <View style={container}>
        <Feather name={weatherType[weatherCondition]?.icon} size={100} color="white" />
        <Text style={tempStyle}>{temp}°</Text>
        <Text style={feels}>{`Feels like ${feels_like}°`}</Text>
        <RowText
          messageOne={`High: ${temp_max}° `}
          messageTwo={`Low: ${temp_min}°`}
          containerStyle={highLowWrapper}
          messageOneStyle={highLow}
          messageTwoStyle={highLow}
        />
      </View>
      <RowText
          messageOne={weather[0]?.description}
          messageTwo={weatherType[weatherCondition]?.message}
          containerStyle={bodyWrapper}
          messageOneStyle={description}
          messageTwoStyle={message}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
    paddingTop: 32
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempStyle: {
    fontSize: 48,
    color: 'black'
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highLow: {
    fontSize: 20,
    color: 'black'
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 24,
    marginBottom: 32
  },
  description: {
    fontSize: 43,
  },
  message: {
    fontSize: 25,
  }
})

export default CurrentWeather