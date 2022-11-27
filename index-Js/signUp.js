import * as firebase from "./firebase.js";

let uid = "";

// Register User

export function registerUserWithEmailAndPassword() {
    const email = document.querySelector(".registerPersonalInformations input[type='email']").value
    const firstPassword = document.querySelector(".password").value
    const secondPassword = document.querySelector(".re-password").value

    if(verifyToEqualPassword(firstPassword, secondPassword) == verifyValidEmail(email)) {
        firebase.auth.createUserWithEmailAndPassword(email, firstPassword)
         .then(userCredential => {
            let user = userCredential.user;
            console.log(user);
            uid = user.uid;
            saveUserInDataBase(email, firstPassword);
         })
         .catch(err => {
            let errorCode = err.code;
            let errorMensage = err.mensage;

            console.log(errorCode, errorMensage)
         })
    } else {
        alert("Houve algum erro no preenchimento de dados")
    }
}

function saveUserInDataBase(email, password) {

    const login = document.querySelector(".registerPersonalInformations input[type='text']").value
    let phoneNumber = document.querySelector(".registerPersonalInformations input[type='number']").value

    phoneNumber = phoneNumber.toString()

    console.log(email, password, login, phoneNumber, uid)


    firebase.db.collection(firebase.COLLECTION).doc(uid).set({
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

function verifyToEqualPassword(password, rePassword) {
    return password == rePassword ? true : false
}

function verifyValidEmail(email) {
    return email.includes("@", ".com")
}

// Procurar pelo Usuário usando o Uid do email no banco de dados