import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import database from '@react-native-firebase/database';
import SelectDropdown from 'react-native-select-dropdown';

//ID Generator
function makeid(length) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export default function PostData({navigation}) {
  const [namaBarang, setNamaBarang] = useState('');
  const [jumlahBarang, setJumlahBarang] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [kondisi, setKondisi] = useState('');
  const [satuan, setSatuan] = useState('');
  const [waktu, setWaktu] = useState('');

  const satuan1 = ['Dos', 'Buah', 'Set', 'Unit'];
  const kondisi1 = ['Baik', 'Buruk'];

  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();
    var hours = new Date().getHours();
    var min = new Date().getMinutes();
    var sec = new Date().getSeconds();
    setWaktu(
      date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
    );
  }, []);

  //Data ditambahkan
  const submit = () => {
    if (
      namaBarang == '' ||
      jumlahBarang == '' ||
      lokasi == ''
      // kondisi == ''
    ) {
      Alert.alert('Error', 'Form tidak boleh kosong');
    } else {
      database()
        .ref(`/aset/${makeid(6)}`)
        .set({
          namaBarang: namaBarang,
          jumlahBarang: jumlahBarang,
          lokasi: lokasi,
          waktu: waktu,
          satuan: satuan,
          kondisi: kondisi,
        })
        .then(() => {
          Alert.alert('Sukses', 'Data Berhasil Ditambahkan');
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
            Post Data
          </Text>
        </View>

        <Text style={styles.label}>Nama Barang</Text>
        <TextInput
          placeholder="Meja Guru"
          style={styles.textInput}
          value={namaBarang}
          onChangeText={value => setNamaBarang(value)}
        />
        <Text style={styles.label}>Jumlah</Text>
        <TextInput
          placeholder="1"
          style={styles.textInput}
          keyboardType={'number-pad'}
          value={jumlahBarang}
          onChangeText={value => setJumlahBarang(value)}
        />

        <Text style={styles.label}>Lokasi</Text>
        <TextInput
          placeholder="Kantor Guru"
          style={styles.textInput}
          multiline={true}
          value={lokasi}
          onChangeText={value => setLokasi(value)}
        />

        <Text style={styles.label}>Waktu</Text>
        <Text
          style={styles.textInput}
          multiline={true}
          value={waktu}
          onChangeText={value => setWaktu(value)}>
          {waktu}
        </Text>

        <Text style={styles.label}>Satuan</Text>
        <SelectDropdown
          data={satuan1}
          buttonStyle={styles.textInput}
          defaultButtonText={(placeholder = '--Pilih Satuan--')}
          rowStyle={{
            backgroundColor: 'white',
            borderWidth: 1,
          }}
          // onChangeText={selectedItem => setKondisi(selectedItem)}
          onSelect={(selectedItem, index) => {
            setSatuan(selectedItem);
          }}
        />

        <Text style={styles.label}>Kondisi</Text>
        <SelectDropdown
          data={kondisi1}
          buttonStyle={styles.textInput}
          defaultButtonText={(placeholder = '--Baik atau Buruk--')}
          rowStyle={{
            backgroundColor: 'white',
            borderWidth: 1,
          }}
          // onChangeText={selectedItem => setKondisi(selectedItem)}
          onSelect={(selectedItem, index) => {
            setKondisi(selectedItem);
          }}
        />
        {/* <TextInput
          placeholder="Baik atau Buruk"
          style={styles.textInput}
          value={kondisi}
          onChangeText={value => setKondisi(value)}
        /> */}

        <TouchableOpacity style={styles.tombol} onPress={submit}>
          <Text style={styles.textTombol}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tombol}
          onPress={() => navigation.navigate('Home')}>
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
    marginTop: 10,
    marginBottom: 10,
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
