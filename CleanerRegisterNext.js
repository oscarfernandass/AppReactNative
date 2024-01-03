import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, KeyboardAvoidingView, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import user from '../cleaner.png';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');
import axios from 'axios';
import LottieView from 'lottie-react-native';
import Toast from 'react-native-toast-message';
const UserRegister = ({route}) => {
  const navigation=useNavigation();
  const [type, setType] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [full_name, setFullName] = useState('');
  const[loader,setLoader]=useState(false);

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

  const handleSubmit = async () => {
    if(type==="" || mobile==="" || email==="" || full_name===""){
      fillin();
    }
    else{

    setLoader(true);

    let data = {
      "employeeId" : route.params.employeeId,
      "password" : route.params.password,
      "mobile" : mobile,
      "email" : email,
      "full_name" : full_name,
      "type" : type 
    }

    console.log(data);

    let res = await axios.post("https://bullfrog-rich-recently.ngrok-free.app/auth/worker/completeProfile", data);
    let dt = await res.data;

    console.log(dt["status"]);

    if(dt["status"]==="Profile Completed"){
      navigation.navigate('CleanerLogin',{showToast1: true});
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
        value={type}
        placeholder="Enter your Full Name"
        placeholderTextColor="black"
        onChangeText={(text) => setType(text)}
        />

      <TextInput
        style={styles.input}
        value={mobile}
        placeholder="Enter your Mobile Number"
        placeholderTextColor="black"
        keyboardType="numeric"
        onChangeText={(text) => setMobile(text)}
        />
      <TextInput
        style={styles.input}
        value={email}
        placeholder="Enter your Email (Optional)"
        placeholderTextColor="black"
        onChangeText={(text) => setEmail(text)}
        />
      <TextInput
        style={styles.input}
        value={full_name}
        placeholder="Enter your Full Name"
        placeholderTextColor="black"
        onChangeText={(text) => setFullName(text)}
        />

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
  picker: {
    height: 60,
    width: '90%',
    borderRadius: 8,
    color: 'black',
    borderColor: 'black',
    borderWidth: 2,
    fontSize: 17,
    marginRight:50,
    marginVertical: 10,
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
    justifyContent:'center',
    alignItems:'center',
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

export default UserRegister;
