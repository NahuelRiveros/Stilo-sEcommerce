// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt6wHEk_IHJ2ZdnjX2oxWKdNm-0IkQrSU",
  authDomain: "stilo-s-d7e27.firebaseapp.com",
  projectId: "stilo-s-d7e27",
  storageBucket: "stilo-s-d7e27.appspot.com",
  messagingSenderId: "947939039903",
  appId: "1:947939039903:web:7c15788537f6d14a4720aa",
  measurementId: "G-VPGT6TE5T8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);