// Логика следующая при клике на бургер открывается меню или закрывваетсчя
// При скролле вниз меню пропадает
// При скролле вверх меню появляется

// var path = document.querySelector('.works-title path');
// console.log(path.getTotalLength());

// var path = document.querySelector('.skills-title path');
// for (let i = 0; i < path; i++){
// console.log(path.getTotalLength());}

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

      if (scrollTop > 700) {
        works_title.classList.add('skills_animation');

  if (scrollTop > 200) {
    aboutMe.classList.remove("nav-list--active");
    mySkills.classList.add("nav-list--active");
    myWork.classList.remove("nav-list--active");

    if (scrollTop > 1300) {
      aboutMe.classList.remove("nav-list--active");
      mySkills.classList.remove("nav-list--active");
      myWork.classList.add("nav-list--active");
    }
  }}}}};
//
// aboutMe.addEventListener("click", function () {
//   window.scroll({
//     top: 1,
//     left: 0,
//     behavior: 'smooth'
//   });
// });
//
// mySkills.addEventListener("click", function () {
//   window.scroll({
//     top: 700,
//     left: 0,
//     behavior: 'smooth'
//   });
//   // 0, 700);
//
// });
//
// myWork.addEventListener("click", function () {
//   window.scroll({
//     top: 1900,
//     left: 0,
//     behavior: 'smooth'
//   });
// });
//
// mySkills.addEventListener("click", function () {
//   window.classList.add(".my-skills__animation");
// });

$(document).ready(function(){
  // плавное перемещение страницы к нужному блоку
  $("nav a").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({scrollTop: destination }, 800);
  });
});

// const logo = document.querySelectorAll("#logo path");
//
// for (let i = 0; i < logo.length; i++){
//   console.log('Letter ${i} is ${logo[i].getTotalLength()}');
// }
// console.log(logo);



//
// $(window).scroll(function(){
//   if ( $(this).scrollTop() > el.offset().top - 200 ) {
//     skills_animation.addClass('skills_animation');
//   }
// });
