import firebase from 'firebase';

require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyDKLm5VLR6IlTLXOskjqTbz75O6_M9tab8",
    authDomain: "recipes-app-4a158.firebaseapp.com",
    projectId: "recipes-app-4a158",
    storageBucket: "recipes-app-4a158.appspot.com",
    messagingSenderId: "603175617866",
    appId: "1:603175617866:web:c957c9510d71cccd07adb3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();