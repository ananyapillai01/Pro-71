import firebase from 'firebase'
require("@firebase/firestore")
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDZhB1uyf2J0uixKGyMTgrTZSE9RVvU3bI",
  authDomain: "complaint-forum-76f7f.firebaseapp.com",
  projectId: "complaint-forum-76f7f",
  storageBucket: "complaint-forum-76f7f.appspot.com",
  messagingSenderId: "134547003691",
  appId: "1:134547003691:web:f8397f9232b76704abcd6e"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

