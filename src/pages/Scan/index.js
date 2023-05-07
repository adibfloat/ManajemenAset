import React, {useState, useRef} from 'react';
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
import {RNCamera} from 'react-native-camera';

function Scan({navigation}) {
  const [barValue, setBarValue] = useState('');
  const [barType, setBarType] = useState('');
  const [flash, setFlash] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  return (
    <View style={styles.container}>
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        captureAudio={false}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        defaultTouchToFocus
        flashMode={
          flash
            ? RNCamera.Constants.FlashMode.torch
            : RNCamera.Constants.FlashMode.off
        }
        mirrorImage={false}
        // onBarCodeRead={readBarcode}
        onGoogleVisionBarcodesDetected={({barcodes}) => {
          console.log(barcodes, barcodes.length);
          if (barcodes.length > 0) {
            setBarValue(barcodes[0].data);
            setBarType(barcodes[0].format);
            setShowDialog(true);
          }
        }}
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,
        }}
        type={RNCamera.Constants.Type.back}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
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
