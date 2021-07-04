import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyCaPCWiwFEH7Yp0dKN6MpCcqW6PtNYQHlY',
  authDomain: 'sinappleboard.firebaseapp.com',
  projectId: 'sinappleboard',
  storageBucket: 'sinappleboard.appspot.com',
  messagingSenderId: '932904486134',
  appId: '1:932904486134:web:76f6e5cbcbefef016c98d7',
  measurementId: 'G-B0X3JBEZG0',
}

firebase.initializeApp(config)
