const handleSubmit = (event) => {
    event.preventDefault()
    let firstNameElement = document.getElementById(document.querySelector("#trial-form #first-name").id)
    let lastNameElement =  document.getElementById(document.querySelector("#trial-form #last-name").id)
    let emailElement =  document.getElementById(document.querySelector("#trial-form #email-address").id)
    let passwordElement =  document.getElementById(document.querySelector("#trial-form #password").id)

    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    clearValidation(firstNameElement,lastNameElement,passwordElement,emailElement)

    if(!firstNameElement.value){
        document.getElementById('first-name-validation').innerHTML = "First Name cannot be empty"

        firstNameElement.style.borderColor = "hsl(0, 100%, 74%) "
        firstNameElement.classList.add("validation")
        firstNameElement.style.backgroundImage = 'url("./images/icon-error.svg")'
    }

    if(!lastNameElement.value){
        document.getElementById('last-name-validation').innerHTML = "Last Name cannot be empty"
        lastNameElement.style.borderColor = "hsl(0, 100%, 74%) "
        lastNameElement.classList.add("validation")
        lastNameElement.style.backgroundImage = 'url("./images/icon-error.svg")'
    }

    if(!passwordElement.value){
        document.getElementById('password-validation').innerHTML = "Password cannot be empty"
        passwordElement.style.borderColor = "hsl(0, 100%, 74%) "
        passwordElement.classList.add("validation")
        passwordElement.style.backgroundImage = 'url("./images/icon-error.svg")'
    }

    if(!emailElement.value){
        document.getElementById('email-validation').innerHTML = "Email cannot be empty"
        emailElement.style.borderColor = "hsl(0, 100%, 74%) "
        emailElement.classList.add("validation")
        emailElement.style.backgroundImage = 'url("./images/icon-error.svg")'

    }else{
        if(!emailRegex.exec(emailElement.value)){
            document.getElementById('email-validation').innerHTML = "Looks like this is not an email"
            emailElement.style.borderColor = "hsl(0, 100%, 74%) "
            emailElement.classList.add("validation")
            emailElement.style.backgroundImage = 'url("./images/icon-error.svg")'

        }
    }
}

const clearValidation = (firstNameElement,lastNameElement,passwordElement,emailElement) => {
    firstNameElement.style.backgroundImage = null
    firstNameElement.classList.remove("validation")
    firstNameElement.style.borderColor = "hsl(246, 25%, 77%)"
    document.getElementById('first-name-validation').innerHTML = ""

    lastNameElement.style.backgroundImage = null
    lastNameElement.classList.remove("validation")
    lastNameElement.style.borderColor = "hsl(246, 25%, 77%)"
    document.getElementById('last-name-validation').innerHTML = ""

    passwordElement.style.backgroundImage = null
    passwordElement.classList.remove("validation")
    passwordElement.style.borderColor = "hsl(246, 25%, 77%)"
    document.getElementById('password-validation').innerHTML = ""

    emailElement.style.backgroundImage = null
    emailElement.classList.remove("validation")
    emailElement.style.borderColor = "hsl(246, 25%, 77%)"
    document.getElementById('email-validation').innerHTML = ""


}

document.getElementById("trial-form").addEventListener('submit',(event) => {
    handleSubmit(event)
})