import { products } from "./product.js";

const levelOne = () => {
    
    const level1 = document.createElement("ul");
    const classString = "level-1";
    level1.classList.add("level-1", "list");
    // console.log(item);

    products.forEach (el => {
        const level = document.createElement("li");
        level.classList.add (classString + "-item", "level-item");
        level.dataset.code = el.code;
        const levDiv = document.createElement("div");
        levDiv.classList.add ("level-head", classString + "-head");
        levDiv.innerHTML = `<h3 class="level-title"><a href="#" class="level-link">${el.name}</a></h3><span class="level-qnt">${el.subDivision.length}</span><button class="level-btn"><span class="level-angle-down"></span></button>`;
        level.append(levDiv);
        level1.append(level);

        //* === *** levelTwo function *** === */
        levelTwo(el, level);

    });
    const levelsHTML = level1.outerHTML;

    
    return {level1, levelsHTML}; 
};

const levelTwo = (item, lev) => {
    const level2 = document.createElement("ul");
    const classString = "level-2";
    level2.classList.add(classString, "list");
    // console.log(item);

        const subItem = item.subDivision;
        subItem.forEach (el => {
            if (el.subDivision.length > 0) {
              
                const level = document.createElement("li");
                level.classList.add (classString + "-item", "level-item");
                level.dataset.code = el.code;
                const levDiv = document.createElement("div");
                levDiv.classList.add ("level-head", classString + "-item-head");
                levDiv.innerHTML = `<h3 class="level-title"><a href="#" class="level-link">${el.name}</a></h3><span class="level-qnt">${el.subDivision.length}</span><button class="level-btn"><span class="level-angle-down"></span></button>`;
                level.append(levDiv);
                level2.append(level);
                lev.append(level2);
                
                //* === *** levelThree function *** === */
                levelThree(el, level, "level-3");

                if (el.items) {
                    // console.log(el);
                    subLevelTwo(el, level, "level2");
                }
        }
    })
};

const levelThree = (item, lev, string) => {
    const level = document.createElement("ul");
    const classString = string;
    level.classList.add(classString, "list");
    // console.log(lev.innerText);

    if (item.items === false) {
        const levNext = item.subDivision;

        levNext.forEach (el => {
            if (el.level !== undefined) {
                lev.classList.add("next");
                const levelNextItem = document.createElement("li");
                levelNextItem.classList.add (classString + "-item", "level-item");
                levelNextItem.dataset.code = el.code;
                const levDiv = document.createElement("div");
                levDiv.classList.add ("level-head", classString + "-head");
                levDiv.innerHTML = `<h3 class="level-title"><a href="#" class="level-link">${el.name}</a></h3><span class="level-qnt">${el.subDivision.length+1}</span><button class="level-btn"><span class="level-angle-down"></span></button>`;
                levelNextItem.append(levDiv);
                level.append(levelNextItem);
                lev.append(level);
                // console.log(el.level)

                if (el.subDivision.length > 0 && el.items === false) {

                    //* === *** LevelFour function *** === */
                    levelFour (el, levelNextItem, "level-4");
                    // console.log(el);

                } else if (el.subDivision.length > 0 && el.items === true) {

                    //* === *** subLevelTwo function *** === */
                    subLevelThree(el, levelNextItem, "level-3");
                }
            }

        })
    }   
};

const subLevelTwo = (item, lev, string) => {
    const classString = string;
    const subLevel = document.createElement("ul");
    subLevel.classList.add("sub-" + classString, "sub-list");
    lev.classList.add("items");
    // console.log(lev);

    const subLevelItems = item.subDivision;
    subLevelItems.forEach (el => {
        const subItem = document.createElement("li");
        subItem.classList.add("sub-"+ classString + "-item", "product");
        subItem.dataset.code = el.item_code;
        subItem.dataset.image = el.item_image;
        subItem.setAttribute("title", el.item_code);
        const link = document.createElement("a");
        link.href = "#";
        link.innerText = el.item_name;
        subItem.append(link);
        subLevel.append(subItem);
        lev.append(subLevel)
        // console.log(el)
    })
};


const subLevelThree = (item, lev, string) => {
    const classString = string;
    const subLevel = document.createElement("ul");
    subLevel.classList.add("sub-" + classString, "sub-list");
    lev.classList.add("items");
    // console.log(lev);

    const subLevelItems = item.subDivision;
    subLevelItems.forEach (el => {
        const subItem = document.createElement("li");
        subItem.classList.add("sub-" + classString + "-item", "product");
        subItem.dataset.code = el.item_code;
        subItem.dataset.image = el.item_image;
        subItem.setAttribute("title", el.item_code);
        const link = document.createElement("a");
        link.href = "#";
        link.innerText = el.item_name;
        subItem.append(link);
        subLevel.append(subItem);
        lev.append(subLevel)
        // console.log(el)
    })
};

const levelFour = (item, lev, string) => {

    const level = document.createElement("ul");
    const classString = string;
    level.classList.add(classString, "list");
    lev.classList.add("next");
    lev.append(level);

    const levNext = item.subDivision;
    levNext.forEach (el => {
        if (el.level !== undefined) {
            const levelNextItem = document.createElement("li");
            levelNextItem.classList.add(classString + "-item", "level-item");
            levelNextItem.dataset.code = el.code;
            const levDiv = document.createElement("div");
            levDiv.classList.add ("level-head", classString + "-head");
            levDiv.innerHTML = `<h3 class="level-title"><a href="#" class="level-link">${el.name}</a></h3><span class="level-qnt">${el.subDivision.length+1}</span><button class="level-btn"><span class="level-angle-down"></span></button>`;
            levelNextItem.append(levDiv);
            level.append(levelNextItem);
            lev.append(level);

            //* === *** subLevelFour function *** === */
            subLevelFour(el, levelNextItem, "level-4");

        }
    })
};

const subLevelFour = (item, lev, string) => {
    const classString = string;
    const subLevel = document.createElement("ul");
    subLevel.classList.add("sub-" + classString, "sub-list");
    lev.classList.add("items");
    // console.log(lev);

    const subLevelItems = item.subDivision;
    subLevelItems.forEach (el => {
        const subItem = document.createElement("li");
        subItem.classList.add("sub_"+ classString + "-item", "product");
        subItem.dataset.code = el.item_code;
        subItem.dataset.image = el.item_image;
        subItem.setAttribute("title", el.item_code);
        const link = document.createElement("a");
        link.href = "#";
        link.innerText = el.item_name;
        subItem.append(link);
        subLevel.append(subItem);
        lev.append(subLevel)
        // console.log(el)
    })
};

export { levelOne };