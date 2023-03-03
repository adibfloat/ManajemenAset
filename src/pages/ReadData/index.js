import {faEdit, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Aset = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Text style={styles.nama}>meja</Text>
        <Text style={styles.lokasi}>kelas 1</Text>
      </View>
      <View style={styles.icon}>
        <FontAwesomeIcon
          style={{marginRight: 15}}
          icon={faEdit}
          color={'blue'}
          size={25}
        />
        <FontAwesomeIcon icon={faTimes} color={'red'} size={25} />
      </View>
    </TouchableOpacity>
  );
};

export default Aset;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 20,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 20,
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
});
