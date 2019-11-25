
var aboutMe = document.querySelector(".nav-list--about-me");
var mySkills = document.querySelector(".nav-list--my-skills");
var myWork = document.querySelector(".nav-list--my-works");
var body = document.querySelector(".portfolio-body");

var skills_title = document.querySelector(".skills-title");
var works_title = document.querySelector(".works-title");

window.onscroll = function() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 0) {
    aboutMe.classList.add("nav-list--active");
    mySkills.classList.remove("nav-list--active");
    myWork.classList.remove("nav-list--active");

// Добавление анимации
    if (scrollTop > 100) {
      skills_title.classList.add('skills_animation');
      aboutMe.classList.remove("nav-list--active");
      mySkills.classList.add("nav-list--active");
      myWork.classList.remove("nav-list--active");

      if (scrollTop > 700) {
        works_title.classList.add('skills_animation');

    if (scrollTop > 1300) {
      aboutMe.classList.remove("nav-list--active");
      mySkills.classList.remove("nav-list--active");
      myWork.classList.add("nav-list--active");
    }
  }}}};



