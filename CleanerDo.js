import { StyleSheet, Text, View,ScrollView,Dimensions,FlatList} from 'react-native'
import React,{useEffect,useState} from 'react'
import CleanerDoList from './CleanerDoList'
import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
const { width, height } = Dimensions.get('window');

const CleanerDo = () => {

    const [works, setWorks] = useState([]);

    const getData = async () => {
      let res = await axios.get(`https://bullfrog-rich-recently.ngrok-free.app/collector/getBookings/${await AsyncStorage.getItem("cleanerUserName")}`);
      let dt = await res.data;

      console.log(dt["bookings"]);
      setWorks(dt["bookings"]);
    }
    
    useEffect(() => {
      getData();
    }, []);

    const navigation=useNavigation();
  return (
    <View style={styles.container}>

        <View style={styles.inner}>
        <LottieView source={require('../work.json')} autoPlay loop onError={console.error} style={{height:90,width:70}} />
        <Text style={styles.text}>Today's Work</Text>
        </View>

        <FlatList showsVerticalScrollIndicator={false}
            style={styles.flat}
            data={works}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View>
                <CleanerDoList
                name={item.name}
                status={item.status}
                date={item.date}
                latitude={item.latitude}
                longitude={item.longitude}
                />
              </View>
            )}
            />


      
    </View>
  )
}

export default CleanerDo

const styles = StyleSheet.create({
    container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    scroll:{
      width:width,
      alignItems:'center',
    },
    text:{
        color:'black',
        marginTop:15,
        fontSize:20,
    },
    inner:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    }
})