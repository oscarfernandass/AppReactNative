import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CommCard = (props) => {
    const navigation=useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={()=>{
        navigation.navigate('OriginalComm',{name:props.name,location:props.location, posts:props.posts});
    }}>
        <Text style={styles.head}>Name:</Text>
        <Text style={styles.text}>{props.name}</Text>
        <Text style={styles.head}>Location</Text>
        <Text style={styles.text}>{props.location}</Text>
        {props.posts && props.posts.map((item) => {
            <Text style={styles.text}>{item["type"]}</Text>
        })}
    </TouchableOpacity>
  )
}

export default CommCard

const styles = StyleSheet.create({
    container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'green',
        height:130,
        width:280,
        borderRadius:10,
    },
    head:{
        fontSize:20,
        fontWeight:'800',
        color:'white',
    },
    text:{
        color:'white',
        fontSize:20,
    }

})