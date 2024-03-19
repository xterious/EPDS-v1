import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCOtaymQVXt8FfCVHE9_qaqbcYTmD7LQdc",
  authDomain: "aluminus-394905.firebaseapp.com",
  projectId: "aluminus-394905",
  storageBucket: "aluminus-394905.appspot.com",
  messagingSenderId: "431634958533",
  appId: "1:431634958533:web:2c9608638cf95fc18308ac",
  measurementId: "G-ENYE04NWJ0",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
