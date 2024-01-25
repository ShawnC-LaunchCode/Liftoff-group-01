import React from "react";

function Notification() {
    if("Notification" in window) {

        if(Notification.permission === 'granted') {
            notify();
        } else {
            Notification.requestPermission().then((res) => {
                if(res === 'granted') {
                    notify();
                } else if(res === 'denied') {
                    console.log("Notification access denied");
                } else if(res === 'default') {
                    console.log("Notification permission not given");
                }
            })
        }
    } else {
        console.log("Notification not supported.");
    }
    
    function notify() {
        new Notification("Notifications Enabled", {
            body: "Thank you for enabling notifications!"
        });
    }
}