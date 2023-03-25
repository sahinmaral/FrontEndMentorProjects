const fetchNotifications = () => {
  fetch("./dist/js/notifications.json")
    .then((res) => {
      return res.json();
    })
    .then((notifications) => {
      loadNotifications(notifications);
    });
};

const markAsRead = () => {
  let elements = document.querySelectorAll(
    ".notifications > .notification-card.unread"
  );
  elements.forEach((element, index) => {
    element.classList.remove("unread");

    document.querySelectorAll(
      ".notifications > .notification-card > .first-row > .notification-body > .notification-information> .unread-message"
    )[index].style.display = "none";
  });

  document.querySelector(
    ".notifications > .notification-header > .left-side > .notification-count"
  ).innerHTML = 0;
};

const loadNotifications = (notifications) => {
  let unreadCountElement = document.querySelector(
    ".notifications > .notification-header > .left-side > .notification-count"
  );

  let notificationContent = document.querySelector(".notifications");

  unreadCountElement.innerHTML = notifications.filter(
    (notification) => notification.isUnread
  ).length;

  notifications.forEach((notification) => {
    const notificationCard = document.createElement("div");
    notificationCard.classList.add("notification-card");

    const firstRow = document.createElement("div");
    firstRow.classList.add("first-row");

    const notificationThumbnail = document.createElement("div");
    notificationThumbnail.classList.add("notification-thumbnail");

    const thumbnailImage = document.createElement("img");
    thumbnailImage.setAttribute("alt", notification.username);

    const thumbnailImagePath =
      "../dist/assets/images/" + notification.thumbnail_image;
    thumbnailImage.setAttribute("src", thumbnailImagePath);
    notificationThumbnail.appendChild(thumbnailImage);

    const notificationBody = document.createElement("div");
    notificationBody.classList.add("notification-body");

    const notificationInformation = document.createElement("div");
    notificationInformation.classList.add("notification-information");

    const notificationInformationSpan = document.createElement("span");

    const notificationUsernameSpan = document.createElement("span");
    notificationUsernameSpan.classList.add("username");
    notificationUsernameSpan.innerHTML = notification.username;

    notificationInformationSpan.appendChild(notificationUsernameSpan);

    const notificationMessageSpan = document.createElement("span");
    const notificationActionSpan = document.createElement("span");

    firstRow.appendChild(notificationThumbnail);
    firstRow.appendChild(notificationBody);
    notificationCard.appendChild(firstRow);

    notificationContent.appendChild(notificationCard);
    notificationBody.appendChild(notificationInformation);

    switch (notification.notification_type) {
      case "REACT_POST":
        notificationMessageSpan.innerHTML = "reacted to your recent post ";
        notificationInformationSpan.appendChild(notificationMessageSpan);

        notificationActionSpan.innerHTML = notification.action_detail;
        notificationActionSpan.classList.add("post-name");

        notificationInformationSpan.appendChild(notificationActionSpan);

        break;
      case "FOLLOW":
        notificationMessageSpan.innerHTML = "followed you ";
        notificationInformationSpan.appendChild(notificationMessageSpan);

        break;
      case "LEAVE_GROUP":
        notificationMessageSpan.innerHTML = "left the group ";
        notificationInformationSpan.appendChild(notificationMessageSpan);

        notificationActionSpan.innerHTML = notification.action_detail;
        notificationActionSpan.classList.add("group-name");

        notificationInformationSpan.appendChild(notificationActionSpan);

        break;
      case "JOIN_GROUP":
        notificationMessageSpan.innerHTML = "has joined your group ";
        notificationInformationSpan.appendChild(notificationMessageSpan);

        notificationActionSpan.innerHTML = notification.action_detail;
        notificationActionSpan.classList.add("group-name");

        notificationInformationSpan.appendChild(notificationActionSpan);

        break;

      case "PRIVATE_MESSAGE":
        notificationMessageSpan.innerHTML = "sent you a private message ";
        notificationInformationSpan.appendChild(notificationMessageSpan);

        const secondRow = document.createElement("div");
        secondRow.classList.add("second-row");

        const notificationPrivateMessage = document.createElement("div");
        notificationPrivateMessage.classList.add("notification-message");
        notificationPrivateMessage.innerHTML = notification.action_detail;

        secondRow.appendChild(notificationPrivateMessage);

        notificationCard.appendChild(secondRow);

        break;

      case "COMMENT_PICTURE":
        notificationCard.classList.add("liked-comment");

        notificationMessageSpan.innerHTML = "commented on your picture ";
        notificationInformationSpan.appendChild(notificationMessageSpan);

        const firstRowImageDiv = document.createElement("div");
        firstRowImageDiv.classList.add("first-row-image");
        const firstRowImage = document.createElement("img");
        firstRowImage.setAttribute("alt", "commented-picture");

        const firstRowImagePath =
          "../dist/assets/images/" + notification.action_detail;
        firstRowImage.setAttribute("src", firstRowImagePath);
        firstRowImageDiv.appendChild(firstRowImage);

        notificationCard.appendChild(firstRowImageDiv);

        break;
      default:
        break;
    }

    notificationInformation.appendChild(notificationInformationSpan);

    const notificationTimeline = document.createElement("p");
    notificationTimeline.innerHTML = notification.createdAt;
    notificationTimeline.classList.add("notification-timeline");
    notificationBody.appendChild(notificationTimeline);

    if (notification.isUnread) {
      notificationCard.classList.add("unread");

      const unReadMessageIconElement = document.createElement("div");
      unReadMessageIconElement.classList.add("unread-message");
      notificationInformation.appendChild(unReadMessageIconElement);
    }
  });
};

fetchNotifications();
