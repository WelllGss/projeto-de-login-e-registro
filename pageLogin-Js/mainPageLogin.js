import * as firebase from "../index-Js/firebase.js";

firebase.auth.onAuthStateChanged((user) => {
    if(user) {
        var uid = user.uid;
        console.log(uid)
    } else {
        console.log("Nenhum usuário logado")
    }
})