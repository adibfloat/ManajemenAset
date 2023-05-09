import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import database from '@react-native-firebase/database';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { DataKosong } from '../../components';

const DetailRangkapData = ({ navigation, route }) => {
  const { name } = route.params

  const [data, setData] = useState(null)

  useEffect(() => {
    database()
      .ref('aset')
      .orderByChild('lokasi')
      .startAt(name.toLowerCase())
      .endAt(name.toLowerCase())
      .once('value', (dataSnapshot) => {
        setData(dataSnapshot.val())
      })
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.tombol}
          onPress={() => navigation.goBack()}>
          <Text style={styles.textTombol}>Kembali</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tombol, { backgroundColor: 'green' }]}
          onPress={() => console.log('export')}>
          <Text style={styles.textTombol}>export</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.garis} />
      <ScrollView>
        {
          data == null ? <DataKosong />
            : Object.keys(data).map((value, index) => {
              // console.log(value);
              // console.log(index);
              return (
                <View key={index}>
                  <View style={styles.container2}>
                    <TouchableOpacity
                      onPress={() => {
                        /* Menuju Detail Data */
                        navigation.navigate('DetailData', { id: value, datas: data[value] });
                      }}>
                      <View>
                        <Text style={styles.nama}>{data[value].namaBarang}</Text>
                        <Text style={styles.jumlahBarang}>{data[value].jumlahBarang}</Text>
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
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
    marginHorizontal: 30
  },
  header: {
    paddingHorizontal: 30,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
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
})

export default DetailRangkapData