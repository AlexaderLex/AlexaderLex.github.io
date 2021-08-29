import { products } from "./../../js/product.js";
import { levelOne } from "./../../js/levels.js";
import { openMenu } from "./../../js/menu-open.js";

const crumbs = document.getElementById("breadcrumb");
const mainFunction = () => {
    const mainContent = document.querySelector(".main-content");
    const body = document.body;
    const id = body.id;
    const article = document.createElement("article");
    article.className = "level";
    
    const itemsArray = Array.from (products);

    const thisLevel = itemsArray[id];

    const subDiv = thisLevel.subDivision;

    subDiv.forEach (el => {
        if (el.subDivision.length > 0) {
            const elSub = el.subDivision;
            // console.log(el);
            const levelCard = document.createElement("div");
            levelCard.className = "level-card";
            levelCard.dataset.code = el.code;
            levelCard.setAttribute("title", el.code)
            levelCard.dataset.items = el.items;
            levelCard.setAttribute("tabindex", "0");
            const levelImage = document.createElement("div");
            levelImage.className = "level-image";
            const image = document.createElement("img");
            const elCode = el.code;
            const elFixed = elCode.replace("/", "-");
            image.src = `./level-2/${elFixed}.webp`;
            const levelTitle = document.createElement("h3");
            levelTitle.className = "level-title";
            levelTitle.innerText = el.name;
            const trueOrFalse = document.createElement("span");
            trueOrFalse.innerText = el.items;
            trueOrFalse.className = "code";
            if (el.items === true) {
                trueOrFalse.style.backgroundColor = "red";
            }
            levelImage.append(image);
            levelCard.append(levelImage, levelTitle, trueOrFalse);

            article.append(levelCard)
            mainContent.append(article);
           
        }
    })
    // dealingWithCards();
    // console.log(id)
}

const openMenuFunc = () => {
    const list = document.querySelector("#header-nav ul");
    const openMenu = document.getElementById("open-menu");

    if (openMenu !== null) {
        openMenu.addEventListener("click", (e) => {
        list.classList.toggle("open");
        openMenu.classList.toggle("open");
        });
    }
};


export { mainFunction };
