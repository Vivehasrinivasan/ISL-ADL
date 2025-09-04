// backend/firebase-init.js
const firebaseConfig = {
  apiKey: "AIzaSyBbEo9kO9NEA14kZvNnmCygcdz0m_vcqHw",
  authDomain: "buddysign-3fd38.firebaseapp.com",
  projectId: "buddysign-3fd38",
  storageBucket: "buddysign-3fd38.appspot.com", // ⚠️ notice it's .appspot.com, not .firebasestorage.app
  messagingSenderId: "734252196949",
  appId: "1:734252196949:web:53f58eb86c68c32dda60dc",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Define global auth & db
const auth = firebase.auth();
const db = firebase.firestore();
