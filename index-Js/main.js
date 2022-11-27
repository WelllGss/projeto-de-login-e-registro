const signs = document.querySelectorAll(".sign")
const buttonsSigns = document.querySelectorAll(".signInButton")

import * as Ultis from "./ultis.js";
import * as SignUp from "./signUp.js";
import * as SignIn from "./signIn.js";

signs.forEach((sign) => {
    sign.addEventListener("click", () => {

        if(sign.classList.contains("selected")) {
            return;
        }

        Ultis.signSelected(sign);

        Ultis.showTheSign(sign);

        Ultis.clearInputsValue();
    })
})



buttonsSigns.forEach((button) => {
    button.addEventListener("click", () => {
        const signInButton = button.classList.contains("sign-in");
        // Login condition
        if(signInButton) {
            const valueInputLogin = document.querySelector(".personalInformations input[type='email']").value
            const valueInputPassword = document.querySelector(".personalInformations input[type='password']").value

            if(valueInputLogin == "" || valueInputPassword == "") {
                alert("Os campos estão vazios")
            }
            else {
                valueInputLogin.includes("@", ".com") ? SignIn.checkUserWithEmail(valueInputLogin, valueInputPassword) : SignIn.searchUserWithLogin(valueInputLogin, valueInputPassword)
            }
        }
        // register condition
        else {
            const allRegisterInputs = document.querySelectorAll(".registerPersonalInformations input")
            let countInputsIsFields = 0

            for(let i = 0; i < allRegisterInputs.length; i++) {
                if(!allRegisterInputs[i].value) {
                    alert("Algum dado está errado")
                    break;
                }
                else {
                    countInputsIsFields += 1
                    if(countInputsIsFields == 7) {
                        SignUp.registerUserWithEmailAndPassword();
                    }
                }
            }

        }
    })
})


