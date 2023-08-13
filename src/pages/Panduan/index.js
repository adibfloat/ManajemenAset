import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';

const Panduan = ({navigation}) => {
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
      <ScrollView>
        <View style={{width: '100%', paddingBottom: 30}}>
          <View style={styles.pages}>
            <Text>1. Registrasi & Login</Text>
            <Text>
              Masukkan email dan password pada halaman registrasi untuk
              mendaftar dan masukkan email dan password yang terdaftar pada
              halaman login untuk memasuki halaman beranda.
            </Text>
          </View>
          <View style={styles.pages}>
            <Text>2. Menambah Data Aset</Text>
            <Text>
              Dari halaman beranda tekan menu "Tambah Data" lalu masukkan
              data-data aset yang akan dimasukkan.
            </Text>
          </View>

          <View style={styles.pages}>
            <Text>3. Melihat Data Aset</Text>
            <Text>
              Dari halaman beranda tekan menu "Informasi Data Aset" atau menu
              "Rangkap Data" untuk melihat data aset yang tersedia dan tekan
              nama aset untuk melihat detail data aset.
            </Text>
          </View>

          <View style={styles.pages}>
            <Text>4. Edit Data Aset</Text>
            <Text>
              Pada sisi kanan tabel data terdapat ikon edit berwarna biru yang
              bila ditekan akan dibawa menuju halaman edit data.
            </Text>
          </View>

          <View style={styles.pages}>
            <Text>5. Hapus Data Aset</Text>
            <Text>
              Pada sisi kanan tabel data terdapat ikon hapus berwarna merah yang
              bila ditekan akan meminta konfirmasi penghapusan data.
            </Text>
          </View>

          <View style={styles.pages}>
            <Text>6. Export Data Aset</Text>
            <Text>
              Dari halaman beranda tekan menu "Rangkap Data" dan tekan kelas
              yang dituju dan didalam halaman tersebut terdapat tombol export
              pada kanan atas layar.
            </Text>
          </View>

          <View style={styles.pages}>
            <Text>7. Scan Barcode Data Aset</Text>
            <Text>
              Dari halaman beranda tekan menu "Scanning" lalu arahkan kamera
              pada barcode dan akan langsung diarahkan pada detail data aset.
            </Text>
          </View>

          <View style={styles.pages}>
            <Text>8. Logout</Text>
            <Text>
              Dari halaman beranda tekan menu "Logout" dan akan langsung
              diarahkan pada halaman login.
            </Text>
          </View>

          <View style={styles.pages}>
            <Text>9. Keluar</Text>
            <Text>
              Dari halaman beranda tekan menu "Keluar" dan akan langsung keluar
              aplikasi.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Panduan;

const styles = StyleSheet.create({
  coba: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e8ecf4',
  },
  pages: {
    padding: 20,
    margin: 30,
    marginBottom: -15,
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
