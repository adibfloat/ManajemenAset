import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Button,
} from 'react-native';
import DetailData from '../DetailData';
import EditData from '../EditData';
import database from '@react-native-firebase/database';

const ReadData = ({ navigation }) => {
  const [data, setData] = useState('');
  useEffect(() => {
    database()
      .ref('/aset')
      .once('value')
      .then(snapshot => {
        // console.log('User data: ', snapshot.val());
        setData(snapshot.val());
      })
      .catch(err => console.log(err));
  }, [data]);
  // console.log(data);

  //Menghapus
  const hapus = data => {
    Alert.alert('Info', 'Anda yakin menghapus', [
      {
        text: 'Batal',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () =>
          database()
            .ref('/aset/' + data)
            .remove(),
        style: 'success',
      },
    ]);
  };

  const coba = data => {
    console.log(data);
  };

  return (
    //Menampilkan data dalam database
    <ScrollView style={{ width: '100%', backgroundColor: '#e8ecf4' }}>
      <View>
        <TouchableOpacity
          style={styles.tombol}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.textTombol}>Kembali</Text>
        </TouchableOpacity>

        <View style={styles.garis} />

        {
          data == null ? <Text>Data Kosong</Text>
            : Object.keys(data).map((value, index) => {
              // console.log(value);
              // console.log(index);
              return (
                <View key={index}>
                  <View style={styles.container}>
                    <TouchableOpacity
                      onPress={() => {
                        /* Menuju Detail Data */
                        navigation.navigate('DetailData', data[value]);
                      }}>
                      <View>
                        <Text style={styles.nama}>{data[value].namaBarang}</Text>
                        <Text style={styles.lokasi}>{data[value].lokasi}</Text>
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
                          style={{ marginRight: 15 }}
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
        }
      </View>
    </ScrollView>
  );
};

export default ReadData;

const styles = StyleSheet.create({
  container: {
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
  lokasi: {
    fontSize: 12,
    color: 'grey',
  },
  icon: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  tombol: {
    backgroundColor: '#075eec',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 10,
    height: 50,
    width: 100,
    justifyContent: 'center',
  },
  textTombol: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  garis: {
    borderWidth: 1,
    marginTop: 20,
  },
});
