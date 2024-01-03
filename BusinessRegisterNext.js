import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, KeyboardAvoidingView, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import user from '../business.png';
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
  const [businessName, setBusinessName] = useState('');
  const [address, setAddress] = useState('');
  const[description,setDescription]=useState('');
  const[loader,setLoader]=useState(false);

  const handleTypeChange = (selectedType) => {
    setType(selectedType);
  };

  const fillin = () => {
    Toast.show({
      type: 'error',
      position: 'top',
      text1: 'Please Fill All Attributes',
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 10,
      bottomOffset: 40,
    });
  };

  const handleSubmit = async () => {

    if(type==="" || mobile==="" || email==="" || businessName==="" || address==="" || description===""){
      fillin();
    }
    else{
    setLoader(true);
    let data = {
      "username" : route.params.username,
      "password" : route.params.password,
      "businessName" : businessName,
      "businessType" : type,
      "address" : address,
      "email" : email,
      "mobile" : mobile,
      "businessDescription" : description
    }


    let res = await axios.post("https://bullfrog-rich-recently.ngrok-free.app/auth/business/completeProfile", data);
    let dt = await res.data;

    console.log(dt["status"]);
    if(dt["status"]==="Profile Completed"){
      navigation.navigate('BusinessRegisterNextFinal', data);
      setLoader(false);
    }
    // LOG User not found
  //  LOG  Profile Completed
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
            value={businessName}
            placeholder="Enter your Full Name"
            placeholderTextColor="black"
            onChangeText={(text) => setBusinessName(text)}
            />
      <View style={styles.input}>

      <Picker
        selectedValue={type}
        style={styles.picker}
        
        onValueChange={(itemValue) => handleTypeChange(itemValue)}
      >
        <Picker.Item label="Select Business Type" value="" />
        <Picker.Item label="Supervisor" value="Supervisor" />
        <Picker.Item label="Worker" value="Worker" />
      </Picker>
        </View>

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
        style={[styles.input, styles.textArea]}
        value={address}
        placeholder="Enter your Address"
        placeholderTextColor="black"
        multiline
        numberOfLines={4} // You can adjust the number of lines as needed
        onChangeText={(text) => setAddress(text)}
        />
        <TextInput
        style={[styles.input, styles.textArea]}
        value={description}
        placeholder="Enter Business Description"
        placeholderTextColor="black"
        multiline
        numberOfLines={4} // You can adjust the number of lines as needed
        onChangeText={(text) => setDescription(text)}
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
    height: 45,
    width: '80%',
    borderRadius: 8,
    paddingHorizontal: 15,
    color: 'black',
    borderColor: 'black',
    borderWidth: 2,
    fontSize: 15,
    marginVertical: 10,
    justifyContent:'center',
    alignItems:'center',
    marginTop:-7,
  },
  regButton: {
    backgroundColor: '#408F45',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    width: '90%',
    marginTop: -5,
    // marginBottom:10,
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
    fontSize: 25,
    marginTop:-5,
    marginBottom:9,
  },
  textArea: {
    height: 100, // Adjust the height as needed
    textAlignVertical: 'top', // This makes the text start from the top
    paddingTop: 10, // Adjust the padding as needed
  }
});

export default UserRegister;
