const fetchData = () => {
  fetch("./dist/js/data.json")
    .then((res) => res.json())
    .then((data) => loadGraph(data));
};

const loadGraph = (data) => {
  console.log(data);
  const datasPart = document.querySelector(".graph-part .data");
  const daysPart = document.querySelector(".graph-part .days");
  const dataDescriptionsPart = document.querySelector(
    ".graph-part .data-description"
  );

  const currentDate = new Date();
  const currentDay = currentDate.getDay();

  data.map((item, index) => {
    const dataPart = document.createElement("div");
    const dayPart = document.createElement("div");

    const dataDescriptionPart = document.createElement("div");
    dataDescriptionPart.id = item.day;
    dataDescriptionPart.classList.add("show-data");
    dataDescriptionPart.style.display = "none";

    dataPart.classList.add("col");
    dayPart.classList.add("col");

    dataDescriptionPart.innerHTML = `$${item.amount}`;

    dataPart.addEventListener("mouseenter", () => {
      dataDescriptionPart.style.display = "block";
    });

    dataPart.addEventListener("mouseleave", () => {
      dataDescriptionPart.style.display = "none";
    });

    if (currentDay === index + 1) {
      dataPart.classList.add("today");
    }

    if (item.amount < 75) {
      dataDescriptionPart.style.marginTop = `${190 - item.amount * 1.5 - 35}px`;

      dataPart.style.marginTop = `${190 - item.amount * 1.5}px`;
      dataPart.style.height = `${item.amount * 1.5}px`;
    } else {
      dataDescriptionPart.style.marginTop = "15px";

      dataPart.style.marginTop = `50px`;
      dataPart.style.height = `140px`;
    }

    if (window.innerWidth > 500) {
      dataDescriptionPart.style.marginLeft = `${
        40 * index + 22 * index - 10
      }px`;
    } else {
      dataDescriptionPart.style.marginLeft = `${
        30 * index + 14 * index - 15
      }px`;
    }

    dayPart.innerHTML = item.day;

    dataDescriptionsPart.appendChild(dataDescriptionPart);
    datasPart.appendChild(dataPart);
    daysPart.appendChild(dayPart);
  });
};

fetchData();

window.addEventListener("resize", () => {
  const showDataElementCount = document.querySelectorAll(
    ".graph-part .show-data"
  ).length;

  for (let index = 0; index < showDataElementCount; index++) {
    const element = document.querySelectorAll(".graph-part .show-data")[index];

    if (window.innerWidth > 500) {
      element.style.marginLeft = `${40 * index + 22 * index - 10}px`;
    } else {
      element.style.marginLeft = `${30 * index + 14 * index - 15}px`;
    }
  }
});
