import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  getAuth,

} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDdubuWq_NuvdBMhb-44ZOcZbjjjwYVzZM',
  authDomain: 'tarotlyfe-1e48f.firebaseapp.com',
  projectId: 'tarotlyfe-1e48f',
  storageBucket: 'tarotlyfe-1e48f.appspot.com',
  messagingSenderId: '1094887594432',
  appId: '1:1094887594432:web:c35dc29aa7d2db941c9025',
  measurementId: 'G-F78SRBF95M',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)

