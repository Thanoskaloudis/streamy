import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAhIIVZqKGzMDwNJGmCxYmG1jaFQRGXnZI',
  authDomain: 'streamy-c6bbe.firebaseapp.com',
  projectId: 'streamy-c6bbe',
  storageBucket: 'streamy-c6bbe.appspot.com',
  appId: '1:851999885383:web:fa80aba3146925691e0962',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const usersCollection = db.collection('users');

export {
  auth,
  db,
  usersCollection,
};
