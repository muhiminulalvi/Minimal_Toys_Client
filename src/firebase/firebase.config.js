// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7qrDWfSxUJLnew4rq-NWHExfOd2TaKHU",
  authDomain: "minimaltoys-22b8c.firebaseapp.com",
  projectId: "minimaltoys-22b8c",
  storageBucket: "minimaltoys-22b8c.appspot.com",
  messagingSenderId: "446165068716",
  appId: "1:446165068716:web:ba30d9336ee16852b8a809"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app