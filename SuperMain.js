import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SuperHomer from './SuperHomer.js';
import SuperLogs from './SuperLogs.js';
import SuperAssign from './SuperAssign.js';

// import UserMap from './UserMap.js';
import CleanerLogs from './CleanerLogs.js';
import CleanerDo from './CleanerDo.js';
import UserReward from './UserReward.js';
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
import suitcase from '../suitcase.png';
const { width, height } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SuperAssignWorkMain from './SuperAssignWorkMain.js';
import UserCommMain from './UserCommMain.js';

const Tab = createBottomTabNavigator();
const SuperMain = ({route}) => {
  const navigate=useNavigation();
  const bot=route?.params?.employeeId; 
  const name ="Hi " +bot; 
  console.log(bot)
  return (
      <Tab.Navigator>

        <Tab.Screen
          name={name}
          component={SuperHomer}
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
                              AsyncStorage.removeItem('superLoggedIn');
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
                onPress={() => navigation.navigate('SuperInformation')}
                >
                  <Image source={profileIcon} style={{ width: 37, height: 37 }} />
                </TouchableOpacity>
              )
            })}
        />


        <Tab.Screen
         name='SuperAssign' 
         component={SuperAssign}
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
                 name='SuperAssignWorkMain'
                 component={SuperAssignWorkMain}
                 options={{
                  tabBarIcon: ({ focused, color, size }) => (
                    <Image
                      source={focused ? suitcase : suitcase}
                      style={{ width: 28, height: 28, tintColor: color }}
                    />
                  ),
                  headerRight: () => (
                    <TouchableOpacity
                      style={{ marginRight: 16 }}
                      onPress={() => navigation.openDrawer()}
                    >
                      <Image source={suitcase} style={{ width: 37, height: 37 }} />
                    </TouchableOpacity>
                  )
                }}
                 />
        <Tab.Screen
         name='SuperLogs'
         initialParams={{ nam:bot }} 
         component={SuperLogs}
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
      </Tab.Navigator>
  );
};

export default SuperMain;
