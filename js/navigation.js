// Логика следующая при клике на бургер открывается меню или закрывваетсчя
// При скролле вниз меню пропадает
// При скролле вверх меню появляется


var aboutMe = document.querySelector(".nav-list--about-me");
var mySkills = document.querySelector(".nav-list--my-skills");
var myWork = document.querySelector(".nav-list--my-works");
var body = document.querySelector(".portfolio-body");


window.onscroll = function() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 0) {
    aboutMe.classList.add("nav-list--active");
    mySkills.classList.remove("nav-list--active");
    myWork.classList.remove("nav-list--active");
  if (scrollTop > 500) {
    aboutMe.classList.remove("nav-list--active");
    mySkills.classList.add("nav-list--active");
    myWork.classList.remove("nav-list--active");
    if (scrollTop > 1000) {
      aboutMe.classList.remove("nav-list--active");
      mySkills.classList.remove("nav-list--active");
      myWork.classList.add("nav-list--active");
    }
  }}};


