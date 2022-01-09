import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAhIIVZqKGzMDwNJGmCxYmG1jaFQRGXnZI',
  authDomain: 'streamy-c6bbe.firebaseapp.com',
  projectId: 'streamy-c6bbe',
  storageBucket: 'streamy-c6bbe.appspot.com',
  appId: '1:851999885383:web:fa80aba3146925691e0962',
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
