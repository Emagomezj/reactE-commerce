import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDwX77_MsaMm7ud0UJ89gGrcDjzhtawijc",
  authDomain: "react-coder-c2210.firebaseapp.com",
  projectId: "react-coder-c2210",
  storageBucket: "react-coder-c2210.appspot.com",
  messagingSenderId: "452626372902",
  appId: "1:452626372902:web:dd35facaa3068a851289e7",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
