import { View, Text, StyleSheet, Dimensions, TouchableOpacity,Linking , ActivityIndicator,TextInput} from 'react-native';
import React, { useState } from 'react';
const { width, height } = Dimensions.get('window');
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import LottieView from 'lottie-react-native';
import Toast from 'react-native-toast-message';
import ModalView from './ModalView';
import axios from 'axios';
  // App.propTypes = {
  //   someProp: StyleSheet.style,
  //   // other props
  // };
const CleanerQr=()=>{
  const[loading,setLoading]=useState(false);
  const[qrdata,setQrdata]=useState('');
  const[scanner,setScanner]=useState(false);
  const[visible,setVisible]=useState(false);
  const[amount,setAmount]=useState('');
  const showToast1 = () => {
    Toast.show({
      type: 'success',
      position: 'top',
      text1: `Added ${qrdata} Succefully`,
      // Optional, add more lines if needed
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 10,
      bottomOffset: 40,
      // backgroundColor: 'green', // Set your desired background color
    });
  };
  const openQr = () => {
    setScanner(true);
    // setLoading(false);
  };
  const closeQr=()=>{
    setScanner(false);
  }
  const openner = async (data) => {
    try {
      setQrdata(data['data']);
      console.log(qrdata);
      setVisible(true);
      // const url = data.data.trim(); // Extract the URL from the data property
      // if (Linking.canOpenURL(url)) {
      //   Linking.openURL(url);
      //   setLoading(false);
      // } else {
      //   alert("Invalid link");
      //   setLoading(false);
      // }
   

    } catch (error) {
      alert("Error: " + error.message);
      setLoading(false);
    }
  };
  

  return (
    <View style={styles.outer}>

<ModalView style={styles.uploadbox}
        visible={visible}
        name="Add Post"
        title={"Book Cleaner"}
        onDismiss={() => setVisible(false)}
        onSubmit={async () => {
          setVisible(false);
          setScanner(false);
          showToast1();
          setAmount('');
          setLoading(false);
          let res = await axios.post(`https://bullfrog-rich-recently.ngrok-free.app/assigncoins/${qrdata}/${amount}`);
          let dt = await res.data;
          console.log(dt);
        }}
        cancelable
        >

          <TextInput
            label="name"
            value={qrdata}
            style={styles.inputText}
            mode="outlined"
            />
           <TextInput
            style={styles.inputText}
            value={amount}
            placeholder="Enter Garbage Amount"
            placeholderTextColor="black"
            keyboardType='numeric'
            onChangeText={(text) => setAmount(text)}
            />
          

          </ModalView>
      <Toast/>
      {!scanner?(
        <View style={{display:'flex',justifyContent:'center',alignItems:'center',gap:15}}>
              <LottieView source={require('../scan.json')} autoPlay loop onError={console.error} style={{height:300,width:300}} />

            <Text style={styles.para}>Join the eco-conscious movement with our innovative waste disposal system. After responsibly submitting your waste, a quick scan of your unique QR code ensures transparent tracking and real-time updates on your environmental contributions. Embrace the convenience of technology while making a positive impact on the planet – it's recycling redefined, one scan at a time. Together, let's create a cleaner, greener future!</Text>
        <TouchableOpacity style={styles.buttone} onPress={openQr}>
        <Text style={styles.scanText}>Scan QR</Text>
      </TouchableOpacity>
      </View>
      )

:(
  <View style={styles.scannerContainer}>
  {loading ? <ActivityIndicator style={styles.loader} size="large" color="black" /> : null}
  <View style={styles.cam}>
  <QRCodeScanner
    flashMode={RNCamera.Constants.FlashMode.auto}
    onRead={(data)=>{
      setLoading(true);
      openner(data);
    }}
    cameraStyle={styles.cameraStyle}
    reactivate={true}
    reactivateTimeout={4000}
    bottomContent={
        <View style={{display:'flex',justifyContent:'center',alignItems:'center',width:width}}>
      <TouchableOpacity style={styles.button} onPress={closeQr}>
        <Text style={styles.scanText}>Close</Text>
      </TouchableOpacity>
      </View>
    }

  />
  </View>
</View>

      )}

    </View>
  )
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    zIndex:2,
  },
  button: {
    color:'white',
    backgroundColor: '#408F45',
    borderRadius: 20,
    marginLeft:40,
    marginTop:170,
    paddingHorizontal:20,
    paddingVertical:10,
    // Add padding to make the touchable area larger
},
buttone: {
    // position:'absolute',
    // alignSelf:'center',
    // bottom:0,
    backgroundColor: '#408F45',
    borderRadius: 20,
    // marginLeft:40,
    paddingHorizontal:20,
    paddingVertical:10,
    // marginTop:150,
    // padding: 10, // Add padding to make the touchable area larger
},
loader: {
    alignSelf:'center',
  },
  scanText: {
    fontSize: 30,
    color: 'white',
  },
  scannerContainer: {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  para:{
    color:'black',
    textAlign:'center',
    width:width-10,
    fontSize:15,

  },
  cameraStyle:{
    width:400,
    height:100,
  },
  inputText:{
    borderRadius:10,
    borderColor:'black',
    borderWidth:1.5,
    color:'black',
    marginTop:10,
  },
//   cam:{
//     display:'flex',
//     justifyContent:'center',
//     alignItems:'center',

//   }
});
export default CleanerQr;