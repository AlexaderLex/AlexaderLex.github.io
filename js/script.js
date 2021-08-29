"use strict";

//* open header menu 

const list = document.querySelector("#header-nav ul");
const openMenu = document.getElementById("open-menu");

openMenu.addEventListener("click", (e) => {
    list.classList.toggle("open");
    openMenu.classList.toggle("open");
});

const mainContent = document.getElementById("main-content");
const mainContentSide = document.getElementById("main-content-side");
const sideItems = document.querySelectorAll(".side-item");
const mainContentBody = document.querySelector(".main-content-body");


const getData = (el) => {

    let htmlString = "";
    const newArray = [...el];

   for (let x = 0; x < sideItems.length; x++) {
    const item = sideItems[x];
    item.dataset.index = x;
    item.innerText = newArray[x].name;
    }
    sideItems.forEach (item  => {
        
        item.addEventListener ("click", (e) => {
            noActive();
            mainContentBody.innerHTML = "";
            const index = e.target.dataset.index;
            
            e.target.classList.add ("active");    

            const content = newArray[index].subDivision;
            content.forEach (part => {
                // console.log(part);

                let ulElement = document.createElement("ul");
                ulElement.className = "division-list"
                let divisionTitle = document.createElement("h2");
                divisionTitle.className = "division-title";
                divisionTitle.innerText = part.name;
                ulElement.append(divisionTitle);
                for (let x = 0; x < part.subDivision.length; x++) {
                    let elem = part.subDivision[x];
                    if (elem.index) {
                        let liElement = document.createElement("li");
                        liElement.className = "division-list-item";
                        liElement.innerText = elem.name;
                        ulElement.append(liElement);
                        mainContentBody.append(ulElement);
                    }
                }
            })
        })
    })
};

const noActive = () => {
    const sideEl = document.querySelectorAll(".side-item");
    sideEl.forEach (el => {
        if (el.classList.contains ("active")) {
            el.classList.remove("active");
        }
    })
 }





// let hex = "2639";

// const dec = parseInt(hex, 16)

// console.log(dec)
