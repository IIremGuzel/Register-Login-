"use strict";

const firstName = document.querySelector(".fisrtName");
const email = document.querySelector(".email");
const sifre = document.querySelector("#password");
const reSifre = document.querySelector("#confirmPassword");
console.log(firstName);
document.querySelector(".btn").addEventListener("click", function () {
  if (sifre !== reSifre) {
    alert("Hatalı Şifre");
  }
  ,
});
