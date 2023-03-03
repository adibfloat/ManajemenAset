import firebase from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDrEnCZbP7JtI__SuXjz_rRkCBPXib__ZA',
  authDomain: 'manajemenaset-87c43.firebaseapp.com',
  projectId: 'manajemenaset-87c43',
  storageBucket: 'manajemenaset-87c43.appspot.com',
  messagingSenderId: '1081047668868',
  appId: '1:1081047668868:web:eaf1e0fc981793754ccad1',
};

if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}

const FIREBASE = firebase;

export default FIREBASE;
