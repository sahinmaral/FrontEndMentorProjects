const handleSubmit = (event) => {
    event.preventDefault()

    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    let emailElement = document.getElementById(document.querySelector("#notification-form #email-address").id)
    let emailValidationElement = document.getElementById("email-address-validation")

    clearValidation(emailElement,emailValidationElement)

    if(!emailElement.value){
        emailValidationElement.innerHTML = "Email address cannot be null"
        emailElement.classList.add('invalid')
        emailElement.style.backgroundImage = "url('./images/icon-error.svg')"
    }else{
        if(!emailRegex.exec(emailElement.value)){
            emailValidationElement.innerHTML = "Please provide a valid email"
            emailElement.classList.add('invalid')
            emailElement.style.backgroundImage = "url('./images/icon-error.svg')"
        }
    }
}


document.getElementById("notification-form").addEventListener("submit",(event) => {
    handleSubmit(event)
})

const clearValidation = (emailElement,emailValidationElement) => {
    emailValidationElement.innerHTML = ""
    emailElement.classList.remove("invalid")
    emailElement.style.backgroundImage = null
}