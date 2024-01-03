import { TouchableOpacity, Text, Easing } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

const Stack = createNativeStackNavigator();
import BusinessLogin from './screens/BusinessLogin';
import BusinessRegister from './screens/BusinessRegister';
import BusinessRegisterNext from './screens/BusinessRegisterNext';
import BusinessRegisterNextFinal from './screens/BusinessRegisterNextFinal';
import CleanerLogin from './screens/CleanerLogin';
import CleanerRegister from './screens/CleanerRegister';
import Selection from './screens/Selection';
import Start from './screens/Start';
import UserLogin from './screens/UserLogin';
import UserRegister from './screens/UserRegister';
import UserMain from './screens/UserMain';
import UserRegisterNext from './screens/UserRegisterNext';
import CleanerRegisterNext from './screens/CleanerRegisterNext';
import CleanerMain from './screens/CleanerMain';
import BusinessMain from './screens/BusinessMain';
import SuperMain from './screens/SuperMain';

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={Start}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Selection"
          component={Selection}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="UserLogin"
          component={UserLogin}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CleanerLogin"
          component={CleanerLogin}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BusinessLogin"
          component={BusinessLogin}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="UserMain"
          component={UserMain}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="UserRegister"
          component={UserRegister}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="UserRegisterNext"
          component={UserRegisterNext}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CleanerRegister"
          component={CleanerRegister}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BusinessRegister"
          component={BusinessRegister}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BusinessRegisterNext"
          component={BusinessRegisterNext}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BusinessRegisterNextFinal"
          component={BusinessRegisterNextFinal}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BusinessMain"
          component={BusinessMain}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CleanerRegisterNext"
          component={CleanerRegisterNext}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CleanerMain"
          component={CleanerMain}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SuperMain"
          component={SuperMain}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;



// import { StyleSheet, TouchableOpacity, ScrollTouchableOpacity, Dimensions,ScrollView,Image,Text ,View} from 'react-native';
// import React from 'react';

// const { height } = Dimensions.get('window');
// import greenLand from './greenLand.jpg';
// import greenPeople from './greenPeople.jpg';
// import Konari from './Konari.jpg';
// import trashBox from './trashBox.jpg';

// const App = () => {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
      
//       <TouchableOpacity style={styles.Mapper}>

//         <View style={styles.imgView}>
//         <Image style={styles.img} source={greenLand}/>
//         </View>

//         <View style={styles.textView}>
//         <Text style={styles.text}>Green Land Kochi</Text>
//         </View>

//       </TouchableOpacity>

//       <TouchableOpacity style={styles.Mapper}>

//         <View style={styles.textView}>
//         <Text style={styles.text}>Green People Kochi</Text>
//         </View>

//         <View style={styles.imgView}>
//         <Image style={styles.img} source={greenPeople}/>
//         </View>

//       </TouchableOpacity>

//       <TouchableOpacity style={styles.Mapper}>

//         <View style={styles.imgView}>
//         <Image style={styles.img} source={Konari}/>
//         </View>

//         <View style={styles.textView}>
//         <Text style={styles.text}>Konari Waste Center</Text>
//         </View>

//       </TouchableOpacity>

//       <TouchableOpacity style={styles.Mapper}>

//         <View style={styles.textView}>
//         <Text style={styles.text}>Trash Box Kochi</Text>
//         </View>

//         <View style={styles.imgView}>
//         <Image style={styles.img} source={trashBox}/>
//         </View>

//       </TouchableOpacity>

     

//     </ScrollView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     paddingVertical: 15, 
//     gap:10,
//     // Adjust the padding as needed
//   },
//   Mapper: {
//     backgroundColor: 'orange',
//     height: 120, // Adjust the height as needed
//     width: 300,
//     borderRadius: 10,
//     marginBottom: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection:'row',
//     gap:5,
//   },
//   img:{
//     width:150,
//     height:120,
//     borderRadius:10,
//     // marginRight:140,
//   },
//   text:{
//     color:'black',
//     fontSize:24,
//     textAlign:'center',
//   },
//   imgView:{
//     width:150,
//     display:'flex',
//     justifyContent:'center',
//     alignItems:'center',
//   },
//   textView:{
//     width:150,
//     display:'flex',
//     justifyContent:'center',
//     alignItems:'center',
//     textAlign:'center',
//   }
// });
