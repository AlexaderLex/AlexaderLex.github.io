"use strict";

//* *** Slider ***************** */

const slider = document.querySelector(".slider");
const wrapper = document.querySelector(".wrapper");
const sliderItems = document.querySelectorAll(".slider-item");
const butts = document.querySelectorAll(".buttons button");
const prevBtn = document.querySelectorAll(".prev");
const nextBtn = document.querySelector(".next");


//* Wrapper *** */

sliderItems.forEach(item => {
    // console.log(item)
});


function removeActive () {
    butts.forEach(btn => {
        if (btn.classList.contains ("active")) {
            btn.classList.remove ("active");
        }
    });
};


//* buttons *** */

butts.forEach(button => {

    const frame = slider.clientWidth;
    button.addEventListener("click", (e) => {
       clearInterval(move);
       removeActive();
       e.target.classList.toggle("active");
       let index = e.target.dataset.buttonIndex;

       wrapper.style.left = (frame * index) * -1 + "px";
    //    console.log(sliderItems[index].offsetLeft);
   })
});

//* ================================================= */

let x = 0;
let move = setInterval(sliderMove, 2500);

function sliderMove () {
    const frame = slider.clientWidth;
    let button = butts[x];
   
    removeActive();

    button.classList.toggle("active");
    wrapper.style.left = (frame * x) * -1 + "px";
    
        x++;

   if (x>=9) {
       x= 0;
       clearInterval(move);
   }

};


