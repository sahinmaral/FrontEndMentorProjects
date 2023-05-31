const emailInput = document.querySelector(
  ".newsletter .left .form-control-email input"
);
const emailInputValidation = document.querySelector(
  ".newsletter .left .form-control-email-top .validation"
);
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const handleSubmit = () => {
  const email = emailInput.value;
  if (email.length == 0) {
    emailInputValidation.innerHTML = "Fill email address";
  } else if (!String(email).toLowerCase().match(emailRegex)) {
    emailInputValidation.innerHTML = "Invalid email address";
  } else {
    localStorage.setItem("email-address", email);
    location.href = "./thanks-subscribing.html"
  }
};
