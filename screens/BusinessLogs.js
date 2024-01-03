import { StyleSheet, Text, View , ScrollView,Dimensions} from 'react-native'
import React from 'react'
import LogContain from './LogContain'
// import { ScrollView } from 'react-native-gesture-handler'
const { width, height } = Dimensions.get('window');
import LottieView from 'lottie-react-native';
const BusinessLogs = () => {
  return (
    <View style={styles.container}>

        <View style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
        <LottieView source={require('../globe.json')} autoPlay loop onError={console.error} style={{height:80,width:80,marginTop:10}} />
        <Text style={styles.head}>Vouchers</Text>
        </View>

        <ScrollView contentContainerStyle={styles.outer}>
      <LogContain text="don bro" time="12.56"/>
      <LogContain text="master" time="12.56"/>
      <LogContain text="leo" time="12.56"/>
      <LogContain text="puli" time="12.56"/>
      <LogContain text="ajith kumar" time="12.56"/>
      <LogContain text="simbu" time="12.56"/>
        </ScrollView>
    </View>
  )
}

export default BusinessLogs;

const styles = StyleSheet.create({
    container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    outer:{
        width:width,
        height:height,
        justifyContent:'center',
        alignItems:'center',
        marginTop:-63,
    },
    head:{
        fontSize:25,
        color:'black',
        // marginTop:20,

    }
})