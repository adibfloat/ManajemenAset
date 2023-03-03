import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {InputData} from '../../components';

const TambahKontak = () => {
  return (
    <View style={styles.pages}>
      <InputData
        label="nama"
        placeholder="Masukkan Nama"
        onChangeText={this.onChangeText}
        value={this.state.nama}
        namaState="nama"
      />
      <InputData
        label="nomorHP"
        placeholder="Masukkan Nomor HP"
        keyboardType="number-pad"
        onChangeText={this.onChangeText}
        value={this.state.nomorHP}
        namaState="nomorHP"
      />
      <InputData
        label="alamat"
        placeholder="Masukkan Alamat"
        isTextArea={true}
        onChangeText={this.onChangeText}
        value={this.state.alamat}
        namaState="alamat"
      />
      <TouchableOpacity style={styles.tombol} onPress={() => this.onSubmit}>
        <Text style={styles.textTombol}>Masukkan</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TambahKontak;

// export default class TambahKontak extends Component {

//   render() {
//     return (
//       <View></View>
//     );
//   }
// }

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    padding: 30,
  },
  tombol: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textTombol: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
