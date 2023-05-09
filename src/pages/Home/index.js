import React, { Component, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  Alert,
  BackHandler
} from 'react-native';
import baca from '../../assets/image/buku.jpg';
import tulis from '../../assets/image/menulis.png';
import scan from '../../assets/image/scan.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faBook,
  faPencilAlt,
  faBarcode,
  faUser,
  faQuestion,
  faSignOut,
  faList,
  faPowerOff
} from '@fortawesome/free-solid-svg-icons';
import { clearStorage } from '../../utils/localStorage';

const Home = ({ navigation, route }) => {
  // const email = route.params.email;
  // console.log(email);

  const logout = () => {
    clearStorage();
    Alert.alert('Berhasil', 'Anda sudah Keluar', [
      {
        text: 'Ok',
        onPress: () => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }]
          });
        },
      },
    ]);
  };

  const exit = () => {
    Alert.alert('Keluar', 'Yakin mau keluar dari aplikasi ?',
        [
            {
                text: 'Cancel',
                onPress: () => console.log('cancel'),
                style: 'cancel'
            },
            {
                text: 'Ok',
                onPress: () => BackHandler.exitApp(),
                style: 'default'
            },
        ]
    )
}

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.inner}>
            <Text>Header</Text>
          </View>
        </View>

        <View style={styles.boxContainer}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate('ReadData')}>
            <View style={styles.inner}>
              {/* <Image style={styles.logo} source={baca} /> */}
              <FontAwesomeIcon icon={faBook} color={'white'} size={60} />
              <View style={styles.coba}>
                <Text style={styles.text}>Informasi Data Aset</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate('PostData')}>
            <View style={styles.inner}>
              {/* <Image style={styles.logo} source={tulis} /> */}
              <FontAwesomeIcon icon={faPencilAlt} color={'white'} size={60} />
              <View style={styles.coba}>
                <Text style={styles.text}>Tambah Data</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate('Scan')}>
            <View style={styles.inner}>
              {/* <Image style={styles.logo} source={scan} /> */}
              <FontAwesomeIcon icon={faBarcode} color={'white'} size={60} />
              <View style={styles.coba}>
                <Text style={styles.text}>Scanning</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate('RangkapData')}>
            <View style={styles.inner}>
              {/* <Image style={styles.logo} source={scan} /> */}
              <FontAwesomeIcon icon={faList} color={'white'} size={60} />
              <View style={styles.coba}>
                <Text style={styles.text}>Rangkap Data</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate('Panduan')}>
            <View style={styles.inner}>
              {/* <Image style={styles.logo} source={scan} /> */}
              <FontAwesomeIcon icon={faQuestion} color={'white'} size={60} />
              <View style={styles.coba}>
                <Text style={styles.text}>Panduan</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate('Saya')}>
            <View style={styles.inner}>
              {/* <Image style={styles.logo} source={scan} /> */}
              <FontAwesomeIcon icon={faUser} color={'white'} size={60} />
              <View style={styles.coba}>
                <Text style={styles.text}>Tentang Saya</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => {logout()}}>
            <View style={styles.inner}>
              {/* <Image style={styles.logo} source={scan} /> */}
              <FontAwesomeIcon icon={faSignOut} color={'white'} size={60} />
              <View style={styles.coba}>
                <Text style={styles.text}>Logout</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => exit()}>
            <View style={styles.inner}>
              <FontAwesomeIcon icon={faPowerOff} color={'white'} size={60} />
              <View style={styles.coba}>
                <Text style={styles.text}>Keluar</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>

    // <View style={Styles.page}>
    //   <Text> Halaman Home </Text>
    //   <Text style={{color: 'black'}}>{/* {email}  */}</Text>
    //   <View style={Styles.wrapperButton}>
    //     <TouchableOpacity
    //       style={Styles.btnTambah}
    //       onPress={() => navigation.navigate('PostData')}
    //       // onPress={() => this.props.navigation.navigate('PostData')}
    //     >
    //       <FontAwesomeIcon icon={faPlus} size={20} color={'white'} />
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       style={Styles.btnTambah}
    //       onPress={() => navigation.navigate('ReadData')}
    //       // onPress={() => this.props.navigation.navigate('PostData')}
    //     >
    //       <FontAwesomeIcon icon={faPlus} size={20} color={'white'} />
    //     </TouchableOpacity>
    //   </View>
    // </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: '20%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // subHeader: {
  //   padding: 10,
  //   width: '100%',
  //   height: '15%',
  //   backgroundColor: 'grey',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  boxContainer: {
    width: '100%',
    backgroundColor: '#e8ecf4',
    padding: 10,
    marginBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  coba: {
    marginTop: 10,
  },
  box: {
    width: '50%',
    height: 190,
    padding: 10,
    backgroundColor: '#e8ecf4',
    alignItems: 'center',
  },
  inner: {
    borderRadius: 50,
    marginTop: 10,
    backgroundColor: '#075eec',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
  //
  logo: {
    width: 100,
    height: 100,
    borderRadius: 30,
  },

  subContainer: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 20,
    height: 120,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.8,
    elevation: 5,
  },

  card: {
    backgroundColor: 'lime',
    padding: 15,
    marginBottom: 20,
    height: 120,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.8,
    elevation: 5,
  },
  //
  page: {
    flex: 1,
  },
  wrapperButton: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 30,
  },
  btnTambah: {
    padding: 20,
    backgroundColor: 'skyblue',
    borderRadius: 30,
    //Bayangan
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
