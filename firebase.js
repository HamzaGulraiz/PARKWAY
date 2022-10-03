// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAB2OzpqquMKsz5LBBIT1kfIt7j-C8NZzM",

  authDomain: "parkway-8360c.firebaseapp.com",

  projectId: "parkway-8360c",

  storageBucket: "parkway-8360c.appspot.com",

  messagingSenderId: "411705442109",

  appId: "1:411705442109:web:8223c620f0e21a86178f54",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
