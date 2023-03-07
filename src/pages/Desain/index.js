import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';

const Desain = ({navigation}) => {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.tombol}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.textTombol}>Kembali</Text>
        </TouchableOpacity>
        <View style={styles.garis} />
      </View>
      <View style={styles.pages}>
        <Text>Nama Barang:</Text>
        <Text style={styles.text}>Kursi</Text>

        <Text>Jumlah Barang:</Text>
        <Text style={styles.text}>12</Text>

        <Text>Kondisi:</Text>
        <Text style={styles.text}>Baik</Text>
      </View>
    </View>
  );
};

export default Desain;

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
    padding: 10,
    borderRadius: 30,
    marginTop: 20,
    marginLeft: 30,
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
