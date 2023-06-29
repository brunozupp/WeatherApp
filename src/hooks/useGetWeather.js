import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import {WEATHER_API_KEY} from '@env'

export const useGetWeather = () => {
    
    const [loading, setLoading] = useState(true)

    const [error, setError] = useState(null)

    const [weather, setWeather] = useState([])

    const [lat, setLat] = useState([])
    const [lon, setLon] = useState([])

    const fetchWeatherData = async () => {
        try {
            console.log(`entrou aqui ${lat} ${lon} ${WEATHER_API_KEY}`)

            const result = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
            
            const data = await result.json()

            console.log(data)

            setWeather(data)

        } catch (error) {
            console.log(error)
            setError("Could not fetch weather")
            
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        (async() => {
          let {status} = await Location.requestForegroundPermissionsAsync()
    
          if(status !== "granted") {
            setError("Permission to access Location was denied")
            return
          }
    
          let location = await Location.getCurrentPositionAsync({})
    
          setLat(location.coords.latitude)
          setLon(location.coords.longitude)
        
          await fetchWeatherData()
        })() // -> para executar imediatamente após o fim da função, uso o () vazio
    }, [lat, lon]) // -> Indica que vai executar apenas uma vez esse [] vazio

    return [loading, error, weather]
}