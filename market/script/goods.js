import { openMenu } from "../../js/menu-open.js";
import { products } from "./../../js/product.js";

const aside = document.getElementById("side-bar");
const mainContent = document.getElementById("main-content");
const mainContentTitle = document.getElementById("main-content-title");
const breadCrumb = document.getElementById("breadcrumb");
const article = document.getElementById("article");
const templates = document.querySelectorAll("template");

// console.log(localStorage.getItem("current-code"));
// console.log(localStorage.getItem("current-product-code"));

const getObject = () => {
    const el = localStorage.getItem("current-product-code");
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

const currentObject = getObject();
// console.log(currentObject);

const cloneTemplates = (el) => {
    const articleTemplate = templates[0];
    const clone = articleTemplate.content.cloneNode(true);
    const image = clone.querySelector(".product-image a img");
    image.src = `./image/${el.item_image}.webp`;
    const name = clone.querySelector(".product-name span");
    name.innerText = el.item_name;
    const price = clone.querySelector(".product-buy div");
    price.innerText = el.item_price;
    const productCode = clone.querySelector(".product-code");
    productCode.innerText = el.item_code;
    const pageTitle = document.querySelector(".main-content-title");
    pageTitle.innerText = el.item_groupName;
   
    article.append(clone);
    const stringCode = el.item_string_code;
    const stringCodeSplit = stringCode.split("/");
    stringCodeSplit.length = stringCodeSplit.length-1;
    // console.log(breadCrumb);
}

const objectSub = currentObject.subDivision;
objectSub.forEach((obj) => {
    cloneTemplates(obj)
    document.title = obj.item_groupName;
    
});

const breadCrumbString = currentObject.subDivision[0].item_string_code;

const bcsSplit = breadCrumbString.split("/");
bcsSplit.length = bcsSplit.length-1;
let str;

breadCrumb.innerHTML = '<a href="./../../index.html">Каталог</a>';
for (let x = 0; x< bcsSplit.length; x++) {
    let link = document.createElement("a");
    const splitCode = currentObject.code.split("/");
    const pageCode = splitCode[0];
    link
    if (x === 0) {
        link.href = `./${pageCode}.html`;
         link.innerText = bcsSplit[x];
    } else {
         link.href = "#";
         link.innerText = bcsSplit[x];
    }
    breadCrumb.append(link);
}

