import * as firebase from "./firebase.js";

export function checkUserWithEmail(userEmail, userPassword) {
    firebase.auth.signInWithEmailAndPassword(userEmail, userPassword)
       .then((userCredential) => {
          let user = userCredential.user;
          console.log(user)
 
          goToThePageLogin()
       })
       .catch((err) => {
          let errorCode = err.code;
          let errorMensage = err.mensage;
 
          console.log(errorCode, errorMensage);
       })
}

export function searchUserWithLogin(login, password) {
    firebase.db.collection(firebase.COLLECTION).get()
     .then((snapshot) => {
         snapshot.forEach((usersData) => {
            let user = usersData.data();
            let userLogin = user.login;
            
            if(userLogin == login) {
               let email = user.email;
               let key = user.password;

               (password == key) ? checkUserWithEmail(email, key) : console.log("A senha esta errada");
            } else {
               console.log("Houve algum error")
            }
         })
     })
     .catch(err => {
         let errMensage = err.mensage;
         let errCode = err.code;

         console.log(errMensage, errCode);
     })
}

function goToThePageLogin() {
    window.location.href = "pageLogin.html";
}