import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

// const orders = [100, 200, 300]
const gifts = [
  'CPU I9',
  'Ram 8GB',
  'RGB Keyboard',
]

const State = () => {
  
  // const [gift, setGift] = useState(() => {
  //   const total = orders.reduce((total, current) => total + current)
  //   return total
  // });

  // const handleIncrease = () => {
  //   setGift(gift + 1);
  // };

  const [gift,setGift] = useState()

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length)
    setGift(gifts[index]);
    console.log(gifts[index])
  }

  return (
    <SafeAreaView style={styles.Container}>
      <View styles={styles.container}>
        <Text style={styles.txt}>{gift || 'chua co phan thuong'}</Text>
      </View>
      <View >
        <TouchableOpacity onPress= {randomGift} style={styles.btn}>
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
