import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import State from './src/Screen/State/index.js';
import CreateAccount from './src/Screen/CreateAccount/index.js';
// import Login from './src/Screen/Login/index.js';

const App = () => {
  return (
    <View>
      <CreateAccount/>
      {/* <Login/>
      <State/> */}
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({})