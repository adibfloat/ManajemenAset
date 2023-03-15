import React, {useState, useRef, useCallback} from 'react';
import {
  View,
  Platform,
  PermissionsAndroid,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {Button, Icon, Input, Dialog} from '@rneui/themed';
// import styles from './../styles/Style';
import Barcode from '@kichiyaki/react-native-barcode-generator';
import Share from 'react-native-share';
import RNFetchBlob from 'rn-fetch-blob';
import ViewShot, {captureRef} from 'react-native-view-shot';

const Desain = () => {
  <View>
    <Text>Halo</Text>
  </View>;
};

export default Desain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
  },
  iconButtonHomeContainer: {marginRight: 10},
  iconButtonHome: {
    type: 'material-community',
    size: 50,
    color: 'white',
  },
  titleButtonHome: {
    fontWeight: '700',
    fontSize: 25,
  },
  buttonHome: {
    backgroundColor: '#0C8E4E',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 30,
    height: 100,
  },
  buttonHomeContainer: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 20,
  },
});
