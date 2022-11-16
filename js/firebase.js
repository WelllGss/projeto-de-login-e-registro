const firebaseConfig = {
    apiKey: "AIzaSyAIqW9eV3JPWtTukDSIvvfgtId1JD8H2Rs",
    authDomain: "to-do-list-a2d5c.firebaseapp.com",
    projectId: "to-do-list-a2d5c",
    storageBucket: "to-do-list-a2d5c.appspot.com",
    messagingSenderId: "810571833712",
    appId: "1:810571833712:web:b93f984be01051558c6fb5",
    measurementId: "G-02S18C05X7"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({
    experimentalForceLongPolling: true,
    merge: true,
});

const COLLECTION = "users-data-base";

const db = firebase.firestore();
const auth = firebase.auth();

function registerUserWithEmailAndPassword(email, password) {
    auth.createUserWithEmailAndPassword(email, password)
     .then(resolve => {
      console.log("usuário criado", resolve)
     })
     .catch(err => {
      if(err.message.includes("Password")){
        alert("Sua senha está muito fraca")
      } else {
        alert("Houve algum erro:", err)
      }
     })
}