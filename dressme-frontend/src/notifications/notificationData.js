import React from "react";

const notificationData = {
    userName: auth.currentUser.displayName,
    senderUserEmail: auth.currentUser.email,
    type: "like",
    timestamp: moment().format(),
    isRead: false,
 };