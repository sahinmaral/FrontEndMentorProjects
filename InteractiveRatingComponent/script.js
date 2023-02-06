document
  .querySelector("#rating-area .submit-button")
  .addEventListener("click", () => {
    submitReview();
  });

document.querySelectorAll("#reviews button").forEach((button) => {
  button.addEventListener("click", () => {
    setReview(button.innerHTML);
  });
});

const setReview = (score) => {
  localStorage.setItem("score", score);

  document.querySelectorAll("#reviews button").forEach((button, index) => {
    if (index === score - 1) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
};

const submitReview = () => {
  const score = localStorage.getItem("score");

  if (!score) {
    alert("Choose one of the scores");
  } else {
    window.location.href = "./thank-you.html";
  }
};
