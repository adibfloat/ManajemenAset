import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {storeData} from '../../utils/localStorage';

const Registrasi = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [messageErrorPassword, setMessageErrorPassword] = useState(null);
  const [messageErrorEmail, setMessageErrorEmail] = useState(null);

  //Registrasi
  const OnRegisterPress = () => {
    setMessageErrorEmail(null);
    setMessageErrorPassword(null);
    if (email == '' || password == '') {
      Alert.alert('Error', 'Form tidak boleh kosong');
    } else {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          setMessageErrorPassword(null);
          Alert.alert('Berhasil', 'Buat akun berhasil', [
            {
              text: 'Ok',
              onPress: () => {
                storeData('user', {email: userCredential.user.email});
                navigation.replace('Home')
              },
            }
          ]);
        })
        .catch(err => {
          setError(true);
          if (
            err.message ==
            '[auth/weak-password] The given password is invalid. [ Password should be at least 6 characters ]'
          ) {
            setMessageErrorPassword('Password harus 6 karakter atau lebih');
          }
          if (
            err.message ==
            '[auth/invalid-email] The email address is badly formatted.'
          ) {
            setMessageErrorEmail('Format email salah');
          }

          if (
            err.message ==
            '[auth/email-already-in-use] The email address is already in use by another account.'
          ) {
            setMessageErrorEmail('Email sudah ada');
          }
          // console.log(err.message);
        });
    }
  };
  // console.log(messageErrorEmail);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#e8ecf4'}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            alt=""
            resizeMode="contain"
            style={styles.headerImg}
            // source={logo}
          />

          <Text style={styles.title}>
            <Text style={{color: '#075eec'}}>Registrasi</Text>
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Alamat Email</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              placeholderTextColor="#6b7280"
              style={[
                styles.inputControl,
                {borderColor: error ? 'red' : 'black'},
              ]}
              value={email}
              onChangeText={text => {
                setEmail(text);
              }}
              // onChangeText={email => setEmail(email)}
              // placeholder="adibku@gmail.com"
            />
            {messageErrorEmail ? (
              <Text style={styles.textError}>{messageErrorEmail}</Text>
            ) : (
              ''
            )}
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>

            <TextInput
              autoCorrect={false}
              placeholderTextColor="#6b7280"
              style={[
                styles.inputControl,
                {borderColor: error ? 'red' : 'black'},
              ]}
              secureTextEntry={true}
              value={password}
              onChangeText={text => {
                setPassword(text);
              }}
              // onChangeText={password => setPassword(password)}
              // placeholder="256590"
            />
            {messageErrorPassword ? (
              <Text style={styles.textError}>{messageErrorPassword}</Text>
            ) : (
              ''
            )}
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity
              title="Submit"
              onPress={OnRegisterPress}
              // onPress={() => {
              //   navigation.replace('Home', {email: email});
              // }}
            >
              <View style={styles.btn}>
                <Text style={styles.btnText}>Daftar</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.formFooter}>
              Sudah memiliki akun?{' '}
              <Text style={{textDecorationLine: 'underline'}}>Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Registrasi;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    marginVertical: 36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 36,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    textAlign: 'center',
  },
  form: {
    marginBottom: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 0.5,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
  textError: {
    color: 'red',
  },
});
