const tipAmountElement = document.getElementById("tip-amount");
const totalAmountElement = document.getElementById("total-amount");
const peopleAmountElement = document.getElementById("people-amount");
const peopleAmountValidationElement = document.getElementById("people-amount-validation")
const billAmountValidationElement = document.getElementById("bill-amount-validation")
const billInputElement = document.getElementById("input-bill");

let tipAmount = 0

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

const validateBeforeCalculate = () => {
  let validateState = true;

  if(peopleAmountElement.value === "" || peopleAmountElement.value === "0"){
    peopleAmountElement.classList.add("not-validated")
    peopleAmountValidationElement.style.display = "block";
    validateState = false;
  }else{
    peopleAmountElement.classList.remove("not-validated")
    peopleAmountValidationElement.style.display = "none";
  }


  if(Number(billInputElement.value) <= 0){
    billInputElement.classList.add("not-validated")
    billAmountValidationElement.style.display = "block";
    validateState = false;
  }else{
    billInputElement.classList.remove("not-validated")
    billAmountValidationElement.style.display = "none";
  }

  return validateState
}

const updateTipAmount = (amount) => {
  tipAmount = amount

  document.querySelectorAll(".button-bill").forEach(element => {
    if(Number(element.innerHTML.replace("%","")) === tipAmount){
      element.classList.add("selected")
    }else{
      element.classList.remove("selected")
    }
  });
}

const updateCustomTipAmount = (amount) => {
  console.log(amount)
}

const handleResetButton = () => {
  tipAmountElement.innerHTML = "$0.00";
  totalAmountElement.innerHTML = "$0.00";
  tipAmount = 0
  billInputElement.value = ""
  peopleAmountElement.value = ""

  document.querySelectorAll(".button-bill").forEach(element => {
    element.classList.remove("selected")
  })
};

const handleCalculateButton = () => {

  if(!validateBeforeCalculate()){
    return false;
  }

  let numberPeople = Number(peopleAmountElement.value)

  let inputBill = Number(billInputElement.value)
  let inputBillAdded = (inputBill * (100+tipAmount)) / 100

  let diffInputBill = (inputBillAdded - inputBill) / numberPeople
  tipAmountElement.innerHTML = `$${diffInputBill.toFixed(2)}`

  let totalAmount = inputBillAdded / numberPeople
  totalAmountElement.innerHTML = `$${totalAmount.toFixed(2)}`

}
