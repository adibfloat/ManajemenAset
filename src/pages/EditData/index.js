import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import database from '@react-native-firebase/database';
import SelectDropdown from 'react-native-select-dropdown';

export default function PostData({navigation, route}) {
  const {id, namaBarang, jumlahBarang, kondisi, lokasi, satuan, waktu} =
    route.params;
  // const result = (...value, route.params);
  console.log(id);
  const [namaBarang1, setNamaBarang1] = useState(namaBarang);
  const [jumlahBarang1, setJumlahBarang1] = useState(jumlahBarang);
  const [lokasi1, setLokasi1] = useState(lokasi);
  const [kondisi1, setKondisi1] = useState(kondisi);
  const [satuan1, setSatuan1] = useState(satuan);
  // const kondisi2 = [kondisi];
  const kondisi2 = ['Baik', 'Buruk'];
  const satuan2 = ['Dos', 'Buah', 'Set', 'Unit'];

  //Data diubah
  const submit = () => {
    if (namaBarang1 == '' || jumlahBarang1 == '' || lokasi1 == '') {
      Alert.alert('Error', 'Form tidak boleh kosong');
    } else {
      database()
        .ref(`/aset/${id}`)
        .set({
          namaBarang: namaBarang1,
          jumlahBarang: jumlahBarang1,
          lokasi: lokasi1,
          waktu: waktu,
          satuan: satuan1,
          kondisi: kondisi1,
        })
        .then(() => {
          Alert.alert('Sukses', 'Data Berhasil Diubah');
        })
        .catch(err => {
          Alert.alert('Error', err.message);
        });
    }
  };

  return (
    <>
      <View style={styles.pages}>
        <View style={styles.header}>
          <Text style={{fontSize: 30, marginBottom: 30, color: 'black'}}>
            Edit Data
          </Text>
        </View>

        <Text style={styles.label}>Nama Barang</Text>
        <TextInput
          placeholder="Meja Guru"
          style={styles.textInput}
          value={namaBarang1}
          onChangeText={value => setNamaBarang1(value)}
        />
        <Text style={styles.label}>Jumlah</Text>
        <TextInput
          placeholder="1"
          style={styles.textInput}
          keyboardType={'number-pad'}
          value={jumlahBarang1}
          onChangeText={value => setJumlahBarang1(value)}
        />

        <Text style={styles.label}>Lokasi</Text>
        <TextInput
          placeholder="Kantor Guru"
          style={styles.textInput}
          multiline={true}
          value={lokasi1}
          onChangeText={value => setLokasi1(value)}
        />

        <Text style={styles.label}>Satuan</Text>
        <SelectDropdown
          data={satuan2}
          buttonStyle={styles.textInput}
          defaultButtonText={(placeholder = satuan1)}
          rowStyle={{
            backgroundColor: 'white',
            borderWidth: 1,
          }}
          // onChangeText={selectedItem => setKondisi(selectedItem)}
          onSelect={(selectedItem, index) => {
            setSatuan1(selectedItem);
          }}
        />

        <Text style={styles.label}>Kondisi</Text>
        <SelectDropdown
          data={kondisi2}
          defaultButtonText={(placeholder = kondisi1)}
          buttonStyle={styles.textInput}
          rowStyle={{
            backgroundColor: 'white',
            borderWidth: 1,
          }}
          onSelect={(selectedItem, index) => {
            setKondisi1(selectedItem);
          }}
        />
        {/* <TextInput
        
          placeholder="Baik atau Buruk"
          style={styles.textInput}
          value={kondisi1}
          onChangeText={value => setKondisi1(value)}
        /> */}

        <TouchableOpacity style={styles.tombol} onPress={submit}>
          <Text style={styles.textTombol}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tombol}
          onPress={() => navigation.navigate('ReadData')}>
          <Text style={styles.textTombol}>Kembali</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    padding: 30,
    backgroundColor: '#e8ecf4',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  tombol: {
    backgroundColor: '#075eec',
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 0,
  },
  textTombol: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  header: {
    alignItems: 'center',
  },
});

{
  /* <View style={styles.container}>
        <View style={styles.header}>
          <Text>Post Data</Text>
        </View>
        <View style={styles.content}>
          <TextInput
            placeholder="Masukkan Author"
            value={author}
            onChangeText={value => setAuthor(value)}
            style={styles.input}
          />
          <TextInput
            placeholder="Masukkan title"
            value={title}
            onChangeText={value => setTitle(value)}
            style={styles.input}
          />
          <TextInput
            placeholder="Masukkan description"
            value={description}
            onChangeText={value => setDescription(value)}
            style={styles.input}
          />
          <TextInput
            placeholder="Masukkan country"
            value={country}
            onChangeText={value => setCountry(value)}
            style={styles.input}
          />

          <Button title={button} onPress={submit} />
        </View>
      </View> */
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   header: {
//     paddingTop: 50,
//     paddingHorizontal: 16,
//     backgroundColor: 'white',
//     alignItems: 'center',
//   },
//   content: {
//     paddingHorizontal: 10,
//   },
//   input: {
//     borderWidth: 1,
//     paddingVertical: 10,
//     paddingHorizontal: 10,
//     borderRadius: 6,
//     marginBottom: 10,
//     marginTop: 10,
//   },
// });

// import React from 'react';
// import {
//   StyleSheet,
//   SafeAreaView,
//   View,
//   Image,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   Button,
// } from 'react-native';
// import logo from '../assets/images/user.png';

// const Buat = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.textTitle}>Buat Data</Text>
//       {/* <Text>Masukkan Anggota</Text> */}
//       <TextInput placeholder="Nama Lengkap" style={styles.input} />
//       <TextInput placeholder="Email" style={styles.input} />
//       <TextInput placeholder="Bidang" style={styles.input} />
//       <Button title="Simpan" />
//       <View style={styles.line} />

//       <View style={styles.itemContainer}>
//         <Image source={logo} style={styles.avatar} />
//         <View style={styles.desc}>
//           <Text style={styles.descName}>Nama Lengkap</Text>
//           <Text style={styles.descEmail}>Email</Text>
//           <Text style={styles.descBidang}>Bidang</Text>
//         </View>
//         <Text style={styles.delete}>X</Text>
//       </View>

//       <View style={styles.itemContainer}>
//         <Image source={logo} style={styles.avatar} />
//         <View style={styles.desc}>
//           <Text style={styles.descName}>Nama Lengkap</Text>
//           <Text style={styles.descEmail}>Email</Text>
//           <Text style={styles.descBidang}>Bidang</Text>
//         </View>
//         <Text style={styles.delete}>X</Text>
//       </View>
//     </View>
//   );
// };

// export default Buat;

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   textTitle: {
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   line: {
//     height: 2,
//     backgroundColor: 'black',
//     marginVertical: 20,
//   },
//   input: {
//     borderWidth: 1,
//     marginBottom: 12,
//     borderRadius: 25,
//     paddingHorizontal: 18,
//   },
//   avatar: {
//     width: 80,
//     height: 80,
//     borderRadius: 100,
//   },
//   itemContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   desc: {
//     marginLeft: 18,
//     flex: 1,
//   },
//   descName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   descEmail: {
//     fontSize: 16,
//   },
//   descBidang: {
//     fontSize: 12,
//     marginTop: 8,
//   },
//   delete: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'red',
//   },
// });
