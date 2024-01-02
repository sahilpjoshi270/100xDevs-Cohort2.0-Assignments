function updateClock() {
  var now = new Date();

  // Format: HH:MM:SS
  var hhmmss =
    padZero(now.getHours()) +
    ":" +
    padZero(now.getMinutes()) +
    ":" +
    padZero(now.getSeconds());

  // Format: HH:MM:SS AM/PM
  var ampm =
    padZero(now.getHours() % 12 || 12) +
    ":" +
    padZero(now.getMinutes()) +
    ":" +
    padZero(now.getSeconds()) +
    " " +
    (now.getHours() >= 12 ? "PM" : "AM");

  console.log(hhmmss + "\n" + ampm);
}

function padZero(num) {
  return (num < 10 ? "0" : "") + num;
}

// Update every second
setInterval(updateClock, 1000);
