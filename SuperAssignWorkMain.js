import { TouchableOpacity, Text, Easing } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import SuperAssign from './SuperAssign';
import SuperAssignWork from './SuperAssignWork';
import EmbedMapper from './EmbedMapper';

const Stack = createNativeStackNavigator();

const SuperAssignWorkMain = () => {
  return (
    // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SuperAssignWork"
          component={SuperAssignWork}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EmbedMapper"
          component={EmbedMapper}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default SuperAssignWorkMain;