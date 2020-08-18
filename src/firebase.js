import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAkX5Tloo5bS_37uE3xEihsEIcpQbJMTEQ",
  authDomain: "twitter-clone-e786b.firebaseapp.com",
  databaseURL: "https://twitter-clone-e786b.firebaseio.com",
  projectId: "twitter-clone-e786b",
  storageBucket: "twitter-clone-e786b.appspot.com",
  messagingSenderId: "433559896854",
  appId: "1:433559896854:web:f311c986407cf96f840637",
  measurementId: "G-4RH6LW2FQG"
};

const firebaseApp =firebase.initializeApp(firebaseConfig)

const db= firebaseApp.firestore();

export default db;