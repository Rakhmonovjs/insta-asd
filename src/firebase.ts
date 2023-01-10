import { initializeApp } from 'firebase/app'
import * as firebaseAuth from 'firebase/auth';
import * as fireStore from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyDqzvpm0rC4aoZ0grFG73CW5XF3kSiZTCc",
    authDomain: "asadbekramm.firebaseapp.com",
    databaseURL: "https://asadbekramm-default-rtdb.firebaseio.com",
    projectId: "asadbekramm",
    storageBucket: "asadbekramm.appspot.com",
    messagingSenderId: "1087464291269",
    appId: "1:1087464291269:web:00821b23628b4303d729ac",
    measurementId: "G-CQ6L1M8F5Z"
};

const app = initializeApp(firebaseConfig);


export const auth = firebaseAuth.getAuth(app);

export const store = fireStore.getFirestore(app);

export const storage = getStorage(app);


export { fireStore, firebaseAuth }
