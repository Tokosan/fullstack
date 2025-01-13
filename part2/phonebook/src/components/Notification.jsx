import React from "react";

function Notification({ notification, error }) {
  if (notification === "") {
    return null;
  }

  return <div className={error ? "error" : "success"}>{notification}</div>;
}

export default Notification;
