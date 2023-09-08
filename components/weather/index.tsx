import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions, Text, Animated } from 'react-native';
import { Defs, Path, Svg, Circle, G } from 'react-native-svg';
import { svgPath } from '../../assets/data/svg';
import { IWeatherInfo } from './refs'
import { opacity } from 'react-native-reanimated';

const windowRectSize = Dimensions.get('window');

export default function Weather() {
  const weatherInfo: IWeatherInfo = {
    temperature: 30,
    weather: 'Sunny',
    city: 'Shanghai',
    date: 'Friday 8 September'
  }
  const gradientAnima: Animated.Value = useRef(new Animated.Value(0)).current;



  Animated.loop(
    Animated.timing(gradientAnima, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true
    })
  ).start();


  return (
    <View style={styles.card}>
      <Animated.View style={[{ backgroundColor: `rgba(255, 0, 0, ${gradientAnima})` }]}>
        <Svg>
          <Defs>
            <Path id="leaf" d={svgPath.leaf}></Path>
          </Defs>
          <Circle id="sun" fill="#F7ED47" cx="0" cy="0" r="50"></Circle>
          <G id="layer3"></G>
          <G id="cloud3" class="cloud"></G>
          <G id="layer2"></G>
          <G id="cloud2" class="cloud"></G>
          <G id="layer1"></G>
          <G id="cloud1" class="cloud"></G>
        </Svg>
        <View style={styles.details}>
          <Text style={styles.temp}>
            {weatherInfo.temperature}
            <Text style={styles.tempSpan}>°C</Text>
          </Text>
          <View style={styles.rightText}>
            <Text style={[{
              marginVertical: 4
            }, styles.text]}>{weatherInfo.date}</Text>
            <Text style={[{
              fontWeight: '600',
              fontSize: 22,
            }, styles.text]}>{weatherInfo.weather}</Text>
            <Text style={[{
              marginVertical: 4
            }, styles.text]}>{weatherInfo.city}</Text>
          </View>
        </View>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    position: 'relative',
    backgroundColor: '#eee',
    padding: 0,
    width: windowRectSize.width - 50,
    height: 400,
    minHeight: 300,
    margin: 20,
    borderRadius: 5,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: { width: 7, height: 9 },
    shadowOpacity: 0.25,
    shadowRadius: 40,
  },
  details: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingVertical: 16,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  temp: {
    fontSize: 60,
    lineHeight: 60,
    color: '#888'
  },
  tempSpan: {
    fontSize: 18,
    lineHeight: 30,
    verticalAlign: 'bottom',
    marginLeft: 5
  },
  rightText: {
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    textAlign: 'right',
    color: '#888',
    fontFamily: 'Lato, sans-serif',
  }
})