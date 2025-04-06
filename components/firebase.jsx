
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyA23VT-m1b0QIn8T51IcLU7eaFN2uAyjhs",
  authDomain: "dine-and-charge.firebaseapp.com",
  projectId: "dine-and-charge",
  storageBucket: "dine-and-charge.firebasestorage.app",
  messagingSenderId: "5410445629",
  appId: "1:5410445629:web:e245f9c0f28aa3e0710d54",
  measurementId: "G-B7GML8BX9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);