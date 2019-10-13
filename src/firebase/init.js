  import firebase from 'firebase'
  import firestore from 'firebase/firestore'
  
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAFAkHeskfyv5TNUIDwdYFP2IRtl5NIkCs",
    authDomain: "geo-loc-4e61e.firebaseapp.com",
    databaseURL: "https://geo-loc-4e61e.firebaseio.com",
    projectId: "geo-loc-4e61e",
    storageBucket: "",
    messagingSenderId: "917550789789",
    appId: "1:917550789789:web:24306ee5a7c0980f6e9074",
    measurementId: "G-3PZRZQCYNZ"
  };
  // Initialize Firebase
 const firebaseApp = firebase.initializeApp(firebaseConfig);

 export default firebaseApp.firestore();