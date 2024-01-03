import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SuperInformation = ({route}) => {
  const name=route.params.Game;
  return (
    <View style={styles.container}>
      <Text style={styles.informText}>{name} Super Information</Text>
    </View>
  )
}

export default SuperInformation;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    informText:{
        color:'black',
    }
})