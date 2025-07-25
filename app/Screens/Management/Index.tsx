import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../Profile/Profile';
import Shope from './Shope';
import Bage from './Bage';
import Guest from './Guest';


const Stack = createNativeStackNavigator();
const Management = () => {
    return (
  <Stack.Navigator >
      <Stack.Screen
        name="Shope"
        component={Shope}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Bage"
        component={Bage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Guest"
        component={Guest}
        options={{
          headerShown: false,
        }}
      />


    
   
    
    </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default Management;
