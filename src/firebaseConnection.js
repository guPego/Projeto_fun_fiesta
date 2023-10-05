// import firebase from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

let firebaseConfig = {
  apiKey: "AIzaSyCJDIlSdqxAfY9ayN-rh6Qw2aBw0vkqkqs",
  authDomain: "funfiesta-87f16.firebaseapp.com",
  databaseURL: "https://funfiesta-87f16-default-rtdb.firebaseio.com",
  projectId: "funfiesta-87f16",
  storageBucket: "funfiesta-87f16.appspot.com",
  messagingSenderId: "1032128978861",
  appId: "1:1032128978861:web:dc2cda1fc6836df11d4b24",
  measurementId: "G-1B080J96DQ"
};

// Initialize Firebase
if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;