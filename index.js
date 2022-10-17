'use strict';

// labels
const labelHour = document.querySelector('.hour');
const labelMinute = document.querySelector('.minute');
const labelSecond = document.querySelector('.second');
const labelDay = document.querySelector('.day');
const labelDate = document.querySelector('.date');
const labelMeridiem = document.querySelector('.meridiem');

const updateTime = function () {
  const dateInfo = new Date();
  let hour = dateInfo.getHours();
  if (hour === 0) {
    hour = 12;
  } else if (hour > 12) {
    hour = hour - 12;
  }
  labelHour.textContent = hour < 10 ? `0${hour}` : hour;

  // minute
  const minute = dateInfo.getMinutes();
  labelMinute.textContent = minute < 10 ? `0${minute}` : minute;

  // second
  const second =
    dateInfo.getSeconds() < 10
      ? `0${dateInfo.getSeconds()}`
      : dateInfo.getSeconds();
  labelSecond.textContent = second;

  // meridiem
  const ampm = dateInfo.getHours() >= 12 ? 'PM' : 'AM';
  labelMeridiem.textContent = ampm;

  // day
  const dow = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const day = dateInfo.getDay();
  labelDay.textContent = dow[day];

  // current date
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const date = dateInfo.getDate();
  const month = dateInfo.getMonth();
  const year = dateInfo.getFullYear();
  const currentDate = `${date} ${months[month]}, ${year}`;
  labelDate.textContent = currentDate;
};

updateTime();
setInterval(function () {
  updateTime();
}, 1000);
