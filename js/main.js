// clock stuff

const timer = document.querySelector(".time");
updateTime();
setInterval(() => {
  updateTime();
}, 30000);

function updateTime() {
  timer.innerHTML = parseTime(new Date(), "%h:%m");
}

function parseTime(date, format) {
  const seconds = addZero(date.getSeconds());
  const minutes = addZero(date.getMinutes());
  const hours = addZero(date.getHours());
  function addZero(val) {
    if (val < 10) {
      return "0"+val;
    }
    return val;
  }
  return format.replace("%h", hours).replace("%m", minutes).replace("%s", seconds);
}
