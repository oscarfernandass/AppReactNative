
import React, { useState, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  BackHandler,
} from 'react-native';
import 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import axios from 'axios';

import ModalView from './ModalView';

const { width, height } = Dimensions.get('window');

const BusinessHome = ({ route }) => {
  const navigation = useNavigation();
  const dame = route.params.name;

  const showToast1 = () => {
    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Coupon Created Successfully',
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 10,
      bottomOffset: 40,
    });
  };

  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [rewardName, setRewardName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [coins, setCoins] = useState('');
  const [uploaded, setUploaded] = useState(false);
  const [loader, setLoader] = useState(false);

  const ImagePicker = () => {
    let options = {
      storageOptions: {
        path: 'image',
      },
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('Image selection cancelled');
      } else if (response.error) {
        console.error('ImagePicker Error:', response.error);
      } else {
        setImage(response.assets[0]);
        setUploaded(true);
      }
    });
  };

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        // Disable back button press
        return true;
      };

      // Add a listener for the back button press
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      // Remove the listener when the screen loses focus or on component unmount
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

  const showWelcome = () => {
    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Welcome',
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 10,
      bottomOffset: 40,
    });
  };

  useEffect(() => {
    showWelcome();
  }, []);

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

  const showToast3 = () => {
    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Registration Success',
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 10,
      bottomOffset: 40,
    });
  };

  return (
    <>
      <TouchableOpacity
        style={styles.robot}
        onPress={() => {
          navigation.navigate('BusinessChatBot');
        }}
      >
        {/* Your robot image */}
      </TouchableOpacity>

      <ModalView
        style={styles.uploadbox}
        visible={visible}
        title={'Create Coupon'}
        onDismiss={() => {
          setVisible(false);
          setCoins('');
          setDescription('');
          setImage(null);
          setRewardName('');
          setUploaded(false);
        }}
        onSubmit={async () => {
          if (rewardName === '' || description === '' || coins === '') {
            setVisible(false);
            fillin();
          } else {
            setVisible(false);
            setLoader(true);

            // Create the reward data to send to the backend
            let data = {
              businessName: dame,
              name: rewardName,
              description: description,
              points: parseInt(coins),
            };

            try {
              // Send the reward data to the backend
              let res = await axios.post(
                'https://bullfrog-rich-recently.ngrok-free.app/rewards/add',
                data
              );

              let dt = await res.data;

              console.log(dt['rewardId']);

              await AsyncStorage.setItem('rewardId', dt['rewardId']);
            } catch (error) {
              console.error('Error creating reward:', error);
            }

            setLoader(false);
            // showToast1();
            setVisible1(true);
          }
        }}
        cancelable
      >
        <React.Fragment>
          <TextInput
            label="name"
            value={rewardName}
            style={styles.inputText}
            placeholder="Reward Name"
            placeholderTextColor="black"
            onChangeText={(text) => setRewardName(text)}
            mode="outlined"
          />
          <TextInput
            style={styles.inputText}
            value={description}
            placeholder="Enter Description"
            placeholderTextColor="black"
            multiline
            numberOfLines={4}
            onChangeText={(text) => setDescription(text)}
          />

          <TextInput
            style={styles.inputText}
            value={coins}
            placeholder="Enter Coin Price"
            placeholderTextColor="black"
            keyboardType="numeric"
            onChangeText={(text) => setCoins(text)}
          />
        </React.Fragment>
      </ModalView>

      <ModalView
        style={styles.uploadbox}
        visible={visible1}
        title={'Create Coupon'}
        onDismiss={() => {}}
        onSubmit={async () => {
          setVisible1(false);
          showToast1();

          if (image) {
            try {
              // Create form data to send image to the backend
              let form = new FormData();
              form.append('file', {
                name: image.fileName,
                type: image.type,
                uri:
                  Platform.OS === 'android'
                    ? image.uri
                    : image.uri.replace('file://', ''),
              });

              // Send image to the backend
              let res = await axios.post(
                `https://bullfrog-rich-recently.ngrok-free.app/rewards/addImage/${await AsyncStorage.getItem(
                  'rewardId'
                )}`,
                form,
                {
                  headers: { 'Content-Type': 'multipart/form-data' },
                }
              );

              let dt = await res.data;
              console.log(dt);
            } catch (error) {
              console.error('Error uploading image:', error);
            }
          }
        }}
      >
        <React.Fragment>
          <TouchableOpacity onPress={() => ImagePicker()} style={styles.button}>
            <Text style={styles.buttonText}>Upload Image</Text>
          </TouchableOpacity>
          {uploaded ? (
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image source={{ uri: image.uri }} style={styles.image} />
            </View>
          ) : null}
        </React.Fragment>
      </ModalView>



      <ScrollView contentContainerStyle={styles.outer}>


      {loader ? (
    <LottieView source={require('../welcomee.json')} autoPlay loop onError={console.error} style={{
      height: 70,
      width: 70,
      marginTop:10,
      // position: 'absolute',
      // top: '50%',
      // left: '50%',
      // marginLeft: -45,
      // marginTop: -45,
      padding:10,
    }} />
  ) : (
        <View style={styles.first}>
        <LottieView source={require('../tree.json')} autoPlay loop={false} speed={2.0}   onError={console.error} style={{height:200,width:200}} />
        <Text style={{color:'black', fontWeight:700,fontSize:20}}>Garbage Free Nation</Text>
        <TouchableOpacity style={styles.create} onPress={()=>{
          setVisible(true);
          }}>
          <Text style={styles.book}>Create Coupon</Text>
        </TouchableOpacity>
        <Text style={{color:'black', textAlign:'center',fontSize:15,}}>A garbage-free nation envisions a cleaner, healthier environment where waste is minimized and properly managed.</Text>
        </View>
  )}

        <View style={styles.second}>
        <Image source={require('../garbage.png')}  style={{height:180,width:180}} />
        <Text style={{color:'black', fontWeight:700,fontSize:20}}>Give Your Garbage</Text>
        <Text style={{color:'black', textAlign:'center',fontSize:15,}}>A garbage-free nation envisions a cleaner, healthier environment where waste is minimized and properly managed.</Text>
        </View>

        <View style={styles.third}>
        <Image source={require('../trash.png')}  style={{height:160,width:160}} />
        <Text style={{color:'black', fontWeight:700,fontSize:20}}>Garbage</Text>
        <Text style={{color:'black', textAlign:'center',fontSize:15,}}>A garbage-free nation envisions a cleaner, healthier environment where waste is minimized and properly managed.</Text>
        </View>

        <View style={styles.fourth}>
        <Image source={require('../cash.png')}  style={{height:160,width:160}} />
        <Text style={{color:'black', fontWeight:700,fontSize:20}}>Garbage</Text>
        <Text style={{color:'black', textAlign:'center',fontSize:15,}}>A garbage-free nation envisions a cleaner, healthier environment where waste is minimized and properly managed.</Text>
        </View>
        
      <Toast/>

      </ScrollView>
        
      </>
    );
}
export default BusinessHome;

const styles = StyleSheet.create({
    outer:{
        alignItems:'center',
        width:width,
    },
    first:{
      backgroundColor:'white',
      width:width,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      marginTop:5,
      gap:5,
    },
    second:{
      backgroundColor:'#f5fffa',
      width:width,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      marginTop:5,
    },
    third:{
      backgroundColor:'#fffff0',
      width:width,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      marginTop:5,
    },
    fourth:{
      backgroundColor:'#fff0f5',
      width:width,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      marginTop:5,
    },
    create:{
      display:'flex',
      backgroundColor:'black',
      // backgroundColor:'#408F45',
      borderRadius:25,
      // height:50,
      // position:'absolute',
      alignSelf:'center',
      justifyContent:'center',
      alignItems:'center',
      // top:540,
      
      
      // zIndex:1,
    },
    book:{
      fontSize:15,
      padding:15,
      color:'white',
    },
    inputText:{
      borderRadius:10,
      borderColor:'black',
      borderWidth:1.5,
      color:'black',
      marginTop:10,
    },
    pick:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      borderColor:'black',
      borderWidth:1.5,
      marginTop:5,
      borderRadius:10,
    },
    textArea: {
      borderColor:'black',
      color:'black',
      marginTop:5,
      borderWidth:1.5,
      borderRadius:10,
      height: 100, // Adjust the height as needed
      textAlignVertical: 'top', // This makes the text start from the top
      paddingTop: 10, // Adjust the padding as needed
    },
    regText: {
      color: 'black',
      fontSize: 30,
    },
    image: {
        width: 160,
        height: 150,
        margin: 5,
        borderRadius: 5,
      },
      button: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
        margin: 5,
        marginTop:10,
        paddingVertical:16,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign:'center',
      },
    robot:{
      height:50,
      width:50,
      zIndex:3,
      backgroundColor:'transparent',
      position:'absolute',
      bottom:"3%",
      right:"6.5%",
      // borderColor:'black',
      // borderWidth:2,
      // display:'flex',
      // justifyContent:'center',
      // alignItems:'center',

    },
    roboimg:{
      height:55,
      width:55,
      position:'absolute',
      zIndex:3,
      borderColor:'black',
      // borderWidth:2.5,
      // borderRadius:100,

    }


})