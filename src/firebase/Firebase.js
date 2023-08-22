import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDek_fTtV1wKT-8dX-Sl5ucAIVLC2Vu8rw",
  authDomain: "auth-production-611f9.firebaseapp.com",
  projectId: "auth-production-611f9",
  storageBucket: "auth-production-611f9.appspot.com",
  messagingSenderId: "685181058484",
  appId: "1:685181058484:web:bc8f6d7f777c08645d46e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
