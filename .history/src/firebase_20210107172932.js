import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBVotB54n_fXSMWye252b0K__OaPtilgho",
  authDomain: "instagram-clone-f951d.firebaseapp.com",
  projectId: "instagram-clone-f951d",
  storageBucket: "instagram-clone-f951d.appspot.com",
  messagingSenderId: "53516475414",
  appId: "1:53516475414:web:71b79dfc9145ad364a2937",
  measurementId: "G-692TDW2GJQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, storage };
export default db;
