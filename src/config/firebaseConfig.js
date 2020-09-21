import * as firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "xxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxxxxxxxxxxxxx",
    databaseURL: "xxxxxxxxxxxxxxxxxxxxxx",
    projectId: "days-challenge-6adc3",
    storageBucket: "xxxxxxxxxxxxxxxxxxxxxx",
    messagingSenderId: "xxxxxxxxxxxxxxxxxxxxxx",
    appId: "1:xxxxxxxxxxxxxxx:web:xxxxxxxxxxxxxxxx",
    measurementId: "G-xxxxxxxxxxxxxxxxxxxxxx"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
