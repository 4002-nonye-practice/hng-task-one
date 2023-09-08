const currentDay = document.querySelector(".day");
const utc = document.querySelector(".utc");
const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//HANDLE UTC
const updateUtcTime = () => {
  const currentUtcTime = Date.now();
  utc.innerHTML = currentUtcTime;
};

updateUtcTime();
setInterval(updateUtcTime, 1000);

//HANDLE CURRENT DAY
const updateCurrentDay = () => {
  const day = new Date().getDay();
  currentDay.innerHTML = daysOfTheWeek[day];
}



updateCurrentDay();
setInterval(updateCurrentDay,  24 * 60 * 60 * 1000);
