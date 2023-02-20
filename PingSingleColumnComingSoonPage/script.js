document.getElementById("notification-form").addEventListener("submit",(event) => {
    event.preventDefault()

    let emailAddressElement = document.getElementById("email-address-input")
    let emailAddressValidation = document.getElementById("email-address-validation")

    clearValidation(emailAddressElement,emailAddressValidation)
    handleSubmit(emailAddressElement,emailAddressValidation)
})


const handleSubmit = (emailAddressElement,emailAddressValidation) => {

    const emailRegex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")

    if(!emailAddressElement.value){
        emailAddressElement.style.borderColor = "hsl(354, 100%, 66%)";
        emailAddressValidation.innerHTML = "Please provide any email address"
    }else if(!emailRegex.exec(emailAddressElement.value)){
        emailAddressElement.style.borderColor = "hsl(354, 100%, 66%)";
        emailAddressValidation.innerHTML = "Please provide valid email address"
    }
}

const clearValidation = (emailAddressElement,emailAddressValidation) => {
    emailAddressElement.style.borderColor = "rgba(194, 211, 255,0.5)"
    emailAddressValidation.innerHTML = ""
}