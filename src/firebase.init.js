
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyACHaNKjsWyaWgRktCHMaYU_j6mO_r2Pbs",
    authDomain: "ema-john-simple-696a3.firebaseapp.com",
    projectId: "ema-john-simple-696a3",
    storageBucket: "ema-john-simple-696a3.appspot.com",
    messagingSenderId: "1040889309388",
    appId: "1:1040889309388:web:7ccc1b5bbbe7a9076d7a69"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app)

export default app;