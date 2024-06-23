if (!("Notification" in window) || Notification.permission === "denied") {
  console.log("tes");

  // use (window||Worker).postMessage() fallback ...
}
