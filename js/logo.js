'use strict'

let linkLogo = document.querySelectorAll('.my-skills__link'),
    imgLogo = document.querySelectorAll('.my-skills__logo');

linkLogo.forEach(linkLogo =>{
    linkLogo.addEventListener('mouseover', function(){
      var currnetLogo = this.getAttribute("data-type");
      imgLogo.forEach(imgLogo => {
          if (imgLogo.getAttribute('data-type') == currnetLogo == true) {
              imgLogo.classList.add('logo-animation');
          }
          linkLogo.addEventListener('mouseout', function(){
            imgLogo.classList.remove('logo-animation');
          })
        });
    });
  });


