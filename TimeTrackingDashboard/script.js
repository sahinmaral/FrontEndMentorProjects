const allSummaryElement = document.querySelector(".all-summary");

let selectedReportState = "weekly";

const fetchData = () => {
  return new Promise((resolve, reject) => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((result) => {
        resolve(result);
      });
  });
};

const selectReportState = (event) => {
  selectedReportState = event.target.innerHTML.toLowerCase();

  changeSelectedReportStateElementColor()

  allSummaryElement.innerHTML = "";
  fetchData().then((result) => {
    loadElements(result);
  });
};

const changeSelectedReportStateElementColor = () => {
  document.querySelectorAll(".report-states .state").forEach((element) => {
    if (element.innerHTML.toLowerCase() === selectedReportState) {
      element.classList.add("selected");
    } else {
      element.classList.remove("selected");
    }
  });
};

const returnSlugifiedData = (data) => {
  switch (data) {
    case "Work":
      return "work";
    case "Play":
      return "play";
    case "Exercise":
      return "exercise";
    case "Study":
      return "study";
    case "Self Care":
      return "self-care";
    case "Social":
      return "social";
    default:
      break;
  }
};

const loadElements = (result) => {
  result.forEach((element) => {
    const summaryCardElement = document.createElement("div");
    summaryCardElement.classList.add("summary-card");
    summaryCardElement.dataset.category = returnSlugifiedData(element.title);

    const cardIconElement = document.createElement("img");
    cardIconElement.setAttribute(
      "src",
      `./images/icon-${returnSlugifiedData(element.title)}.svg`
    );
    cardIconElement.classList.add("card-icon");

    const cardBodyElement = document.createElement("div");
    cardBodyElement.classList.add("card-body");

    const headerElement = document.createElement("div");
    headerElement.classList.add("header");

    const headerTitleElement = document.createElement("p");
    headerTitleElement.innerHTML = element.title;

    const ellipsisIcon = document.createElement("img");
    ellipsisIcon.setAttribute("src", "./images/icon-ellipsis.svg");
    ellipsisIcon.style.width = "21px";
    ellipsisIcon.style.height = "5px";

    headerElement.appendChild(headerTitleElement);
    headerElement.appendChild(ellipsisIcon);

    const bodyElement = document.createElement("div");
    bodyElement.classList.add("body");

    const bodyCurrentElement = document.createElement("p");
    bodyCurrentElement.classList.add("current");
    bodyCurrentElement.innerHTML = `${element.timeframes[selectedReportState].current}hrs`;

    bodyElement.appendChild(bodyCurrentElement);

    const footerElement = document.createElement("div");
    footerElement.classList.add("footer");

    const footerSpanElement = document.createElement("span");
    footerElement.innerHTML = `Last week - ${element.timeframes[selectedReportState].previous}`;

    footerElement.appendChild(footerSpanElement);

    cardBodyElement.appendChild(headerElement);

    let bodyAndFooterElementContainer = document.createElement("div")
    bodyAndFooterElementContainer.classList.add("body-footer-container")
    bodyAndFooterElementContainer.append(bodyElement)
    bodyAndFooterElementContainer.append(footerElement)

    cardBodyElement.appendChild(bodyAndFooterElementContainer);

    summaryCardElement.appendChild(cardIconElement);
    summaryCardElement.appendChild(cardBodyElement);

    allSummaryElement.appendChild(summaryCardElement);
  });
};

fetchData().then((result) => {
    loadElements(result);
    changeSelectedReportStateElementColor()
  });