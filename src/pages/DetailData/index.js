import React, {useState, useRef, useCallback} from 'react';
import Barcode from '@kichiyaki/react-native-barcode-generator';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
  Platform,
  PermissionsAndroid,
  ScrollView,
} from 'react-native';
import ViewShot, {captureRef} from 'react-native-view-shot';
import Share from 'react-native-share';
import RNFetchBlob from 'rn-fetch-blob';

const DetailData = ({navigation, route}) => {
  const {id, datas} = route.params;

  const [BarImage, setBarImage] = useState('');
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
      error => console.error('Oops, snapshot failed', error),
    );
  }, []);

  const downloadQR = useCallback(() => {
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
        console.log('ERROR: ', err);
      });
  };

  return (
    <View style={styles.coba}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.tombol}
          onPress={() => navigation.navigate('ReadData')}>
          <Text style={styles.textTombol}>Kembali</Text>
        </TouchableOpacity>
        <View style={styles.garis} />
      </View>
      <ScrollView>
        <View style={styles.pages}>
          <Text>Nama Barang:</Text>
          <Text style={styles.text}>{datas.namaBarang}</Text>

          <Text>Jumlah Barang:</Text>
          <Text style={styles.text}>{datas.jumlahBarang}</Text>

          <Text>Lokasi:</Text>
          <Text style={styles.text}>{datas.lokasi}</Text>

          <Text>Waktu:</Text>
          <Text style={styles.text}>{datas.waktu}</Text>

          <Text>Satuan:</Text>
          <Text style={styles.text}>{datas.satuan}</Text>

          <Text>Kondisi:</Text>
          <Text style={styles.text}>{datas.kondisi}</Text>
        </View>

        <View style={[styles.pages, {marginTop: 0}]}>
          <ViewShot ref={ref}>
            <Barcode
              format="CODE128"
              value={id}
              text={id}
              textStyle={{color: '#000'}}
              maxWidth={Dimensions.get('window').width / 1.5}
            />
          </ViewShot>

          <View style={{height: 20}} />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              shareQR();
            }}>
            <Text style={styles.textButton}>Share</Text>
          </TouchableOpacity>
          <View style={{height: 20}} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              downloadQR();
            }}>
            <Text style={styles.textButton}>Download</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailData;

const styles = StyleSheet.create({
  coba: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e8ecf4',
  },
  pages: {
    padding: 20,
    margin: 30,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tombol: {
    backgroundColor: '#075eec',
    justifyContent: 'center',
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 10,
    height: 40,
    width: 100,
  },
  textTombol: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  garis: {
    borderWidth: 2,
    marginTop: 10,
  },
  header: {
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  button: {
    padding: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  textButton: {
    color: '#fff',
  },
});
