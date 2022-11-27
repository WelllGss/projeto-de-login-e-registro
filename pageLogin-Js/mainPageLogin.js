import * as firebase from "../index-Js/firebase.js";

firebase.auth.onAuthStateChanged((user) => {
    if(user) {
        var uid = user.uid;
        firebase.db.collection(firebase.COLLECTION).doc(uid).get()
         .then((user) => {
                let dataUser = user.data();
                createHeaderPageLogin(dataUser);
         })
         .catch(err => {
                let errMensage = err.mensage;
                let errCode = err.code;

                console.log(errMensage, errCode);
         })
    } else {
        console.log("Nenhum usuário logado")
    }
})

function createHeaderPageLogin(dataOfUser) {
    
}