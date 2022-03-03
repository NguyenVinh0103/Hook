import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import State from './src/Screen/State/index.js';
import Effect from './src/Screen/Effect/index.js';

const App = () => {
  return (
    <View>
      <State/>
      <Effect/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})