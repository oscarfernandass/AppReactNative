import { StyleSheet, Text, View , TouchableOpacity,Image} from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
const LogContain = (props) => {
  return (
    <>
      <TouchableOpacity style={styles.Mapper}>
{/* <LottieView source={require('../cleaner.json')} autoPlay loop onError={console.error} style={{height:100,width:120,marginTop:10}} /> */}

<View style={styles.first}>
  <Text>Date</Text>
  <Text style={styles.text}>{props.date}</Text>
</View>

<View style={styles.textView}>

  <View style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'black',height:70,width:120,borderRadius:10}}>
    <Text>Location</Text>
  <Text style={styles.text}>{props.location}</Text>
  </View>

  <View style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'black',height:70,width:120,borderRadius:10}}>
    <Text>Amount:</Text>
  <Text style={styles.text}>{props.amount}</Text>
  </View>
</View>

</TouchableOpacity>
</>
  )
}

export default LogContain

const styles = StyleSheet.create({
    Mapper: {
        backgroundColor: '#408F45',
        height: 140, // Adjust the height as needed
        width: 300,
        borderRadius: 10,
        marginTop:10,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column',
        borderColor:'black',
        borderWidth:0.4,
        gap:5,
        // flexWrap:'wrap',
        // gap:5,

      },
      text:{
        color:'black',
        fontSize:17,
        // textAlign:'center',
        color:'white',
      },
      imgView:{
        width:120,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:25,
        // marginRight:-10,
    },
    textView:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        gap:40,
    },
    first:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
    }
    
})