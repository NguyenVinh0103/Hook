import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState , useEffect} from 'react'

// 1. useEffect (callback)
// - goi callback mỗi khi component re-render
// 2. useEffect (callback, [])
// - chi goi callback 1 lan sau khi component mount
// 3. useEffect (callback, dependencies)
// callback se dc goi lai. moi khi deps thay đổi
// ----------------------------------------------------------------
// 1. callback luon dc goi. sau khi component mount

const CreateAccount = () => {
  const [title, setTitle] = useState('');
  
  useEffect(() =>{
    console.log('hihi')
  })
  return (
    <SafeAreaView style ={styles.content}>
      <View style={styles.container}>
        <View>
          <TextInput style={styles.txt}
              value = {title}
              onChange={e => setTitle(e.target.value)}
            />
        </View>

        <View style= {styles.txtInput}>
          <TouchableOpacity style={styles.btn}>
            <Text style = {{color : '#fff'}}> Sign In</Text>
          </TouchableOpacity> 
        </View>
       
      </View>
    </SafeAreaView>
  )
}

export default CreateAccount

const styles = StyleSheet.create({
  content: {   
    justifyContent : 'center',
    alignItems : 'center',
  },
  container: {
    height:' 100%',
    justifyContent : 'center',
    alignItems : 'center',
    flexDirection:'row'
  },
  btn : {
    backgroundColor:'green',
    width: 80,
    height: 40,
    backgroundColor:'#000',
    marginLeft: 20,
    justifyContent: 'center',
    alignItems:'center'
  },
  txt: {
    width: 200,
    height: 50,
    borderBottomColor: '#000',
    borderBottomWidth: 2
  },
})