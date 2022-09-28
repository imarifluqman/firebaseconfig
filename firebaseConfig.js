import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyCPDnKkKjf0UQcUPM2k7gL4P_lpdyWHxoA",
    authDomain: "smittestweb.firebaseapp.com",
    projectId: "smittestweb",
    storageBucket: "smittestweb.appspot.com",
    messagingSenderId: "604678797820",
    appId: "1:604678797820:web:3f2cd2b21725e29c7ada79",
    measurementId: "G-XCFWF8EQZQ"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);