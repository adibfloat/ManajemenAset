import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { getData } from '../../utils/localStorage';

const Splash = ({ navigation }) => {
  useEffect(() => {
    getData('user').then(res => {
      if (res) {
        setTimeout(() => {
          navigation.replace('Home', { email: res.email })
        }, 3000);
      } else {
        setTimeout(() => {
          navigation.replace('Login');
        }, 3000);
      }
    })
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/image/logo.png')} style={{height: 100, width: 100}} />
      <Image source={require('../../assets/image/splashLogo.png')} style={{width: 150, height: 50}} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  tulisan: {
    color: 'red',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
