const tipAmountElement = document.getElementById("tip-amount");
const totalAmountElement = document.getElementById("total-amount");
const peopleAmountElement = document.getElementById("people-amount");
const peopleAmountValidationElement = document.getElementById("people-amount-validation")
const billAmountValidationElement = document.getElementById("bill-amount-validation")
const billInputElement = document.getElementById("input-bill");

const validatePeopleInput = (event) => {
  var e = event || window.event;
  var key = e.keyCode || e.which;

  if (
    (!e.shiftKey &&
      !e.altKey &&
      !e.ctrlKey &&
      // numbers
      key >= 48 &&
      key <= 57) ||
    // Numeric keypad
    (key >= 96 && key <= 105) ||
    // Backspace and Tab and Enter
    key == 8 ||
    key == 9 ||
    key == 13 ||
    // Home and End
    key == 35 ||
    key == 36 ||
    // left and right arrows
    key == 37 ||
    key == 39 ||
    // Del and Ins
    key == 46 ||
    key == 45
  ) {
    // input is VALID
  } else {
    // input is INVALID
    e.returnValue = false;
    if (e.preventDefault) e.preventDefault();
  }
};

const handleResetButton = () => {
  tipAmountElement.innerHTML = "$0.00";
  totalAmountElement.innerHTML = "$0.00";
};

const handleCalculateButton = () => {

  if(peopleAmountElement.value === "" || peopleAmountElement.value === "0"){
    peopleAmountValidationElement.style.display = "block";
  }else{
    peopleAmountValidationElement.style.display = "none";
  }

  console.log(Number(billInputElement.innerHTML))

  if(Number(billInputElement.innerHTML) <= 0){
    billAmountValidationElement.style.display = "block";
  }else{
    billAmountValidationElement.style.display = "none";
  }

}
