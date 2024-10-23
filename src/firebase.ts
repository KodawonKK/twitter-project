// firebase.tsx
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCe3LH9iqSr9DimRKWv7U_PuBQPw4QHBss",
  authDomain: "twitterproject-a7594.firebaseapp.com",
  projectId: "twitterproject-a7594",
  storageBucket: "twitterproject-a7594.appspot.com",
  messagingSenderId: "438884034500",
  appId: "1:438884034500:web:638266f4283a5bbdfea691",
  measurementId: "G-1ML43LJP9J"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
