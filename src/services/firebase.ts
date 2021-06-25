import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAKZqh1N9JZoCdDK73juJTKfq0f9Ry9BDw",
    authDomain: "letmeask-nlw-5k.firebaseapp.com",
    databaseURL: "https://letmeask-nlw-5k-default-rtdb.firebaseio.com",
    projectId: "letmeask-nlw-5k",
    storageBucket: "letmeask-nlw-5k.appspot.com",
    messagingSenderId: "809976380754",
    appId: "1:809976380754:web:991c43794a1b03eb2dce8b"
  };

  firebase.initializeApp(firebaseConfig);

 export const auth = firebase.auth();
 export const database = firebase.database();