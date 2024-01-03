import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, KeyboardAvoidingView, Image,ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import user from '../business.png';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');
import {launchCamera,launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import LottieView from 'lottie-react-native';
import Toast from 'react-native-toast-message';
// import { ScrollView } from 'react-native-gesture-handler';
const BusinessRegisterNextFinal = ({route}) => {
    const navigation=useNavigation();
    // const [type, setType] = useState('');
    // const [mobile, setMobile] = useState('');
    // const [email, setEmail] = useState('');
    // const [businessName, setBusinessName] = useState('');
    const [images, setImages] = useState('');
    const [loader,setLoader]=useState(false);
    

    const ImagePicker=()=>{

        let options={
            storageOptions:{
                path:'image',
            },
        };
        launchImageLibrary(options, response=>{
            setImages(response.assets[0].uri);
        });
    }
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
      if(images===""){
        fillin();
      }
      else{

      setLoader(true);
      let form = new FormData();

      form.append('file', {
        uri : images,
        name: route.params.username + ".jpeg",
        type: "image/jpeg"
      });

      form.append("username", route.params.username);

      let res = await axios.post("https://bullfrog-rich-recently.ngrok-free.app/auth/business/upload", form , {
        headers : {
          'Content-Type' : 'multipart/form-data',
        }
      });
      let dt = await res.data;
  
      console.log(dt["status"]);
      navigation.navigate('BusinessLogin',{showToast1: true});
      setLoader(false);
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
      {/* <ScrollView> */}

      <View style={styles.content}>
        <Image source={user} style={styles.userImg} />
        <Text style={styles.regText}>Registration</Text>
      </View>

        <TouchableOpacity onPress={()=>ImagePicker()} style={styles.button}>
        <Text style={styles.buttonText}>Upload Image</Text>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        {/* {images.map((image, index) => ( */}
            <Image  source={{uri:images}} style={styles.image} />
        {/* ))} */}
      </View>

      <TouchableOpacity style={styles.regButton} onPress={handleSubmit}>
        <Text style={styles.regButtonText}>Register</Text>
      </TouchableOpacity>
          {/* </ScrollView> */}
    </KeyboardAvoidingView>
      )}
      </>
  );
};
export default BusinessRegisterNextFinal;

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
    height: 55,
    width: '80%',
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
  textArea: {
    height: 100, // Adjust the height as needed
    textAlignVertical: 'top', // This makes the text start from the top
    paddingTop: 10, // Adjust the padding as needed
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign:'center',
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  image: {
    width: 160,
    height: 150,
    margin: 5,
    borderRadius: 5,
  },
});

