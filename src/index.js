import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBeDri7hluuFy5sB1i3NReAc4zqwcPy5xA",
  authDomain: "padel-shop-coderhouse.firebaseapp.com",
  projectId: "padel-shop-coderhouse",
  storageBucket: "padel-shop-coderhouse.appspot.com",
  messagingSenderId: "492040153085",
  appId: "1:492040153085:web:637826193fb112b81ddb94",
  measurementId: "G-0CG8554GDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
