import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

 const firebaseConfig = {
    apiKey: "AIzaSyB-eIkpjIiQx3hs8bTzhN5X5pFVXjWn0_E",
    authDomain: "eshop-182b0.firebaseapp.com",
    projectId: "eshop-182b0",
    storageBucket: "eshop-182b0.appspot.com",
    messagingSenderId: "315639571400",
    appId: "1:315639571400:web:517b11d09f4c42b6a316fd",
    measurementId: "G-KLEG2L7XYZ"
  };

  const app=initializeApp(firebaseConfig);
  export const auth= getAuth(app);
  export const db=getFirestore(app)
export default app;