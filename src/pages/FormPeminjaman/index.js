import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import database from '@react-native-firebase/database';
import SelectDropdown from 'react-native-select-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';

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

export default function FormPeminjaman({navigation}) {
  const [data, setData] = useState(null);
  const [namaPeminjam, setNamaPeminjam] = useState('');
  const [jumlahBarang, setJumlahBarang] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [listBarang, setListBarang] = useState([]);
  const [namaBarang, setNamaBarang] = useState('');
  const [tanggalPinjam, setTanggalPinjam] = useState(new Date());
  const [tanggalKembali, setTanggalKembali] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [showPicker2, setShowPicker2] = useState(false);

  const ruangan = [
    'kelas 10 ipa',
    'kelas 10 ips',
    'kelas 10 agama',
    'kelas 11 ipa',
    'kelas 11 ips',
    'kelas 11 agama',
    'kelas 12 ipa',
    'kelas 12 ips',
    'kelas 12 agama',
    'ruang guru',
    'ruang bk',
    'ruang tu',
    'uks',
    'lab komputer',
    'perpustakaan',
    'gudang',
  ];

  useEffect(() => {
    if (lokasi !== '') {
      database()
        .ref('aset')
        .orderByChild('lokasi')
        .startAt(lokasi.toLowerCase())
        .endAt(lokasi.toLowerCase())
        .once('value', dataSnapshot => {
          setData(dataSnapshot.val());
        });
    }
  }, [lokasi]);

  useEffect(() => {
    if (data !== null) {
      setListBarang([]);
      Object.keys(data).map(key => {
        setListBarang(value => [...value, data[key].namaBarang]);
      });
    } else {
      setListBarang([]);
    }
  }, [data]);

  //Data ditambahkan
  const submit = () => {
    if (
      namaBarang == '' ||
      jumlahBarang == '' ||
      lokasi == '' ||
      namaPeminjam == '' ||
      tanggalPinjam == '' ||
      tanggalKembali == ''
    ) {
      Alert.alert('Error', 'Form tidak boleh kosong');
    } else {
      let id = makeid(6);
      database()
        .ref(`/pinjaman/${id}`)
        .set({
          id,
          namaPeminjam,
          namaBarang: namaBarang,
          jumlahBarang: jumlahBarang,
          lokasi: lokasi,
          tanggalPinjam: tanggalPinjam.toDateString(),
          tanggalKembali: tanggalKembali.toDateString(),
          status: 'sedang dipinjam',
          tanggalpengembalian: 'null',
          deskripsi,
        })
        .then(() => {
          Alert.alert('Sukses', 'Data Berhasil Ditambahkan');
          navigation.reset({
            index: 0,
            routes: [{name: 'Home'}],
          });
        })
        .catch(err => {
          Alert.alert('Error', err.message);
        });
      //   database() // kalo mau update jumlah barangnya
      //     .ref('/users/123')
      //     .update({
      //       age: 32,
      //     })
      //     .then(() => console.log('Data updated.'));
    }
  };

  return (
    <ScrollView>
      <View style={styles.pages}>
        <View style={styles.header}>
          <Text style={{fontSize: 30, marginBottom: 30, color: 'black'}}>
            Tambah Data Peminjaman
          </Text>
        </View>

        <KeyboardAvoidingView behavior="padding">
          <Text style={styles.label}>Nama Peminjam</Text>
          <TextInput
            placeholder="adib"
            style={styles.textInput}
            value={namaPeminjam}
            onChangeText={value => setNamaPeminjam(value)}
          />

          <Text style={styles.label}>Lokasi</Text>
          <SelectDropdown
            data={ruangan}
            buttonStyle={styles.textInput}
            defaultButtonText={(placeholder = '--Pilih Lokasi--')}
            rowStyle={{
              backgroundColor: 'white',
              borderWidth: 1,
            }}
            onSelect={(selectedItem, index) => {
              setLokasi(selectedItem);
            }}
          />

          {listBarang.length > 0 ? (
            <>
              <Text style={styles.label}>Nama Barang</Text>
              <SelectDropdown
                data={listBarang}
                buttonStyle={styles.textInput}
                defaultButtonText={(placeholder = '--Pilih Barang--')}
                rowStyle={{
                  backgroundColor: 'white',
                  borderWidth: 1,
                }}
                onSelect={(selectedItem, index) => {
                  setNamaBarang(selectedItem);
                }}
              />

              <Text style={styles.label}>Jumlah</Text>
              <TextInput
                placeholder="1"
                style={styles.textInput}
                keyboardType={'number-pad'}
                value={jumlahBarang}
                onChangeText={value => setJumlahBarang(value)}
              />

              <Text style={styles.label}>Tanggal Pinjam</Text>
              {showPicker && (
                <DateTimePicker
                  value={tanggalPinjam}
                  display="default"
                  onChange={(event, selected) => {
                    if (selected) {
                      setTanggalPinjam(selected);
                    }
                    setShowPicker(false);
                  }}
                />
              )}
              <TextInput
                placeholder="Selected Date"
                value={tanggalPinjam.toDateString()}
                style={styles.textInput}
                onPressIn={() => setShowPicker(true)}
              />

              <Text style={styles.label}>Tanggal Kembali</Text>
              {showPicker2 && (
                <DateTimePicker
                  value={tanggalKembali}
                  display="default"
                  onChange={(event, selected) => {
                    if (selected) {
                      setTanggalKembali(selected);
                    }
                    setShowPicker2(false);
                  }}
                />
              )}
              <TextInput
                placeholder="Selected Date"
                value={tanggalKembali.toDateString()}
                style={styles.textInput}
                onPressIn={() => setShowPicker2(true)}
              />

              <Text style={styles.label}>Deskripsi</Text>
              <TextInput
                placeholder="deskripsi"
                style={styles.textInput}
                value={deskripsi}
                onChangeText={value => setDeskripsi(value)}
              />
            </>
          ) : (
            <Text style={styles.textDanger}>
              Silahkan pilih lokasi terlebih dahulu
            </Text>
          )}

          <TouchableOpacity style={styles.tombol} onPress={submit}>
            <Text style={styles.textTombol}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tombol}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.textTombol}>Kembali</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
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
  textDanger: {
    color: 'red',
  },
  buttonText: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});
