import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA4vozih_w-Mewbe4vp17K0qdGcBoLyvxs",
  authDomain: "formulario-nashe.firebaseapp.com",
  projectId: "formulario-nashe",
  storageBucket: "formulario-nashe.appspot.com",
  messagingSenderId: "39282673925",
  appId: "1:39282673925:web:c814c7575c7c7143ec8f6c"
};

const app = initializeApp(firebaseConfig);

const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
