import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CleanerInformation = ({route}) => {
  const name=route.params.Game;
  return (
    <View style={styles.container}>
      <Text style={styles.informText}>{name} CleanerInformation</Text>
    </View>
  )
}

export default CleanerInformation;

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