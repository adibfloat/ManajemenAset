import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import ViewShot, {captureRef} from 'react-native-view-shot';

const DetailData = ({navigation, route}) => {
  const {namaBarang, jumlahBarang, kondisi, waktu, satuan, lokasi} =
    route.params;
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.tombol}
          onPress={() => navigation.navigate('ReadData')}>
          <Text style={styles.textTombol}>Kembali</Text>
        </TouchableOpacity>
        <View style={styles.garis} />
      </View>
      <View style={styles.pages}>
        <Text>Nama Barang:</Text>
        <Text style={styles.text}>{namaBarang}</Text>

        <Text>Jumlah Barang:</Text>
        <Text style={styles.text}>{jumlahBarang}</Text>

        <Text>Lokasi:</Text>
        <Text style={styles.text}>{lokasi}</Text>

        <Text>Waktu:</Text>
        <Text style={styles.text}>{waktu}</Text>

        <Text>Satuan:</Text>
        <Text style={styles.text}>{satuan}</Text>

        <Text>Kondisi:</Text>
        <Text style={styles.text}>{kondisi}</Text>
      </View>
    </View>
  );
};

export default DetailData;

const styles = StyleSheet.create({
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
    backgroundColor: 'black',
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
});
