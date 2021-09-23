const timeleft = document.getElementById("time-left");

//const birthday = new Date("05/13/2022");
const birthday = new Date("04/06/2022");
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let timerId;

function countDown() {
  const today = new Date();
  const timeSpan = birthday - today;

  if (timeSpan <= -day) {
    timeleft.innerHTML = "Hope you had a nice Birthday!";
    clearInterval(timerId);
    return;
  } else if (timeSpan <= 0) {
    // if you want ESLE IF
    timeleft.innerHTML = "Happy Birthday !!";
    clearInterval(timerId);
    return;
  }

  const days = Math.floor(timeSpan / day);
  const hours = Math.floor((timeSpan % day) / hour);
  const minutes = Math.floor((timeSpan % hour) / minute);
  const seconds = Math.floor((timeSpan % minute) / second);

  timeleft.innerHTML =
    days +
    "days " +
    hours +
    "hours " +
    minutes +
    "minutes " +
    seconds +
    "seconds ";
}

timerId = setInterval(countDown, second);
