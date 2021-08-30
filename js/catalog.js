"use strict";

//* open header menu 

import { levelOne } from "./levels.js";
import { openMenu } from "./menu-open.js";
import { products } from "./product.js"

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
});
const getObject = (el) => {
    // const el = localStorage.getItem("current-product-code");
    // const el = example;
    let str = "";
    const parts = el.split("/");
    for (let x = 0; x < parts.length; x++) {
        let part = parts[x];
        
        if (x===0) {
            str = `products[${part}].`;
        }
         if (x > 0 && x < parts.length-1) {
             str = str + `subDivision[${part}].`;
         }
         if (x === parts.length-1) {
            str = str + `subDivision[${part}]`;
        }
    }
    const final = eval(str);
    return final;
}

const cloneTemplates = (el) => {
    const articleTemplate = document.getElementById("card-template");
    const clone = articleTemplate.content.cloneNode(true);
    const image = clone.querySelector(".product-image a img");
    image.src = `./image/${el.item_image}.webp`;
    const name = clone.querySelector(".product-name span");
    name.innerText = el.item_name;
    const price = clone.querySelector(".product-buy div");
    price.innerText = el.item_price;
    const productCode = clone.querySelector(".product-code");
    productCode.innerText = el.item_code;
   
    const modal = document.getElementById("modal");
    // modal.innerHTML = "";
    modal.append(clone);
    modal.style.transform = "scale(1)";

    
    const closeButton = document.getElementById("close");
    closeButton.addEventListener('click', () => {
    const modal = document.getElementById("modal");
    const productCard = modal.querySelector(".product-card");
    modal.style.transform = "scale(0)"
    productCard.remove();
    
})

}
const showElementCard = (el) => {
    return () => {
        const elementCode = el.dataset.code;
        const elementData = getObject(elementCode);
        cloneTemplates(elementData);
    }
};

const productsElements = document.querySelectorAll(".product");
productsElements.forEach((element) => {
    element.addEventListener("click", showElementCard(element));
});



export { goodsArray };

