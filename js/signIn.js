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
function goToThePageLogin() {
    window.location.href = "pageLogin.html";
}