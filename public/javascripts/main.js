let menuBtn=document.querySelector("#menu");
let mobileMenu=document.querySelector(".mobile-menu");
let closeBtn=document.querySelector(".close-menu");

menuBtn.addEventListener('click',function () {
    mobileMenu.style.visibility='visible';
});

closeBtn.addEventListener('click', function () {
    mobileMenu.style.visibility='hidden';
});