import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Dimensions,
  Text,
  Button,
  Dialog,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
// import {Button, Dialog} from '@rneui/themed';
// import styles from './../styles/Style';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

function Scan({ navigation }) {
  const [flash, setFlash] = useState(false);

  const handleBarCodeScanned = (value) => {
    navigation.navigate('DetailScan', {id: value.data})
  };

  return (
    <View style={styles.container}>

      <QRCodeScanner
        onRead={handleBarCodeScanned}
        flashMode={
          flash ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off
        }
        reactivate={true}
        cameraStyle={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
        fadeIn={true}
        showMarker={true}
        containerStyle={{ backgroundColor: '#fff' }}
      />


      <TouchableOpacity
        style={styles.iconButtonHomeContainer}
        title={`Flash ${flash ? 'OFF' : 'ON'}`}
        onPress={() => setFlash(!flash)}>
        <View>
          <Text style={styles.senter}>Senter</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconButtonHomeContainer}
        onPress={() => navigation.navigate('Home')}>
        <View>
          <Text style={styles.senter}>Kembali</Text>
        </View>
      </TouchableOpacity>
      {/* <Dialog
        isVisible={showDialog}
        onBackdropPress={() => setShowDialog(!showDialog)}>
        <Dialog.Title
          titleStyle={{color: '#000', fontSize: 25}}
          title="Scanned Barcode:"
        />
        <Text style={{color: '#000', fontSize: 20}}>
          {`Data: ${barValue}\nFormat: ${barType}`}
        </Text>
        <Dialog.Actions>
          <Dialog.Button
            title="Scan Again"
            onPress={() => {
              setShowDialog(false);
            }}
          />
        </Dialog.Actions>
      </Dialog> */}
    </View>
  );
}

export default Scan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  iconButtonHomeContainer: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#075eec',
    margin: 10,
    borderRadius: 20,
  },
  senter: {
    color: 'white',
  },
  // iconButtonHome: {
  //   type: 'material-community',
  //   size: 50,
  //   color: 'white',
  // },
  // titleButtonHome: {
  //   fontWeight: '700',
  //   fontSize: 25,
  // },
  // buttonHome: {
  //   backgroundColor: '#0C8E4E',
  //   borderColor: 'transparent',
  //   borderWidth: 0,
  //   borderRadius: 30,
  //   height: 100,
  //   fontSize: 20,
  // },
  // buttonHomeContainer: {
  //   width: 200,
  //   marginHorizontal: 50,
  //   marginVertical: 20,
  // },
});
