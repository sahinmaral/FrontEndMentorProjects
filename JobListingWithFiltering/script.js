let addedTags = [];

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

const removeTagFromFilter = (tagElement, tag) => {
  let filterLeft = document.querySelector(".filter .left");
  filterLeft.removeChild(tagElement);

  addedTags.pop(tag)

  if (addedTags.length === 0) {
    let filterContainer = document.querySelector(".filter");
    filterContainer.style.display = "none";
  }
};

const clearFilter = () => {
  let filterLeft = document.querySelector(".filter .left");
  filterLeft.innerHTML = "";
  addedTags = [];

  let filterContainer = document.querySelector(".filter");
  filterContainer.style.display = "none";
};

const addTagToFilter = (tag) => {
  if (!addedTags.includes(tag)) {

    if (addedTags.length === 0) {
      let filterContainer = document.querySelector(".filter");
      filterContainer.style.display = "flex";
    }

    let tagElement = document.createElement("div");
    tagElement.classList.add("tag");

    let tagSpan = document.createElement("span");
    tagSpan.innerHTML = tag;

    tagElement.appendChild(tagSpan);

    let removeTagSvg = document.createElement("img");
    removeTagSvg.classList.add("remove-tag");
    removeTagSvg.setAttribute("src", "./images/icon-remove.svg");

    removeTagSvg.addEventListener("click", () => {
      removeTagFromFilter(tagElement, tag);
    });

    tagElement.appendChild(removeTagSvg);

    let filterLeft = document.querySelector(".filter .left");
    filterLeft.appendChild(tagElement);

    addedTags.push(tag)
  }
};

document.addEventListener("DOMContentLoaded", () => {
  getData().then((result) => {
    let container = document.querySelector(".container");

    result.forEach((element) => {
      let jobCards = document.createElement("div");
      jobCards.classList.add("job-cards");

      let leftSide = document.createElement("div");
      leftSide.classList.add("left");

      let thumbnail = document.createElement("div");
      thumbnail.classList.add("thumbnail");

      let thumbnailImage = document.createElement("img");
      thumbnailImage.setAttribute("src", element.logo);
      thumbnailImage.setAttribute("alt", "company");
      thumbnail.appendChild(thumbnailImage);

      leftSide.appendChild(thumbnail);

      let cardBody = document.createElement("div");
      cardBody.classList.add("body");

      let cardBodyTop = document.createElement("div");
      cardBodyTop.classList.add("body-top");

      let companyName = document.createElement("div");
      companyName.classList.add("company-name");
      companyName.innerHTML = element.company;
      cardBodyTop.appendChild(companyName);

      let features = document.createElement("div");
      features.classList.add("features");

      if (element.new) {
        let newFeature = document.createElement("div");
        newFeature.classList.add("feature","feature-new");
        newFeature.innerHTML = "NEW!";

        features.appendChild(newFeature);
      }

      if (element.featured) {
        jobCards.classList.add("new-job");

        let featuredFeature = document.createElement("div");
        featuredFeature.classList.add("feature","feature-featured");
        featuredFeature.innerHTML = "FEATURED";

        features.appendChild(featuredFeature);
      }

      cardBodyTop.appendChild(features);

      cardBody.appendChild(cardBodyTop);

      let jobTitle = document.createElement("div");
      jobTitle.classList.add("title");
      jobTitle.innerHTML = element.position;
      cardBody.appendChild(jobTitle);

      let jobDescription = document.createElement("div");
      jobDescription.classList.add("description");

      let jobCreatedDate = document.createElement("span");
      jobCreatedDate.classList.add("created");
      jobCreatedDate.innerHTML = element.postedAt;

      let seperator = document.createElement("span");
      seperator.classList.add("seperator");
      seperator.innerHTML = "&#x2022;";

      let jobWorkTime = document.createElement("span");
      jobWorkTime.classList.add("work-time");
      jobWorkTime.innerHTML = element.contract;

      let jobWorkPlace = document.createElement("span");
      jobWorkPlace.classList.add("work-place");
      jobWorkPlace.innerHTML = element.location;

      jobDescription.appendChild(jobCreatedDate);
      jobDescription.appendChild(seperator);
      jobDescription.appendChild(jobWorkTime);
      jobDescription.appendChild(seperator);
      jobDescription.appendChild(jobWorkPlace);

      cardBody.appendChild(jobDescription);
      leftSide.appendChild(cardBody);

      let rightSide = document.createElement("div");
      rightSide.classList.add("right");

      let tagsElement = document.createElement("div");
      tagsElement.classList.add("tags");

      let tags = [
        element.role,
        element.level,
        ...element.languages,
        ...element.tools,
      ];

      tags.forEach((tag) => {
        let tagElement = document.createElement("div");
        tagElement.classList.add("tag");

        tagElement.innerHTML = tag;

        tagElement.addEventListener("click", () => {
          addTagToFilter(tag);
        });

        tagsElement.appendChild(tagElement);
      });

      rightSide.appendChild(tagsElement);

      let middleSide = document.createElement("div");
      middleSide.classList.add("middle");

      middleSide.appendChild(document.createElement("hr"));

      jobCards.appendChild(leftSide);
      jobCards.appendChild(middleSide);
      jobCards.appendChild(rightSide);

      container.appendChild(jobCards);
    });
  });
});

window.addEventListener("resize", (event) => {
  const width = event.target.innerWidth;
  const banner = document.querySelector(".banner img");

  if (width <= 850) {
    banner.setAttribute("src", "./images/bg-header-mobile.svg");
  } else {
    banner.setAttribute("src", "./images/bg-header-desktop.svg");
  }
});
