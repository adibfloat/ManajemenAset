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

export default function PostData({navigation}) {
  const [namaBarang, setNamaBarang] = useState('');
  const [jumlahBarang, setJumlahBarang] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [kondisi, setKondisi] = useState('');
  const [button, setButton] = useState('simpan');

  // const base_url = 'https://demoapi-hilmy.sanbercloud.com/api/news-created';
  // const token_api =
  //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZGVtb2FwaS1oaWxteS5zYW5iZXJjbG91ZC5jb21cL2FwaVwvbG9naW4iLCJpYXQiOjE2NzYzMjk1NzEsImV4cCI6MTczNjMyOTUxMSwibmJmIjoxNjc2MzI5NTcxLCJqdGkiOiJwZHBacUVacTV6ME93amUyIiwic3ViIjoyLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.EOuQmqnBXi84NSw82IDZTliRA0lv6b4WgyIA-XhJ6pk';

  const submit = async () => {
    const data = {
      namaBarang: namaBarang,
      jumlahBarang: jumlahBarang,
      lokasi: lokasi,
      kondisi: kondisi,
    };
    console.log(data);
    try {
      const respone = await fetch(base_url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token_api}`,
        },
        body: JSON.stringify(data),
      });
      const json = await respone.json();
      console.log('Data berhasil disimpan', json);
      setNamaBarang('');
      setJumlahBarang('');
      setLokasi('');
      setKondisi('');
      Alert.alert('Data berhasil disimpan', json);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View style={styles.pages}>
        <View style={styles.header}>
          <Text style={{fontSize: 30, marginBottom: 30}}>Post Data</Text>
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

        <Text style={styles.label}>Kondisi</Text>
        <TextInput
          placeholder="Baik atau Buruk"
          style={styles.textInput}
          value={kondisi}
          onChangeText={value => setKondisi(value)}
        />

        <TouchableOpacity style={styles.tombol} title={button} onPress={submit}>
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
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
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
