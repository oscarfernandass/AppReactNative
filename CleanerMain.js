import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import CleanerHomer from './CleanerHomer.js';
// import UserMap from './UserMap.js';
import CleanerLogs from './CleanerLogs.js';
import CleanerDo from './CleanerDo.js';
import UserReward from './UserReward.js';
import CleanerQr from './CleanerQr.js';
import UserComm from './UserComm.js';
import group from '../group.png';
import CleanerDoMain from './CleanerDoMain.js';
import { Dimensions,Image ,TouchableOpacity,Alert} from 'react-native';
import homeIcon from '../homeIcon.png';
import mapIcon from '../mapIcon.png';
import rewardIcon from '../rewardIcon.png';
import qrIcon from '../qrIcon.png';
import profileIcon from '../profileIcon.png';
import logger from '../logger.png';
import log from '../log.png';
import toclean from '../toclean.png';
import cleanto from '../cleanto.png'
const { width, height } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserCommMain from './UserCommMain.js';
const Tab = createBottomTabNavigator();
const CleanerMain = ({route}) => {
  const navigate=useNavigation();
  const bot=route?.params?.employeeId; 
  const name ="Hi " +bot; 
  console.log(bot)
  return (
      <Tab.Navigator>

        <Tab.Screen
          name={name}
          component={CleanerHomer}
          initialParams={{ Name: bot }}
          options={({ navigation }) => ({
            tabBarIcon: ({ focused, color, size }) => (
              <Image
              source={focused ? homeIcon : homeIcon}
              style={{ width: size, height: size, tintColor: color }}
              />
              ),
              headerRight: () => (
                <TouchableOpacity
                  style={{ marginRight: 16 }}
                  onPress={() =>{
                    Alert.alert(
                        'Logout',
                        'Do you want to logout?',
                        [
                          {
                            text: 'Cancel',
                            style: 'cancel',
                          },
                          {
                            text: 'Logout',
                            onPress: () => {
                              navigation.navigate('Selection');
                              AsyncStorage.removeItem('cleanerLoggedIn');
                              alert("Logged Out");
                            },
                          },
                        ],
                        { cancelable: true }
                      );
                  }}
                  >
                  <Image source={logger} style={{ width: 37, height: 37 }} />
                </TouchableOpacity>
              ),
              headerLeft: () => (
                <TouchableOpacity
                style={{ marginLeft: 16 }}
                onPress={() => navigation.navigate('CleanerInformation')}
                >
                  <Image source={profileIcon} style={{ width: 37, height: 37 }} />
                </TouchableOpacity>
              )
            })}
        />


        <Tab.Screen
         name='CleanerDoMain' 
         component={CleanerDoMain}
         options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={focused ? cleanto : cleanto}
              style={{ width: size, height: size, tintColor: color }}
              />
              ),
          headerRight: () => (
            <TouchableOpacity
            style={{ marginRight: 16 }}
              onPress={() => navigation.openDrawer()}
              >
              <Image source={cleanto} style={{ width: 37, height: 37 }} />
            </TouchableOpacity>
          )
        }}
         />
        <Tab.Screen
                 name='UserCommMain'
                 component={UserCommMain}
                 options={{
                  tabBarIcon: ({ focused, color, size }) => (
                    <Image
                      source={focused ? group : group}
                      style={{ width: 37, height: 37, tintColor: color }}
                    />
                  ),
                  headerRight: () => (
                    <TouchableOpacity
                      style={{ marginRight: 16 }}
                      onPress={() => navigation.openDrawer()}
                    >
                      <Image source={group} style={{ width: 37, height: 37 }} />
                    </TouchableOpacity>
                  )
                }}
                 />
        <Tab.Screen
         name='CleanerLogs'
         initialParams={{ nam:bot }} 
         component={CleanerLogs}
         options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={focused ? log : log}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 16 }}
              onPress={() => navigation.openDrawer()}
            >
              <Image source={log} style={{ width: 37, height: 37 }} />
            </TouchableOpacity>
          )
        }}
         />

        {/* <Tab.Screen 
        name='UserReward' 
        component={UserReward}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={focused ? rewardIcon : rewardIcon}
              style={{ width: 30, height: 30, tintColor: color }}
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 16 }}
              onPress={() => navigation.openDrawer()}
            >
              <Image source={rewardIcon} style={{ width: 37, height: 37 }} />
            </TouchableOpacity>
          )
        }}
         /> */}

        <Tab.Screen 
        name='ScanQR' 
        component={CleanerQr}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={focused ? qrIcon : qrIcon}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 16 }}
              onPress={() => navigation.openDrawer()}
            >
              <Image source={qrIcon} style={{ width: 37, height: 37 }} />
            </TouchableOpacity>
          )
        }}
         />
        
      </Tab.Navigator>
  );
};

export default CleanerMain;
