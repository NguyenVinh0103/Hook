import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

const LoginInput = () => {
  const [name, setName] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.txtInput}
          onChangText={e => setName(e.target.value)}
          value={name}
        />
        <TouchableOpacity
          onPress={e => setName('Nguyen Quang Vinh')}
          style={styles.btn}
        />
        <Text style={styles.txtButton}> Change</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtInput: {
    width: 100,
    height: 50,
  },
  btn: {
    backgroundColor: '#ff1493',
  },
  txtButton: {
    textAlign: 'center',
  },
});
