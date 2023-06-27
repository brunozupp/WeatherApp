import React from 'react'
import {View, StyleSheet} from 'react-native'
import UpcomingWeather from './src/screens/UpcomingWeather';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <CurrentWeather /> */}
      <UpcomingWeather />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App