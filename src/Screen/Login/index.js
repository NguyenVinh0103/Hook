import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

const Login = () => {
  const [name, setName] = useState('');
  console.log(name);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.txtInput}
          onChangeText={e => (e.target.value)}
          value={name}
        />
        <View style = {styles.btn}>
          <TouchableOpacity
            onPress={e => setName('Nguyen Quang Vinh')}
          />
          <Text style={styles.txtButton}> Change</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  txtInput: {
    backgroundColor: '#fff',
    width: 250,
    height: 50,
    borderWidth: 1
  },
  btn:{
    backgroundColor: '#ff1493',
    marginLeft: 5,
    height:40,
    width: 80,
    justifyContent: 'center',
  },
  txtButton: {
    textAlign: 'center',
    color: '#000', 
  },
});
