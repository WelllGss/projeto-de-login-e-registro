import * as firebase from "./firebase.js";

export function signUpUserInDatabase() {
    const registerLogin = document.querySelector(".registerPersonalInformations input[type='text']").value
    const registerEmail = document.querySelector(".registerPersonalInformations input[type='email']").value
    const registerPhoneNumber = document.querySelector(".registerPersonalInformations input[type='number']").value
    const registerPassword = document.querySelector(".password").value
    const equalRegisterPassword = document.querySelector(".re-password").value

    if(verifyToEqualPassword(registerPassword, equalRegisterPassword) && verifyValidEmail(registerEmail)) {
        registerUserWithEmailAndPassword(registerEmail, registerPassword)
        saveUserDataInDataBase(registerLogin,registerEmail,registerPhoneNumber,registerPassword)
    } else {
        alert("Algum dado foi preenchido errado")
    }  
}

function verifyToEqualPassword(password, rePassword) {
    return password == rePassword ? true : false
}

function verifyValidEmail(email) {
    return email.includes("@", ".com")
}

// Register User

function registerUserWithEmailAndPassword(email, password) {
    firebase.auth.createUserWithEmailAndPassword(email, password)
     .then(userCredential => {
        let user = userCredential.user;
        console.log(user);
     })
     .catch(err => {
        let errorCode = err.code;
        let errorMensage = err.mensage;

        console.log(errorCode, errorMensage)
     })
}

function saveUserDataInDataBase(login, email, phoneNumber, password) {
  phoneNumber = phoneNumber.toString()

  firebase.db.collection(firebase.COLLECTION).add({
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