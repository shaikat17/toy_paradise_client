// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.VITE_API_KEY,
  authDomain: import.meta.VITE_AUTH_DOMAIN,
  projectId: import.meta.VITE_PROJECT_ID,
  storageBucket: import.meta.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.VITE_MESSAGE_ID,
  appId: import.meta.VITE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app