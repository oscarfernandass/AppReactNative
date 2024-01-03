import { StyleSheet, Text, View , TouchableOpacity,Image} from 'react-native'
import React from 'react'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ImageContain = (props) => {
  const handleClick = async () => {
    props.handles();
    let res = await axios.post(`https://bullfrog-rich-recently.ngrok-free.app/reducecoins/${await AsyncStorage.getItem("userUserName")}/${props.points}`)
    let dt = await res.data;

    if(dt["status"] == "Insufficient coins") {
      alert(dt["status"]);
    }


  }
  return (
    <View>
      <TouchableOpacity style={styles.Mapper}>

<View style={styles.imgView}>
  <Image style={styles.img} source={{uri : `data:image/png;base64,${props.image}`}} />
</View>

<View style={styles.textView}>
  <Text style={styles.head}>Business Name</Text>
  <Text style={styles.text}>{props.businessName}</Text>
  <Text style={styles.head}>Reward Name</Text>
  <Text style={styles.text}>{props.name}</Text>
  <Text style={styles.head}>Reward Description</Text>
  <Text style={styles.text}>{props.description}</Text>
  <Text style={styles.head}>Points to Redeem</Text>
  <Text style={styles.text}>{props.points}</Text>
  <TouchableOpacity style={styles.redeem} onPress={handleClick}>
    <Text style={styles.red}>Redeem</Text>
  </TouchableOpacity>
</View>

</TouchableOpacity>
    </View>
  )
}

export default ImageContain

const styles = StyleSheet.create({
    Mapper: {
        backgroundColor: 'orange',
        height: 250, // Adjust the height as needed
        width: 300,
        borderRadius: 10,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        gap:5,
      },
      img:{
        width:100,
        height:120,
        borderRadius:10,
        marginLeft:20,
      },
      text:{
        color:'black',
        fontSize:15,
        textAlign:'center',
      },
      head:{
        color:'black',
        fontSize:15,
        textAlign:'center',
        fontWeight: '800',
      },
      imgView:{
        width:100,
        display:'flex',
        justifyContent:'left',
        alignItems:'left',
      },
      textView:{
        width:200,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
      },
      redeem:{
        backgroundColor:'black',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,

      },
      red:{
        color:'white',
        padding:10,
      }

})