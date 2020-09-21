import * as firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDwBGWYmn8o58QuvHPvjqeX9dpfCiXisiE",
  authDomain: "days-challenge-6adc3.firebaseapp.com",
  databaseURL: "https://days-challenge-6adc3.firebaseio.com",
  projectId: "days-challenge-6adc3",
  storageBucket: "days-challenge-6adc3.appspot.com",
  messagingSenderId: "465551494926",
  appId: "1:465551494926:web:8f25118dcf24816857115f",
  measurementId: "G-Y0SY5YEKZN",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();