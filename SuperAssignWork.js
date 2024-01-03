import { StyleSheet, Text, View ,ScrollView,FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import SuperBooked from './SuperBooked';
import axios from 'axios';
import LottieView from 'lottie-react-native';
const SuperAssignWork = () => {

  const [bookings, setBookings] = useState([]);
  const[refreshing,setRefreshing]=useState(false);
  const[loader,setLoader]=useState(false);

  const fetchData = async () => {
    setLoader(true);
    let res = await axios.get("https://bullfrog-rich-recently.ngrok-free.app/supervisor/getBookings");
    let dt = await res.data;

    console.log(dt);

    setBookings(dt["bookings"]);
    setLoader(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  const handleRefresh=()=>{
    setRefreshing(true);
    fetchData();
    setRefreshing(false);
  }

  return (
    // <ScrollView contentContainerStyle={styles.contain}>
    <>
    <Text style={styles.headin}>Allot Work</Text>
     {loader?(
         <LottieView source={require('../welcomee.json')} autoPlay loop onError={console.error} style={{ height: 70,
          width: 70,
          alignSelf:'center',
          justifyContent:'center',
          marginTop:100,
           // Half of the element's width
           // Half of the element's height
        }} />
      ):(
      <FlatList showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contain}
            data={bookings}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              
                <SuperBooked
                bookingId = {item.bookingId}
                name = {item.name}
                date = {item.date}
                latitude = {item.latitude}
                longitude = {item.longitude}
                />
                
                )}
                refreshing={refreshing}
                onRefresh={handleRefresh}
                />
      )}
    {/* </ScrollView> */}
                </>
  )
}

export default SuperAssignWork

const styles = StyleSheet.create({
  contain:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    
  },
  headin:{
    color:'black',
    textAlign:'center',
    fontSize:25,
    marginTop:20,
  }
})