import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProtectedScreens from '../Screens/Index';
import Management from '../Screens/Management/Index';
const Stack = createNativeStackNavigator();
const AppPages = () => {
    return (
   <Stack.Navigator initialRouteName='ProtectedScreens' >
      <Stack.Screen
        name="ProtectedScreens"
        component={ProtectedScreens}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AllManagement"
        component={Management}
        options={{
          headerShown: false,
        }}
      />


    
   
    
    </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default AppPages;
