import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBorZsUDERZC90ZFz-QLQkDZqX8txNdUls",
  authDomain: "atividade-somativa-1f34d.firebaseapp.com",
  projectId: "atividade-somativa-1f34d",
  storageBucket: "atividade-somativa-1f34d.firebasestorage.app",
  messagingSenderId: "351887177902",
  appId: "1:351887177902:web:6280fec13827fdcc1ed53f",
  measurementId: "G-20LERDLVHR"
};

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;