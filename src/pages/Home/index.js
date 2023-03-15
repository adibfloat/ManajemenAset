import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import baca from '../../assets/image/buku.jpg';
import tulis from '../../assets/image/menulis.png';
import scan from '../../assets/image/scan.png';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBook,
  faPencilAlt,
  faBarcode,
} from '@fortawesome/free-solid-svg-icons';

const Home = ({navigation, route}) => {
  // const email = route.params.email;
  // console.log(email);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>Header</Text>
      </View>
      <View style={styles.boxContainer}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('ReadData')}>
          <View style={styles.inner}>
            {/* <Image style={styles.logo} source={baca} /> */}
            <FontAwesomeIcon icon={faBook} color={'white'} size={60} />
            <View style={styles.coba}>
              <Text style={styles.text}>Baca Data</Text>
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
        <View style={styles.box}>
          <View style={styles.inner}>
            {/* <Image style={styles.logo} source={scan} /> */}
            <FontAwesomeIcon icon={faBarcode} color={'white'} size={60} />
            <View style={styles.coba}>
              <Text style={styles.text}>Scanning</Text>
            </View>
          </View>
        </View>
        {/* <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('Desain')}>
          <View style={styles.inner}>
            <Image style={styles.logo} source={tulis} />
            <Text>Desain</Text>
          </View>
        </TouchableOpacity> */}
      </View>
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
    height: '15%',
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxContainer: {
    width: '100%',
    height: '85%',
    backgroundColor: '#e8ecf4',
    padding: 5,
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
