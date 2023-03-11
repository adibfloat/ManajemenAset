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

function BarcodeGenerator() {
  const [BarValue, setBarValue] = useState('lintangwisesa');
  const [BarImage, setBarImage] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [loading, setloading] = useState(false);
  const ref = useRef();

  const shareQR = useCallback(() => {
    captureRef(ref, {
      format: 'jpg',
      quality: 0.8,
      result: 'base64',
    }).then(
      b64 => {
        const shareImageBase64 = {
          title: 'Barcode',
          message: 'Here is my barcode!',
          url: `data:image/jpeg;base64,${b64}`,
        };
        setBarImage(String(shareImageBase64.url));
        Share.open(shareImageBase64);
      },
      error => console.error('Oops, snapshot gagal', error),
    );
  }, []);

  const downloadQR = useCallback(() => {
    setShowDialog(true);
    setloading(true);
    captureRef(ref, {
      format: 'jpg',
      quality: 0.8,
      result: 'base64',
    }).then(
      async b64 => {
        const shareImageBase64 = {
          title: 'Barcode',
          message: 'Here is my barcode!',
          url: `data:image/jpeg;base64,${b64}`,
        };
        setBarImage(String(shareImageBase64.url));

        if (Platform.OS === 'ios') {
          saveImage(String(shareImageBase64.url));
        } else {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              {
                title: 'Storage Permission Required',
                message:
                  'App needs access to your storage to download the QR code image',
              },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              console.log('Storage Permission Granted');
              saveImage(String(shareImageBase64.url));
            } else {
              console.log('Storage Permission Not Granted');
            }
          } catch (err) {
            console.log(err);
          }
        }
      },
      error => console.error('Oops, snapshot failed', error),
    );
  }, []);

  const saveImage = barcode => {
    setloading(false);
    barcode = barcode.split('data:image/jpeg;base64,')[1];

    let date = new Date();
    const {fs} = RNFetchBlob;
    let filename =
      '/barcode_' +
      Math.floor(date.getTime() + date.getSeconds() / 2) +
      '.jpeg';
    let PictureDir = fs.dirs.DownloadDir + filename;

    fs.writeFile(PictureDir, barcode, 'base64')
      .then(() => {
        RNFetchBlob.android.addCompleteDownload({
          title: '🎁 Here is your barcode!',
          useDownloadManager: true,
          showNotification: true,
          notification: true,
          path: PictureDir,
          mime: 'image/jpeg',
          description: 'Image',
        });
      })
      .catch(err => {
        console.log('ERR: ', err);
      });
  };

  return (
    <View>
      <Text>Halo</Text>
    </View>
  );
}

export default BarcodeGenerator;

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
