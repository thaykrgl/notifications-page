let markAll = document.getElementById("mark-all");

markAll.addEventListener("click", function () {
    let notifications = document.getElementsByClassName("notification");
    let notificationNumber = document.getElementById("notification-number").innerHTML;

    console.log(notificationNumber);

    for (let i = 0; i < notifications.length; i++) {
        if (notifications[i].classList.contains("unread")) {
            notifications[i].classList.remove("unread");
            notifications[i].querySelector(".info-container .detail-info .unread-icon").classList.remove("unread-icon");
            notificationNumber = notificationNumber - 1;
        }
    }

    document.getElementById("notification-number").innerHTML = notificationNumber;
})