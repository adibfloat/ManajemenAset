import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Home,
  TambahKontak,
  Splash,
  Login,
  Registrasi,
  PostData,
  ReadData,
} from '../pages';
import firebase from '@react-native-firebase/app';

const Stack = createNativeStackNavigator();

const router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Registrasi"
        component={Registrasi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}} //Buat munculin header
      />
      <Stack.Screen
        name="PostData"
        component={PostData}
        options={{headerShown: false}} //Buat munculin header
      />
      <Stack.Screen
        name="ReadData"
        component={ReadData}
        options={{headerShown: false}} //Buat munculin header
      />
      {/* <Stack.Screen name="TambahKontak" component={TambahKontak} /> */}
    </Stack.Navigator>
  );
};

export default router;
