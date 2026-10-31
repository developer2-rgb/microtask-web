// Firebase SDK Modules (CDN v10+)
import { initializeApp } from "https://gstatic.com";
import { getAuth } from "https://gstatic.com";
import { getFirestore } from "https://gstatic.com";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO0K8fClNWZT6O9rb9V2Dqh_8kRKU10vU",
  authDomain: "://firebaseapp.com",
  projectId: "microtaskweb",
  storageBucket: "microtaskweb.firebasestorage.app",
  messagingSenderId: "717262085971",
  appId: "1:717262085971:web:f7a2ca017d1f4931400ba6",
  measurementId: "G-9739D43C55"
};

// Initialize Firebase App & Services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
