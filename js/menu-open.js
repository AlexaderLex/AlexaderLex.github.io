const list = document.querySelector("#header-nav ul");
const openMenu = document.getElementById("open-menu");

if (openMenu !== null) {
    openMenu.addEventListener("click", () => {
    list.classList.toggle("open");
    openMenu.classList.toggle("open");
    });
}


export { openMenu };