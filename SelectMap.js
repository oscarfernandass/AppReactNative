import { StyleSheet, TouchableOpacity, ScrollTouchableOpacity, Dimensions,ScrollView,Image,Text ,View} from 'react-native';
import React from 'react';

const { height } = Dimensions.get('window');
import greenLand from '../greenLand.jpg';
import greenPeople from '../greenPeople.jpg';
import Konari from '../Konari.jpg';
import trashBox from '../trashBox.jpg';
import { useNavigation } from '@react-navigation/native';

const SelectMap = () => {
    const navigation=useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <TouchableOpacity style={styles.Mapper} onPress={()=>navigation.navigate('Map1')}>

        <View style={styles.imgView}>
        <Image style={styles.img} source={greenLand}/>
        </View>

        <View style={styles.textView}>
        <Text style={styles.text}>Green Land Kochi</Text>
        </View>

      </TouchableOpacity>

      <TouchableOpacity style={styles.Mapper} onPress={()=>navigation.navigate('Map2')}>

        <View style={styles.textView}>
        <Text style={styles.text}>Green People Kochi</Text>
        </View>

        <View style={styles.imgView}>
        <Image style={styles.img} source={greenPeople}/>
        </View>

      </TouchableOpacity>

      <TouchableOpacity style={styles.Mapper} onPress={()=>navigation.navigate('Map3')}>

        <View style={styles.imgView}>
        <Image style={styles.img} source={Konari}/>
        </View>

        <View style={styles.textView}>
        <Text style={styles.text}>Konari Waste Center</Text>
        </View>

      </TouchableOpacity>

      <TouchableOpacity style={styles.Mapper} onPress={()=>navigation.navigate('Map4')}>

        <View style={styles.textView}>
        <Text style={styles.text}>Trash Box Kochi</Text>
        </View>

        <View style={styles.imgView}>
        <Image style={styles.img} source={trashBox}/>
        </View>

      </TouchableOpacity>

     

    </ScrollView>
  );
};

export default SelectMap;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f3f4',
    paddingVertical: 15, 
    gap:10,
    // Adjust the padding as needed
  },
  Mapper: {
    backgroundColor: '#408F45',
    height: 120, // Adjust the height as needed
    width: 300,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    gap:5,
  },
  img:{
    width:150,
    height:120,
    borderRadius:10,
    // marginRight:140,
  },
  text:{
    color:'white',
    fontSize:24,
    textAlign:'center',
  },
  imgView:{
    width:150,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  textView:{
    width:150,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
  }
});