// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyD12yMOrmIGUvPe003RI7GBQfv76-WrlDg',
	authDomain: 'fir-blog-42f2d.firebaseapp.com',
	projectId: 'fir-blog-42f2d',
	storageBucket: 'fir-blog-42f2d.appspot.com',
	messagingSenderId: '529565330080',
	appId: '1:529565330080:web:3d2eab97d5400999e2b7c5'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

const db = getFirestore(app);

export const blogCollectionReference = collection(db, 'posts');

export const storage = getStorage(app);
