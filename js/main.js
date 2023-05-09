// header scroll
let nav = document.querySelector(".navbar");

let scrollBtn = document.querySelector(".scroll-button a");

let val;

// window.onscroll = function () {
//   if (document.documentElement.scrollTop > 20) {
//     nav.classList.add("sticky");
//     scrollBtn.style.display = "block";
//   } else {
//     nav.classList.remove("sticky");
//     scrollBtn.style.display = "none";
//   }
// }

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled")
  }
}



// nav hide small screen
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  })
})






// scroll button
// let scrollbtn = document.querySelector(".scroll-button a");

// let val;

// window.onscroll = function() {
//   if (document.documentElement.scrollTop > 20){
//     nav.classList.add("sticky");
//     scrollBtn.style.display = "block";
//   }else{
//     nav.classList.add("sticky");
//     scrollBtn.style.display = "none";
//   }
// }