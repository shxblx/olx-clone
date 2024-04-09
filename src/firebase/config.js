import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBoZCzX-T0h7DRJZ7FR2blHoWcKaYTLbU0",
  authDomain: "olx-clone-78833.firebaseapp.com",
  projectId: "olx-clone-78833",
  storageBucket: "olx-clone-78833.appspot.com",
  messagingSenderId: "334544078358",
  appId: "1:334544078358:web:cb8442d835c6b1dd4cd737",
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();

export default app;
