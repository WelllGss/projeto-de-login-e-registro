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

function saveUserDataInDataBase(login, email, phoneNumber, password) {
  phoneNumber = phoneNumber.toString()

  db.collection(COLLECTION).add({
    login: login,
    email: email,
    phone: phoneNumber,
    password: password
  })
   .then(() => {
      console.log("Usuário salvo com sucesso")
   })
   .catch(err => {
      console.log("Houve um erro", err)
   })
}

function checkUserWithEmail(userEmail, userPassword) {
  db.collection(COLLECTION).get()
   .then(snapshot => {
      snapshot.forEach(users => {
          let dataUser = users.data()

          const { email, password, ...rest } = dataUser

          if(email == userEmail && password == userPassword) {
              console.log("Usuário encontrado")
          } else {
              console.log("Usuário nao existe")
          }
      })
   })
   .catch(err => {
      console.log(err)
   })
}

function checkUserWithLogin(userLogin, userPassword) {
  db.collection(COLLECTION).get()
   .then(snapshot => {
      snapshot.forEach(users => {
          let dataUser = users.data()

          const { login, password, ...rest } = dataUser

          if(login == userLogin && password == userPassword) {
            console.log("Usuário encontrado")
          } else {
            console.log("Usuário nao existe")
          }
      })
   })
   .catch(err => {
      console.log(err)
   })
}