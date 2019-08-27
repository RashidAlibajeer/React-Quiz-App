import firebase from 'firebase/app'
import 'firebase/auth'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDDbtrQ_FGb_Hw1vdZGvmxL1gbqw2q66iU",
    authDomain: "quiz-rc.firebaseapp.com",
    databaseURL: "https://quiz-rc.firebaseio.com",
    projectId: "quiz-rc",
    storageBucket: "",
    messagingSenderId: "276556409594",
    appId: "1:276556409594:web:2b69f8b751e9bf52"
  };

  // Initialize Firebase
 const firebaseApp= firebase.initializeApp(firebaseConfig);



 const provider = new firebase.auth.FacebookAuthProvider();
export{
  firebaseApp,provider
}