import React, {Component, useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  PermissionsAndroid
} from 'react-native';
import database from '@react-native-firebase/database';
import {DataKosong} from '../../components';
import {faEdit, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import XLSX from 'xlsx';
var RNFS = require('react-native-fs');

const DataPeminjaman = ({navigation}) => {
  const [data, setData] = useState(null);
  const [triger, setTriger] = useState(false);

  useEffect(() => {
    database()
      .ref('pinjaman')
      .once('value', dataSnapshot => {
        setData(dataSnapshot.val());
      });
  }, []);

  useEffect(() => {
    database()
      .ref('pinjaman')
      .once('value', dataSnapshot => {
        setData(dataSnapshot.val());
      });
  }, [triger]);

  const onUpdatePengembalian = id => {
    var date = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();
    var hours = new Date().getHours();
    var min = new Date().getMinutes();
    var sec = new Date().getSeconds();
    let waktu =
      date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec;

    database()
      .ref(`/pinjaman/${id}`)
      .update({
        tanggalpengembalian: waktu,
        status: 'Sudah Dikembalikan',
      })
      .then(() => {
        Alert.alert('Berhasil', 'Barang sudah dikembalikan ...');
        setTriger(!triger);
      });
  };

  const exportDataToExcel = () => {
    // Created Sample data
    let sample_data_to_export = [];

    Object.keys(data).map(value => {
      sample_data_to_export.push({
        'Nama Peminjam': data[value].namaPeminjam,
        'Nama Barang': data[value].namaBarang,
        'Jumlah Barang': data[value].jumlahBarang,
        "Lokasi": data[value].lokasi,
        'Tanggal Pinjam': data[value].tanggalPinjam,
        'Tanggal Kembali': data[value].tanggalKembali,
        'Status': data[value].status,
        'Tanggal Pengembalian': data[value].tanggalpengembalian,
      });
    });

    let wb = XLSX.utils.book_new();
    let ws = XLSX.utils.json_to_sheet(sample_data_to_export);
    XLSX.utils.book_append_sheet(wb, ws, 'Users');
    const wbout = XLSX.write(wb, {type: 'binary', bookType: 'xlsx'});
    const fileName = `Rekap Data Peminjaman.${Date.now()}`;

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
            return (
              <View key={index} style={styles.container2}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}>
                  <View>
                    <Text style={styles.textHead}>Nama Peminjam: </Text>
                    <Text>{data[value].namaPeminjam} </Text>
                    <Text style={styles.textHead}>Nama Barang: </Text>
                    <Text>{data[value].namaBarang} </Text>
                    <Text style={styles.textHead}>Jumlah Barang: </Text>
                    <Text>{data[value].jumlahBarang} </Text>
                    <Text style={styles.textHead}>Lokasi Awal: </Text>
                    <Text>{data[value].lokasi} </Text>
                  </View>
                  <View>
                    <Text style={styles.textHead}>Tanggal Pinjam: </Text>
                    <Text>{data[value].tanggalPinjam} </Text>
                    <Text style={styles.textHead}>Tanggal Kembali: </Text>
                    <Text>{data[value].tanggalKembali} </Text>
                    <Text style={styles.textHead}>Status: </Text>
                    <Text>{data[value].status} </Text>
                    <Text style={styles.textHead}>Tanggal Pengembalian: </Text>
                    <Text>
                      {data[value].tanggalpengembalian == 'null'
                        ? '-'
                        : data[value].tanggalpengembalian}{' '}
                    </Text>
                  </View>
                </View>
                <View style={{height: 40}} />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}>
                  {data[value].tanggalpengembalian == 'null' && (
                    <TouchableOpacity
                      style={styles.tombol}
                      onPress={() => {
                        onUpdatePengembalian(data[value].id);
                      }}>
                      <Text style={styles.textTombol}>Sudah Selesai</Text>
                    </TouchableOpacity>
                  )}
                  <View style={styles.icon}>
                    {/* <TouchableOpacity
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
                    </TouchableOpacity> */}
                    <TouchableOpacity
                      onPress={async () => {
                        await database().ref(`/pinjaman/${value}`).remove();
                        setTriger(!triger);
                      }}>
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
  container2: {
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
    width: 120,
  },
  textTombol: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  garis: {
    borderWidth: 2,
    marginTop: 5,
  },
  header: {
    paddingHorizontal: 30,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scroll: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  textHead: {
    fontWeight: '900',
  },
  icon: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default DataPeminjaman;
