import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Home,
  Splash,
  Login,
  Registrasi,
  PostData,
  ReadData,
  Scan,
  EditData,
  DetailData,
  Panduan,
  Saya,
  RangkapData,
  DetailRangkapData,
} from '../pages';

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
      <Stack.Screen
        name="Scan"
        component={Scan}
        options={{headerShown: false}} //Buat munculin header
      />
      <Stack.Screen
        name="DetailData"
        component={DetailData}
        options={{headerShown: false}} //Buat munculin header
      />
      <Stack.Screen
        name="EditData"
        component={EditData}
        options={{headerShown: false}} //Buat munculin header
      />

      <Stack.Screen
        name="Panduan"
        component={Panduan}
        options={{headerShown: false}} //Buat munculin header
      />

      <Stack.Screen
        name="Saya"
        component={Saya}
        options={{headerShown: false}} //Buat munculin header
      />
      <Stack.Screen
        name="RangkapData"
        component={RangkapData}
        options={{headerShown: false}} //Buat munculin header
      />
      <Stack.Screen
        name="DetailRangkapData"
        component={DetailRangkapData}
        options={{headerShown: false}} //Buat munculin header
      />
    </Stack.Navigator>
  );
};

export default router;
