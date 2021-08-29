"use strict";

// import { products } from "./product.js";
// import { levelOne } from "./levels.js";
// import { openMenu } from "./menu-open.js";

const levels = document.querySelectorAll(".level-card");

levels.forEach (level => {
    // console.log(level)
    level.addEventListener ("click", () => {
        const link = document.createElement("a");
        link.href = `./market/${level.dataset.code}.html`;
        link.click();
    })
})