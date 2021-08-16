import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyDgOKR34_gSInXfLRzYtjJTSbeL3RUkBKs",
    authDomain: "quiq-7095b.firebaseapp.com",
    projectId: "quiq-7095b",
    storageBucket: "quiq-7095b.appspot.com",
    messagingSenderId: "720017615412",
    appId: "1:720017615412:web:5951796840d49ba6bff861",
    measurementId: "G-TVJ0F83CRG"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);
 
  export default fire;