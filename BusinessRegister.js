import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, KeyboardAvoidingView, Image } from 'react-native';
import user from '../business.png';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import LottieView from 'lottie-react-native';
import Toast from 'react-native-toast-message';
const { width, height } = Dimensions.get('window');

const BusinessRegister= () => {
  const navigation=useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpass, setConfirmpass] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const[loader,setLoader]=useState(false);
  
  useEffect(() => {
    function check(a, b) {
      if (a !== '' && b !== '') {
        return a === b;
      }
      return false;
    }

    const match = check(password, confirmpass);
    setPasswordsMatch(match);
  }, [password, confirmpass]);

  const fillin = () => {
    Toast.show({
      type: 'error',
      position: 'top',
      text1: 'Please Fill All Attributes',
      // Optional, add more lines if needed
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 10,
      bottomOffset: 40,
      // backgroundColor: 'green', // Set your desired background color
    });
  };
  const showToast2 = () => {
    Toast.show({
      type: 'error',
      position: 'top',
      text1: 'Username already exists',
      // Optional, add more lines if needed
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 10,
      bottomOffset: 40,
      // backgroundColor: 'green', // Set your desired background color
    });
  };
  const showToast3 = () => {
    Toast.show({
      type: 'error',
      position: 'top',
      text1: 'Password must contain an Upper Case , Lower Case and number',
      // Optional, add more lines if needed
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 10,
      bottomOffset: 40,
      // backgroundColor: 'green', // Set your desired background color
    });
  };

  const handleSubmit = async() => {
    if(username==="" || password==="" || confirmpass===""){
      fillin();
    }
    else{
      setLoader(true);

    
    let data = {
      "username" : username,
      "password" : password
    }

    console.log(data);

    let res = await axios.post("https://bullfrog-rich-recently.ngrok-free.app/auth/business/signup", data);
    let dt = await res.data;

    console.log(dt["status"]);
    if(dt["status"]==="Username already exists"){
      setLoader(false);
      showToast2();
    }
    else if(dt["status"]==="Password does not meet requirements"){
      setLoader(false);
      showToast3();
    }
    else{
      navigation.navigate('BusinessRegisterNext', data);
      setLoader(false);
    }
    

  }
}

  return (
    <>
      {loader?(
        <LottieView source={require('../welcomee.json')} autoPlay loop onError={console.error} style={{ height: 90,
          width: 90,
          position: 'absolute',
          top: '50%',
          left: '50%',
          marginLeft: -45, // Half of the element's width
          marginTop: -45, // Half of the element's height
        }} />
        ):(
          <KeyboardAvoidingView style={styles.container}>
      <Toast/>
      <View style={styles.content}>
        <Image source={user} style={styles.userImg} />
        <Text style={styles.regText}>Registration</Text>
      </View>

      <TextInput
        style={styles.input}
        value={username}
        placeholder="Enter your UserName"
        placeholderTextColor="black"
        onChangeText={(text) => setUsername(text)}
        />
      <TextInput
        style={styles.input}
        value={password}
        placeholder="Enter your password"
        placeholderTextColor="black"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        value={confirmpass}
        placeholder="Confirm password"
        placeholderTextColor="black"
        secureTextEntry
        onChangeText={(text) => setConfirmpass(text)}
        />
      {passwordsMatch !== null && (
        <Text style={{ color: passwordsMatch ? 'green' : 'red' }}>
          {passwordsMatch ? 'Password Matched' : 'Password Mismatch'}
        </Text>
      )}

      <TouchableOpacity style={styles.regButton} onPress={handleSubmit}>
        <Text style={styles.regButtonText}>Register</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
      )}
</>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height,
    width: width,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  content: {
    alignItems: 'center',
  },
  input: {
    height: 60,
    width: '90%',
    borderRadius: 8,
    paddingHorizontal: 15,
    color: 'black',
    borderColor: 'black',
    borderWidth: 2,
    fontSize: 17,
    marginVertical: 10,
  },
  regButton: {
    backgroundColor: '#408F45',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    width: '90%',
    marginTop: 10,
  },
  regButtonText: {
    color: 'white',
    fontSize: 25,
  },
  userImg: {
    height: 150,
    width: 150,
  },
  regText: {
    color: 'black',
    fontSize: 30,
  },
});

export default BusinessRegister;
