import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDfMCVaysEN_9DIhlrpnZrfgbypBSVBy-4",
    authDomain: "prodraft-17a44.firebaseapp.com",
    projectId: "prodraft-17a44",
    storageBucket: "prodraft-17a44.appspot.com",
    messagingSenderId: "876002977623",
    appId: "1:876002977623:web:21a6b5de608599f76ac012",
    measurementId: "G-SXRBGDC2GB"
};



export const app = initializeApp(firebaseConfig)
export const database = getFirestore(app)



