// import { mainFunction } from "./main.js";
import { products } from "./../../js/product.js";

const breadcrumb = document.getElementById("breadcrumb");
// console.log(breadcrumb.innerText);

//* *** === Add Main Content === *** */

const articleContent = () => {
    // console.log(localStorage.getItem("current-code"))
    const cards = document.querySelectorAll(".level-card");
    cards.forEach (card => {
        if (card.dataset.items === "false") {
            card.addEventListener("click", nextLevel(card))
        } else if (card.dataset.items === "true") {
            card.addEventListener("click", getItems (card))
        }
    })
    
};

const nextLevel = (el) => {
    return () => {
        const elCode = el.dataset.code;
        // const elItems = el.dataset.items;
        const splitCode = elCode.split("/");

        el.setAttribute ("title", elCode);

        const currentObject = getObject (splitCode);
        const curObjTitle = el.querySelector(".level-title").innerText;
        const angle = document.createElement("span");
        angle.innerHTML = "&gt; ";
        const link = document.createElement("a");
        link.href = "#";
        link.innerText = curObjTitle;

        breadcrumb.append(angle, link);

        const article = document.querySelector("article");
        let finalContent = "";
        const objectSub = currentObject.subDivision;
       
             objectSub.forEach (el => {
               
                     let image;
                    if (el.subDivision[0] === undefined) {
                        image = "no_photo.png";
                    } else {
                        image = el.subDivision[0].item_image;
                    }
                    
                    if (image === undefined) {
                        try {
                            image = el.subDivision[0].subDivision[0].item_image;
                        } catch (e) {
                            image = "no_photo.png";
                        }
                    }
                        const levelCardHtml =  `<div class="level-card" data-code="${el.code}" data-items="${el.items}" tabindex="0" title="${el.code}"><div class="level-image"><img src="./image/${image}.webp" loading="lazy"></div><h3 class="level-title">${el.name}</h3><span class="code">${el.items}</span></div>`;
                        finalContent = finalContent + levelCardHtml;
                  
                
            })
            
            article.innerHTML = finalContent;
            const codeSpan = article.querySelectorAll(".code");
            codeSpan.forEach (span => {
                if (span.innerText === "true") {
                    span.style.backgroundColor = "red";
                }
            })
        
        nextOne();
    }
}

const getObject = (el) => {
    
    let str = "";
    const parts = el;
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
};

const getItems = (el) => {
    return () => {
        localStorage.setItem("current-product-code", el.dataset.code);
        const goodsPageLink = document.getElementById("goods-page");
        goodsPageLink.click();
        nextOne();
    }
}

const nextOne = () => {
    const cards = document.querySelectorAll (".level-card");
    cards.forEach((card) => {

       if (card.dataset.items === "false") {
           card.addEventListener("click", nextLevel(card));
       } else if (card.dataset.items === "true") {
           card.addEventListener("click", getItems(card))
       }
    })
}
nextOne();

console.log(products[1].subDivision[3].subDivision[0].subDivision[1]);

export { articleContent };
