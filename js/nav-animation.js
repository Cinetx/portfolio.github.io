
// плавное перемещение страницы к нужному блоку
$(document).ready(function(){
  $("nav a").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({scrollTop: destination }, 800);
  });
});
