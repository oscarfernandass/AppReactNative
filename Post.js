import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Post = (props) => {
  return (
    <TouchableOpacity style={styles.contain}>
        <Text style={{fontSize:23,color:'black'}}>Posts</Text>
        <Text style={styles.head}>Title</Text>
        <Text style={styles.text}>{props.title}</Text>
        <Text style={styles.head}>Description</Text>
        <Text style={styles.texti}>{props.description}</Text>
    </TouchableOpacity>
  )
}

export default Post

const styles = StyleSheet.create({
    contain:{
        marginTop:15,
        backgroundColor:'green',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:350,
        borderRadius:10,
    },
    head:{
        color:'white',
        fontSize:22,
        fontWeight:'800',
    },
    text:{
        fontSize:22,
        color:'white',
    },
    texti:{
        padding:10,
    }
})