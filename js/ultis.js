export function signSelected(sign) {
    const signSelected = document.querySelector(".sign.selected")
    signSelected.classList.remove("selected");

    sign.classList.add("selected")
}

export function showTheSign(sign) {
    const formSignSelected = document.querySelector(".form-sign.selected")
    formSignSelected.classList.remove("selected");
    
    const formSignId = `form-${sign.id}`;

    const formSignToBeShown = document.getElementById(formSignId)
    formSignToBeShown.classList.add("selected")
}

export function clearInputsValue() {
    const inputs = document.querySelectorAll("input[type='email'], input[type='password'], input[type='text'], input[type='number']")
    inputs.forEach((input) => {
        input.value = ""
    })
}