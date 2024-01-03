import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Schedule = (props) => {
  return (
    <TouchableOpacity style={styles.contain}>
        <Text style={{fontSize:23,color:'black'}}>Schedule</Text>
        <Text style={styles.head}>Location</Text>
        <Text style={styles.text}>{props.location}</Text>
        <Text style={styles.head}>Employee Id</Text>
        <Text style={styles.text}>{props.employeeId}</Text>
        <Text style={styles.head}>Date</Text>
        <Text style={styles.text}>{props.date}</Text>
    </TouchableOpacity>
  )
}

export default Schedule

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
    }
})