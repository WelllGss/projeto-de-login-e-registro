const signs = document.querySelectorAll(".sign")
const buttonsSigns = document.querySelectorAll(".signInButton")

signs.forEach((sign) => {
    sign.addEventListener("click", () => {

        if(sign.classList.contains("selected")) {
            return;
        }

        signSelected(sign);

        showTheSign(sign);

        clearInputsValue();
    })
})

function signSelected(sign) {
    const signSelected = document.querySelector(".sign.selected")
    signSelected.classList.remove("selected");

    sign.classList.add("selected")
}

function showTheSign(sign) {
    const formSignSelected = document.querySelector(".form-sign.selected")
    formSignSelected.classList.remove("selected");
    
    const formSignId = `form-${sign.id}`;

    const formSignToBeShown = document.getElementById(formSignId)
    formSignToBeShown.classList.add("selected")
}

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
                valueInputLogin.includes("@", ".com") ? checkUserWithEmail(valueInputLogin, valueInputPassword) : checkUserWithLogin(valueInputLogin, valueInputPassword)
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
                        signUpUserInDatabase()
                    }
                }
            }

        }
    })
})

function signUpUserInDatabase() {
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

function clearInputsValue() {
    const inputs = document.querySelectorAll("input[type='email'], input[type='password'], input[type='text'], input[type='number']")
    inputs.forEach((input) => {
        input.value = ""
    })
}

// acessar os dados do usuario