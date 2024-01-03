import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, FlatList } from 'react-native';
import together from '../together.png';
import CommCard from './CommCard';
import axios from 'axios';
const { width } = Dimensions.get('window');

const UserComm = () => {
  const [allComms, setAllComms] = useState([]);

  const logs = [
    { name: 'oscar', location: 'Location 1' },
    { name: 'hello', location: 'Location 2'},
    { name: 'hello', location: 'Location 2'},
    { name: 'hello', location: 'Location 2'},
    { name: 'hello', location: 'Location 2'},
    { name: 'hello', location: 'Location 2'},
    { name: 'hello', location: 'Location 2'},
    { name: 'hello', location: 'Location 2'},
    { name: 'hello', location: 'Location 2'},
    { name: 'hello', location: 'Location 2'},
    // Add more log items as needed
  ];
  const[refreshing,setRefreshing]=useState(false);

  const fetchData = async () => {
    let res = await axios.get("https://bullfrog-rich-recently.ngrok-free.app/community/getAllCommunities");
    let dt = await res.data;

    console.log(dt["communities"][3]["posts"]);
    setAllComms(dt["communities"]);
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
    <View style={styles.container}>
      <View style={styles.comp1}>
        <Image source={together} style={styles.img} />
        <Text style={styles.head}>Lets Come Together</Text>
      </View>

      <FlatList
  showsVerticalScrollIndicator={false} // Uncomment this line
  contentContainerStyle={styles.flat}
  data={allComms}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => (
    <CommCard name={item.name} location={item.location} contactPerson={item.contactPerson} contactNumber={item.contactNumber} posts={item.posts} />
  )}
  refreshing={refreshing}
  onRefresh={handleRefresh}
/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    gap: 10,
  },
  comp1: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8FF',
    width: width,
    height: 200,
  },
  img: {
    height: 100,
    width: 100,
  },
  head: {
    color: 'black',
    fontSize: 30,
  },
  flat: {
    alignItems:'center',
    gap:10,
  },
});

export default UserComm;
