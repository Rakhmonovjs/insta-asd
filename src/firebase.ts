import { initializeApp } from 'firebase/app'
import * as firebaseAuth from 'firebase/auth';
import * as fireStore from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyBB6sy_2ncRQEK0AZ9XA5wqKCz6XWwOtNs",
    authDomain: "adas-49f2b.firebaseapp.com",
    projectId: "adas-49f2b",
    storageBucket: "adas-49f2b.appspot.com",
    messagingSenderId: "584265021770",
    appId: "1:584265021770:web:04eed310562951322629b3",
    measurementId: "G-F9EDB85ZEV"
};

const app = initializeApp(firebaseConfig);


export const auth = firebaseAuth.getAuth(app);

export const store = fireStore.getFirestore(app);

export const storage = getStorage(app);


export { fireStore, firebaseAuth }
