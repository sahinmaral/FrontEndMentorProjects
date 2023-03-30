const fetchData = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      loadAdvice(data);
    });
};

const loadAdvice = (data) => {
  const idElement = document.querySelector(".content .title");
  idElement.innerHTML = `Advice #${data.slip.id}`;

  const adviceElement = document.querySelector(".content .advice");
  adviceElement.innerHTML = `“${data.slip.advice}”`;
};

fetchData();

const randomAdviceButton = document.querySelector(".content .random-advice");
randomAdviceButton.addEventListener("click", () => {
  fetchData();
});
