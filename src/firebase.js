import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDeaG1z0qZ_lGpfp4UupmB6VlCZXffC2BM",
    authDomain: "facebook-clone-cdb6f.firebaseapp.com",
    projectId: "facebook-clone-cdb6f",
    storageBucket: "facebook-clone-cdb6f.appspot.com",
    messagingSenderId: "657919294059",
    appId: "1:657919294059:web:8db0e86fb436c3dcefcf2e",
    measurementId: "G-S1NJNSR6T7"
  }; 

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;