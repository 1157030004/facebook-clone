import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMH5aQkMTcYN89cyvxS1hNZYukDCmzE8E",
  authDomain: "facebook-clone-89be6.firebaseapp.com",
  databaseURL: "https://facebook-clone-89be6.firebaseio.com",
  projectId: "facebook-clone-89be6",
  storageBucket: "facebook-clone-89be6.appspot.com",
  messagingSenderId: "938325800159",
  appId: "1:938325800159:web:2e402a4eca0af17d12256a",
  measurementId: "G-LGV12ZQYGF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
