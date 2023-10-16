import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDmRANdd6r771Dlkiw_fWlqIIIjhwZdqlQ",
    authDomain: "tamir-gino.firebaseapp.com",
    projectId: "tamir-gino",
    storageBucket: "tamir-gino.appspot.com",
    messagingSenderId: "242272549544",
    appId: "1:242272549544:web:f498668f4a097ccea5a09d",
    measurementId: "G-KENYLKHLGK"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
