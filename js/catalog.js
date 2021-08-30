"use strict";

//* open header menu 

import { levelOne } from "./levels.js";
import { openMenu } from "./menu-open.js";

const mainContent = document.getElementById("main-content");
// const insertString = 'item.insertAdjacentElement("beforeend", level)';

const buttonsArray = [];
const buttons = () => {
    const btns = document.querySelectorAll(".level-btn");
    btns.forEach(btn => buttonsArray.push(btn))
    const buttons = buttonsArray;
    // button.style.outline = "2px solid red";

    buttons.forEach(button => {
        const parent = button.parentElement.parentElement;
        const list = parent.querySelectorAll(".list");
        const subList = parent.querySelector(".sub-list");

        button.onclick = () => {
            const link = parent.querySelector(".level-link");
            const linkStyle = window.getComputedStyle(link);
            const linkColor = linkStyle.getPropertyValue("color");

            const arrow = parent.querySelector(".level-angle-down");
            arrow.classList.toggle("up");
            arrow.style.setProperty("--link", linkColor);
            // console.log(arrow);
            if (list[0]) {
                
                list[0].classList.toggle("active");
            } else {
                try {
                    subList.classList.toggle("active");
                    // console.log(subList.classList)
                } catch (e) {
                    // console.log(e)
                }
            }
        }
    })
};

const getData = () => {
    const catalogContent = levelOne().level1;
    const levels = catalogContent.querySelectorAll(".level-1-item");
    levels.forEach(el => {
            mainContent.append(el);
            buttons();
        })
        // console.log(levelsHTML)
};

getData();

const goodsArray = levelOne();

const showAll = () => {
    const showEl = document.getElementById("show");
    showEl.style.display = "none";
    const hideEl = document.getElementById("hide");
    hideEl.style.display = "block";
    const lists = document.querySelectorAll(".list");
    lists.forEach(list => {
        list.classList.add("active");
    })

    const subs = document.querySelectorAll(".sub-list");
    subs.forEach(sub => {
        sub.classList.add("active");
    })
};

const hideAll = () => {
    const showEl = document.getElementById("show");
    showEl.style.display = "block";
    const hideEl = document.getElementById("hide");
    hideEl.style.display = "none";
    const lists = document.querySelectorAll(".list");
    lists.forEach(list => {
        list.classList.remove("active");
    })

    const subs = document.querySelectorAll(".sub-list");
    subs.forEach(sub => {
        sub.classList.remove ("active");
    })
}

// showAll();

const showBtn = document.getElementById("show");

if (showBtn !== null) {
    showBtn.addEventListener("click", showAll);
}

const hideBtn = document.getElementById("hide");
if (hideBtn !== null) {
    hideBtn.addEventListener("click", hideAll);
}

window.addEventListener("scroll", () => {
    const scrollTop = document.getElementById("scroll-top");
    const winYOffset = window.scrollY;
        // console.log(window.scrollY);
    if(winYOffset > 200) {
        scrollTop.style.transform = "scale(1)";
    } else if (winYOffset < 200) {
        scrollTop.style.transform = "scale(0)";
    }
})

export { goodsArray };

