import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('window');
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const Start = () => {

  const navigation = useNavigation();
  
  return (
    <View style={styles.outer}>
      <Text style={{fontFamily:'cursive',  fontSize: 60,color:'#408F45',fontWeight:'200' }}>Green Voucher</Text>
      <LottieView
        source={require('../started.json')}
        autoPlay
        loop
        style={styles.lottieView}
      />
      
      <TouchableOpacity style={styles.start} onPress={() => navigation.navigate('Selection')}>
        <LinearGradient
          colors={['#408F45', '#408F45']}
          style={styles.gradientContainer}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <Text style={styles.startText}>Getting Started</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

export default Start;

const styles = StyleSheet.create({
  outer: {
    height: height,
    width: width,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  lottieView: {
    height: 400, // Adjust the height to your preference
    width: 500,
     
     // Adjust the width to your preference
  },
  start: {
    marginTop: 50,
    width: 250,
    marginTop: -20,
  },
  startText: {
    padding: 15,
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
  },
  gradientContainer: {
    borderRadius: 15,
  },
});
