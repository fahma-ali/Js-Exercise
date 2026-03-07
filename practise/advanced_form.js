const form = document.querySelector("#formRegistration")
const UserName = document.querySelector("#username")
const password = document.querySelector("#password")
const confirmpass = document.querySelector("#confirmpassword")
const email = document.querySelector("#email")
const error = document.querySelector("#error")
const success = document.querySelector("#success")
form.addEventListener("submit", function (event) {
    event.preventDefault();

    error.textContent = "";
    success.textContent = "";
    // validate fields 
    const inUserValid = userValidation();
    const isEmailValid = validateEmail();
    const isPasswordvalid = validataPassword();
    const isconfirpasswordvalid = validataconfirmPassword();
    if (!inUserValid) {
        UserName.focus();
        return
    }
    else if (!isEmailValid) {
        email.focus();
        return
    }
    else if (!isPasswordvalid) {
        password.focus()
        return
    } else if (!isconfirpasswordvalid) {
        confirmpassword.focus();
        return
    }
    success.textContent = "Register Successfully"

})

function userValidation() {
    if (UserName.value.trim() === "") {
        setError(UserName, "username is required")
        return false
    }
    else {
        setSuccess(UserName)
        return true
    }
}
function validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email.value.match(emailPattern)) {
        setError(email, "email is required")
        return false

    }
    else {
        setSuccess(email)
        return true
    }
}
function validataPassword() {
    if (password.value.length < 8) {
        setError(password, "Password must at least 8 character")
        return false
    }
    else {
        setSuccess(password)
        return true
    }
}
function validataconfirmPassword() {
    if(password.value.trim() === "" || confirmpass.value.trim() === ""){
        setError(confirmpass,"confirm password can not be empty")
        return
    }
    if (password.value !== confirmpass.value) {
        setError(confirmpass, "confirm password must be same as password");
        return false
    }else{
        setSuccess(confirmpassword)
        return true
    }

}

function setError(element, message) {
    element.classList.add("invalid");
    element.classList.remove("valid")
    error.textContent = message

}
function setSuccess(element) {
    element.classList.add("valid")
    element.classList.remove("invalid")
}
