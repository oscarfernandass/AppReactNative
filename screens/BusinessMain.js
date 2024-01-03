import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BusinessHomer from './BusinessHomer.js';
import UserReward from './UserReward.js';
import BusinessLogs from './BusinessLogs.js';
import UserComm from './UserComm.js';
import group from '../group.png';
import { Dimensions,Image ,TouchableOpacity,Alert} from 'react-native';
import homeIcon from '../homeIcon.png';
import mapIcon from '../mapIcon.png';
import rewardIcon from '../rewardIcon.png';
import qrIcon from '../qrIcon.png';
import profileIcon from '../profileIcon.png';
import logger from '../logger.png';
import log from '../log.png';
import UserCommMain from './UserCommMain.js';
const { width, height } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Tab = createBottomTabNavigator();
const BusinessMain = ({route}) => {
  const navigate=useNavigation();
  const name ="Hi " +route?.params?.userName; 
  const game=route?.params?.userName; 
  return (
      <Tab.Navigator>

        <Tab.Screen
          name={name}
          component={BusinessHomer}
          initialParams={{ Name: game }}
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
                              AsyncStorage.removeItem('businessLoggedIn');
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
                onPress={() => navigation.navigate('BusinessInformation')}
                >
                  <Image source={profileIcon} style={{ width: 37, height: 37 }} />
                </TouchableOpacity>
              )
            })}
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
         name='BusinesLogs' 
         component={BusinessLogs}
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

        {/* <Tab.Screen 
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
         /> */}
        
      </Tab.Navigator>
  );
};

export default BusinessMain;
