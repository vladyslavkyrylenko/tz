var myimgSwiper = new Swiper('.swiper__container', {
   direction: 'horizontal',
   loop: true,

   pagination: {
      el: '.swiper__pagination',
      clickable: true,
   },

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiperbutton-prev',
   },
});
var myimgSwiper = new Swiper('.swiper-container-txt', {
   direction: 'horizontal',
   loop: true,

   pagination: {
      el: '.swiper-pagination-txt',
      clickable: true,
   },

   navigation: {
      nextEl: '.swiper-button-next-txt',
      prevEl: '.swiper-button-prev-txt',
   },
});


let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let body = document.querySelector('body');
burger.onclick = function () {
   this.classList.toggle('burger-active');
   body.classList.toggle('body-active');
   menu.classList.toggle('menu-active');
   let menuActive = document.querySelector('.menu-active');
   menuActive.onclick = function () {
      burger.classList.toggle('burger-active');
      body.classList.toggle('body-active');
      menu.classList.toggle('menu-active');
   }
}
