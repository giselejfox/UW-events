import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS
import "bootstrap/dist/css/bootstrap.css";
import './index.css';

import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFeBFpUdhIME9sIBj9RD16Y5m1j6yrFXw",
  authDomain: "uw-events.firebaseapp.com",
  projectId: "uw-events",
  storageBucket: "uw-events.appspot.com",
  messagingSenderId: "782558893032",
  appId: "1:782558893032:web:92c3e8ad54235a2ce8ca5d",
  measurementId: "G-PBKCWX9F30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App db={db} />
  </React.StrictMode>
);
