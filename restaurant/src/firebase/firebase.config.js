// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//console.log(import.meta.env.VITE_SOME_KEY) // 123

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_APIKEY,
  // authDomain: import.meta.env.VITE_AUTHDOMAIN,
  // projectId: import.meta.env.VITE_PROJECTID,
  // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  // appId: import.meta.env.VITE_APPID

  apiKey: "AIzaSyATrzqVSvmnIvqQfjLGVI_BwOqKrG5OHzM",
  authDomain: "food-ordering-site-a24b2.firebaseapp.com",
  projectId: "food-ordering-site-a24b2",
  storageBucket: "food-ordering-site-a24b2.appspot.com",
  messagingSenderId: "616122830879",
  appId: "1:616122830879:web:d630dcff39f1a314ac052a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;