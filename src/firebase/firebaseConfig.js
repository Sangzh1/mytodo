import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaNi9zgbTw63LAW1wuUOu48-egqGRfA7o",
  authDomain: "my-store-55878.firebaseapp.com",
  projectId: "my-store-55878",
  storageBucket: "my-store-55878.appspot.com",
  messagingSenderId: "602035768898",
  appId: "1:602035768898:web:602ab3f2563fecf25e27db",
};

// initiaize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);

export { auth, googleProvider };
