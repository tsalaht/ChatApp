import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile';
import Managment from './Managment';
const Stack = createNativeStackNavigator();
const ProfileScreens = () => {
    return (
  <Stack.Navigator >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Managment"
        component={Managment}
        options={{
          headerShown: false,
        }}
      />

    
   
    
    </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default ProfileScreens;
