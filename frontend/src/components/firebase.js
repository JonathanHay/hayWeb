import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyB9ieLlX-NqBljeb1lc8euARVnGqGtwnlc",
    authDomain: "hayweb-aba80.firebaseapp.com",
    databaseURL: "https://hayweb-aba80.firebaseio.com",
    projectId: "hayweb-aba80",
    storageBucket: "hayweb-aba80.appspot.com",
    messagingSenderId: "1026237608417",
    appId: "1:1026237608417:web:974274154b45b993"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;