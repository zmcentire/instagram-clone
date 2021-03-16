// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyCO5oDAALXqUhaNBuy9IvIYrO9gcnjdhPI",
    authDomain: "instagram-react-582a8.firebaseapp.com",
    projectId: "instagram-react-582a8",
    storageBucket: "instagram-react-582a8.appspot.com",
    messagingSenderId: "37567360349",
    appId: "1:37567360349:web:d7de9ccd508729c7828cb4",
    measurementId: "G-QN4H4CYYJ0"
}

const firebase = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };