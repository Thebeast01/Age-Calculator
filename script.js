'use strict';
const yourAge = document.querySelector('.output');

const calcAge = () => {
  const inputValue = document.querySelector('.input-box').value;
  const age = 2023 - inputValue;
  yourAge.textContent = age;
};

const reset = () => {
    document.querySelector('.input-box').value = "";
    yourAge.textContent = 0;

}