// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAlJie8lUNZFYcPdxJPBHrmd96U6kKUNUE',
  authDomain: 'awesome-store-c4ea1.firebaseapp.com',
  projectId: 'awesome-store-c4ea1',
  storageBucket: 'awesome-store-c4ea1.appspot.com',
  messagingSenderId: '628530138918',
  appId: '1:628530138918:web:4b38862fe3915a39f2fbe7',
  measurementId: 'G-VC2BT8NN6W'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

