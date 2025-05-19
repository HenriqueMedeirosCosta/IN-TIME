// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDP0avdMdysFk2jmFZRyEzhHAP4DlLZC8I",
  authDomain: "intime-b3961.firebaseapp.com",
  databaseURL: "https://in-time-9eed9-default-rtdb.firebaseio.com", // ATENÇÃO aqui!
  projectId: "intime-b3961",
  storageBucket: "intime-b3961.appspot.com",
  messagingSenderId: "1045131132053",
  appId: "1:1045131132053:web:c70b32a9c753c09b0aaf9c",
  measurementId: "G-NGYQFHBSGE"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
