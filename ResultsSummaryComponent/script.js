const getData = () => {
  return new Promise((resolve, reject) => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  getData().then((result) => {
    let allSummaries = document.querySelector(".all-summaries");

    result.forEach((element) => {
      let summaryCard = document.createElement("div");
      summaryCard.classList.add("summary-card");
      summaryCard.classList.add(element.category.toLocaleLowerCase());

      let leftSide = document.createElement("div");
      leftSide.classList.add("left");

      let icon = document.createElement("img");
      icon.setAttribute("src", element.icon);

      let title = document.createElement("span");
      title.innerHTML = element.category;

      leftSide.appendChild(icon);
      leftSide.appendChild(title);

      let rightSide = document.createElement("div");
      rightSide.classList.add("right");

      let score = document.createElement("span");
      score.innerHTML = element.score;

      let percentage = document.createElement("span");
      percentage.classList.add("percentage");
      percentage.innerHTML = "/ 100";

      rightSide.appendChild(score);
      rightSide.appendChild(percentage);

      summaryCard.appendChild(leftSide);
      summaryCard.appendChild(rightSide);

      allSummaries.appendChild(summaryCard);
    });
  });
});
