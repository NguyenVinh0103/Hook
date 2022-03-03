import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const State = () => {
  const [counter, setCounter] = useState(1);
  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View styles={styles.container}>
        <Text style={styles.txt}>{counter}</Text>
      </View>
      <View >
        <TouchableOpacity onPress={handleIncrease} style={styles.btn}>
          <Text style={styles.txtBtn}>Increase</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default State;

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    justifyContent:'center',
    alignItems:'center'
  },
  txt: {
    color: 'black',
    textAlign: 'center',
    fontSize: 50
  },
  btn: {
    backgroundColor: '#ff1493',
    width: 100,
    height: 40,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems:'center',
  },
  txtBtn:{
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
