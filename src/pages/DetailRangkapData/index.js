import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import database from '@react-native-firebase/database';
import {faEdit, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {DataKosong} from '../../components';
import XLSX from 'xlsx';
var RNFS = require('react-native-fs');

const DetailRangkapData = ({navigation, route}) => {
  const {name} = route.params;

  const [data, setData] = useState(null);

  const exportDataToExcel = () => {
    // Created Sample data
    let sample_data_to_export = [];

    Object.keys(data).map(value => {
      sample_data_to_export.push({
        'Nama Barang': data[value].namaBarang,
        'Jumlah Barang': data[value].jumlahBarang,
        Satuan: data[value].satuan,
        Lokasi: data[value].lokasi,
        Waktu: data[value].waktu,
      });
    });

    let wb = XLSX.utils.book_new();
    let ws = XLSX.utils.json_to_sheet(sample_data_to_export);
    XLSX.utils.book_append_sheet(wb, ws, 'Users');
    const wbout = XLSX.write(wb, {type: 'binary', bookType: 'xlsx'});
    const newName = name.replace(/ /g, '_');
    const fileName = `${newName}.${Date.now()}`;

    // Write generated excel to Storage
    RNFS.writeFile(
      RNFS.DownloadDirectoryPath + `/${fileName}.xlsx`,
      wbout,
      'ascii',
    )
      .then(r => {
        Alert.alert(
          'Export Berhasil',
          `File berhasil disimpan di folder Download/${fileName}`,
        );
      })
      .catch(e => {
        console.log('Error', e);
      });
  };

  const handleExport = async () => {
    if (data == null) {
      return Alert.alert('Gagal', 'Data kosong');
    }

    try {
      // Check for Permission (check if permission is already given or not)
      let isPermitedExternalStorage = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );

      if (!isPermitedExternalStorage) {
        // Ask for permission
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage permission needed',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Permission Granted (calling our exportDataToExcel function)
          exportDataToExcel();
          console.log('Permission granted');
        } else {
          // Permission denied
          console.log('Permission denied');
        }
      } else {
        // Already have Permission (calling our exportDataToExcel function)
        exportDataToExcel();
      }
    } catch (e) {
      console.log('Error while checking permission');
      console.log(e);
      return;
    }
  };

  useEffect(() => {
    database()
      .ref('aset')
      .orderByChild('lokasi')
      .startAt(name.toLowerCase())
      .endAt(name.toLowerCase())
      .once('value', dataSnapshot => {
        setData(dataSnapshot.val());
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.tombol}
          onPress={() => navigation.goBack()}>
          <Text style={styles.textTombol}>Kembali</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tombol, {backgroundColor: 'green'}]}
          onPress={() => handleExport()}>
          <Text style={styles.textTombol}>Export</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.garis} />
      <ScrollView>
        {data == null ? (
          <DataKosong />
        ) : (
          Object.keys(data).map((value, index) => {
            // console.log(value);
            // console.log(index);
            return (
              <View key={index}>
                <View style={styles.container2}>
                  <TouchableOpacity
                    onPress={() => {
                      /* Menuju Detail Data */
                      navigation.navigate('DetailData', {
                        id: value,
                        datas: data[value],
                      });
                    }}>
                    <View>
                      <Text style={styles.nama}>{data[value].namaBarang}</Text>
                      <Text style={styles.jumlahBarang}>
                        {data[value].jumlahBarang}
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <View style={styles.icon}>
                    <TouchableOpacity
                      // onPress={() => navigation.props('EditData', value)}
                      // onPress={() => coba(value)}
                      onPress={() =>
                        navigation.navigate('EditData', {
                          ...data[value],
                          id: value,
                        })
                      }>
                      <FontAwesomeIcon
                        style={{marginRight: 15}}
                        icon={faEdit}
                        color={'blue'}
                        size={25}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => hapus(value)}>
                      <FontAwesomeIcon icon={faTimes} color={'red'} size={25} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginHorizontal: 30,
  },
  header: {
    paddingHorizontal: 30,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container2: {
    flexDirection: 'row',
    margin: 20,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.8,
    elevation: 5,
  },
  nama: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  jumlahBarang: {
    fontSize: 12,
    color: 'grey',
  },
  icon: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default DetailRangkapData;
