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

function clearInputsValue() {
    const inputs = document.querySelectorAll("input[type='email'], input[type='password'], input[type='text'], input[type='number']")
    inputs.forEach((input) => {
        input.value = ""
    })
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
                // checar usuario no banco de dados
            }
        }
        // register condition
        else {
            const allRegisterInputs = document.querySelectorAll(".registerPersonalInformations input")
            
            for(let i = 0; i < allRegisterInputs.length; i++) {
                if(allRegisterInputs[i].value) {
                    signUserInDatabase()
                    break;
                }
                else {
                    alert("Algum dado está errado")
                    break;
                }
            }

        }
    })
})

function signUserInDatabase() {
    const registerUserLogin = document.querySelector(".registerPersonalInformations input[type='text']").value
    const registerEmail = document.querySelector(".registerPersonalInformations input[type='email']").value
    const registerPhoneNumber = document.querySelector(".registerPersonalInformations input[type='number']").value
    const registerPassword = document.querySelector(".password").value
    const equalRegisterPassword = document.querySelector(".re-password").value

    if(verifyToEqualPassword(registerPassword, equalRegisterPassword) && verifyValidEmail(registerEmail)) {
        // salvar os dados do usuario no banco de dados
        // registrar por meio do signIn
    } else {
        alert("Algum dado foi preenchido errado")
    }  
}

function verifyToEqualPassword(password, rePassword) {
    return password == rePassword ? true : false
}

function verifyValidEmail(email) {
    // arrumar a condição de email
    return email.includes("@", ".com")
}

// registrar o usuario no banco de dados
// acessar os dados do usuario
// pegar o email e o password
// registrar o usuario usando email e password

// apagar a linha 107
console.log("nova linha de teste do git")