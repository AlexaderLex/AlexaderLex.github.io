"use strict";

const newArray = [...allProduct];

const isItem = (el)=> {
    const subLevel = el.subDivision;
    subLevel.forEach (element => {
        if (element.subDivision === undefined) {
            el.items = true;
        } else if (element.subDivision !== undefined) {
            el.items = false;
        }
    })
};
const itemCode = (el) => {
    try {
        for (let x = 0; x < el.subDivision.length; x++) {
        let item = el.subDivision[x];
        item.item_code = el.code + "/" + x;
        item.item_string_code = el.string_code + "/" + item.item_name; }
        // console.log(el)
    } catch (e) {
        // console.log(e)
    }
};

const levelCode = (el, pre_level) => {
    el.code = pre_level.code + "/" + el.index;
    el.string_code = pre_level.string_code + "/" + el.name;
};

// * *** ======== *** */

const generalObj = getLevelsAndItems();
 
const levelOne = generalObj.lev1;
const levelOneItems = generalObj.lev1_items;

const levelTwo = generalObj.lev2;
const levelTwoItems = generalObj.lev2_items;

const levelThree = generalObj.lev3;
const levelThreeItems = generalObj.lev3_items;

const levelFour = generalObj.lev4;
const levelFourItems = generalObj.lev4_items;

const levelFive = generalObj.lev5;
const levelFiveItems = generalObj.lev5_items;

const showLevel = (level) => {
    console.log(level);
};



function getLevelsAndItems () {
    let lev1, lev2, lev2_items, lev3, lev3_items, lev4, lev4_items;
    lev1 = [];
    lev2 = [];
    lev2_items = [];
    lev3 = [];
    lev3_items = [];
    lev4 = [];
    lev4_items = [];
        
    newArray.forEach (level_1 => {
        lev1.push (level_1);
        level_1.level = "level_1";
        level_1.code = String (level_1.index);
        level_1.string_code = level_1.name;
        isItem (level_1);
        const subLevel_1 = level_1.subDivision;
        
        subLevel_1.forEach (level_2 => {
            isItem (level_2);
            level_2.level = "level_2";
            levelCode (level_2, level_1);
            
            if (level_2.items) {
                const levelItems = level_2;
                itemCode (levelItems);
                // lev2_items.push (level_2);
                level_2.subDivision.forEach (item => {
                    lev2_items.push (item);
                })
            }
            if (level_2.subDivision.length !== 0) {
                lev2.push (level_2)

                const subLevel_2 = level_2.subDivision;
                subLevel_2.forEach (level_3 => {
                    if (level_3.subDivision !== undefined && level_3.subDivision.length !== 0) {
                        isItem (level_3);
                        level_3.level = "level_3";
                        levelCode (level_3, level_2);

                        lev3.push (level_3);
                        if (level_3.items) {
                            itemCode (level_3);

                            // lev3_items.push(level_3.subDivision);
                            level_3.subDivision.forEach (item => {
                                lev3_items.push (item);
                            })
                        }

                        const subLevel_3 = level_3.subDivision;
                        // console.log(subLevel_3)
                        subLevel_3.forEach (level_4 => {
                            // console.log(level_4)
                            if (level_4.subDivision !== undefined && level_4.subDivision.length !== 0) {
                                isItem (level_4);
                                level_4.level = "level_4";
                                levelCode (level_4, level_3);

                                lev4.push (level_4);
                                if (level_4.items) {
                                    itemCode (level_4);
                                    
                                    // lev4_items.push (level_4.subDivision);
                                    level_4.subDivision.forEach(item => {
                                        lev4_items.push (item);
                                    })
                                }
                                
                            }
                             
                        })
                    }

                })
            }
        });
        
    })
   return {lev1, lev2, lev2_items, lev3, lev3_items, lev4, lev4_items};
};


// showLevel(levelFourItems);

 const itemsQuantity = levelTwoItems.length + levelThreeItems.length + levelFourItems.length;
//  console.log(itemsQuantity)

const itemsArray = [levelTwoItems, levelThreeItems, levelFourItems];

function getShortImageURL() {
    const brokeImageArr = [];
    itemsArray.forEach (array => { 
        array.forEach (item => {

            const imageStr = item.item_image;

            try {
                const imageStrArr = imageStr.split("/");
                const short = imageStrArr.pop();
                const shortImage = short;
                item.item_image = shortImage;
                // console.log(imageStrArr);
            } catch (e) {
                // console.log(item.item_code)
                brokeImageArr.push(item.item_code);
            }
            // const imageStrArr = imageStr.split("/");
            // const short = imageStrArr[imagStrArr.length-1];
            // const shortImage = short;

        })
    })
    shoeBrokenImage(brokeImageArr);
}

getShortImageURL();

function shortGroupImageURL () {
    const brokeGroupImageArr = [];
    itemsArray.forEach (array => { 
        array.forEach (item => {

            const imageStr = item.item_groupImage;
            if (imageStr !== "none") {
                try {
                const imageStrArr = imageStr.split("/");
                const short = imageStrArr.pop();
                const shortImage = short;
                item.item_groupImage = shortImage;
                // console.log(imageStrArr);
            } catch (e) {
                // console.log(item.item_code)
                brokeGroupImageArr.push(item.item_code);
            }
            }
        })
    })
    // shoeBrokenImage(brokeGroupImageArr);
}

shortGroupImageURL();
console.log(levelOne);

const one = newArray[5].subDivision[6].subDivision[1].subDivision[0].subDivision[6]
// console.log(one)

const imageArr = one.item_image.split("/");
const last = imageArr.pop();
// console.log(last)

function shoeBrokenImage(el) {
    el.forEach (part => {
        let frag;
        let string = "";
        const partArr = part.split("/");
        for ( let x = 0; x < partArr.length; x++) {
            let chunk = partArr[x];
            
            if (x === 0) {
                frag = `newArray[${chunk}].`;
            } else {
                frag = `subDivision[${chunk}].`
            } 
            if (x === partArr.length-1) {
                frag = `subDivision[${chunk}]`;
            }
            string += frag;
           
            
        }
        //  console.log(string);
        //  console.log(eval(string))
    })
    // console.log(el)
}



