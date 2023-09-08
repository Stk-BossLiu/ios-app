import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import Weather from './components/weather';


export const windowRectSize = Dimensions.get('window');

export const designRectSize = {
  width: 414,
  height: 896
}

const gradientColors: string[] = ['#dff9fb', '#c7ecee', '#95afc0']


export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0.3, y: 0.4 }}
        end={{ x: 0.7, y: 0.8 }}
        style={[styles.gradientLayer, styles.bg]}
      >
      </LinearGradient>
      <Weather />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientLayer: {
    ...StyleSheet.absoluteFillObject,
  },
  bg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: windowRectSize.width,
    height: windowRectSize.width / designRectSize.width * designRectSize.height + 20,
  }
});


