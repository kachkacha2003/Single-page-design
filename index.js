"use strict";
console.log("lasha");
let img = document.querySelector(".img");
let div = document.querySelector(".images");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
console.log(left);
console.log(right);
let img_width;

console.log(img.clientWidth);

window.addEventListener("load", () => {
  img_width = img.clientWidth+30;
  div.scrollLeft = (div.clientWidth)-window.innerWidth/2;  
})

right.addEventListener("click", () => {
  div.style.justifyContent="none"
  div.scrollLeft += img_width ;
  
});
left.addEventListener("click", () => {
  div.style.justifyContent="none"
  div.scrollLeft -= img_width;

});

//img[i].src=img[i].nextSibling.src
