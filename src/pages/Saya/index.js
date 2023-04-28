import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';

const Saya = ({navigation}) => {
  return (
    <View style={styles.coba}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.tombol}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.textTombol}>Kembali</Text>
        </TouchableOpacity>
        <View style={styles.garis} />
      </View>
      <View style={styles.pages}>
        <Text>Tentang Saya</Text>
      </View>
      <View style={styles.pages}>
        <Text>Nama Barang:</Text>
      </View>
    </View>
  );
};

export default Saya;

const styles = StyleSheet.create({
  coba: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e8ecf4',
  },
  pages: {
    padding: 20,
    margin: 30,
    marginBottom: 0,
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
});
