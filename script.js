'use strict'
const deadline = "01 January 2023";
const timeOfDay = document.getElementById('time-of-day');
const dayOfWeek = document.getElementById('day-of-week');
const curentTime = document.getElementById('curent-time');
const timeNewYears = document.getElementById('time-new-years');

let date = new Date();
let dateNewYears = new Date(deadline).getTime();
let timeBeforeNewYear = (dateNewYears - date) / 1000;

const getTimeOfDay = () => {

  if (date.getHours() >= 0 && date.getHours() < 6) {
    return "ой ночи!";
  }
  if (date.getHours() >= 6 && date.getHours() < 12) {
    return "ое утро!";
  }
  if (date.getHours() >= 12 && date.getHours() < 18) {
    return "ый день!";
  }
  if (date.getHours() >= 18 && date.getHours() < 24) {
    return "ый вечер!";
  }
};

const getDayOfWeek = () => {
  const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  let today = date.getDay();
  return week[today - 1];
};

const getCurentTime = () => {
  return date.toLocaleTimeString('en');
};

const getTimeNewYears = () => {
  let dateNewYears = new Date(deadline).getTime();
  let timeBeforeNewYear = (dateNewYears - date) / 1000;

  let days = Math.floor((timeBeforeNewYear / 60 / 60) / 24);
  let days100 = days % 100;
  let days10 = days100 % 10;

  if (days === 1 || days10 === 1) {
    return days + ' день';
  } else if (days > 1 && days < 5 || days10 > 1 && days10 < 5) {
    return days + ' дня';
  } else {
    return days + ' дней';
  }
}

const resultOutput = () => {
  timeOfDay.innerText = getTimeOfDay();
  dayOfWeek.innerText = getDayOfWeek();
  curentTime.innerText = getCurentTime();
  timeNewYears.innerText = getTimeNewYears();
};

resultOutput();