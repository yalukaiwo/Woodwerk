import { ll } from "./localLib.js";

const burgerMenu = document.getElementById("burgerMenu");
const burgerMenuContent = document.getElementById("burgerMenuContent")
const blackBackGround = document.querySelector(".blackbg")
const topStick = document.querySelector(".burger-style-top");
const centerStick = document.querySelector(".burger-style-center");
const bottomStick = document.querySelector(".burger-style-bottom");
const menuTitle = document.querySelector(".main-menu-title");
const bodyEl = document.querySelector("html")

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle("act")
    blackBackGround.classList.toggle("active-burger-menu")
    menuTitle.classList.toggle("active-burger-menu")
    burgerMenuContent.classList.toggle("active-burger-menu")
    topStick.classList.toggle("active-burger-menu")
    centerStick.classList.toggle("active-burger-menu")
    bottomStick.classList.toggle("active-burger-menu")
    bodyEl.classList.toggle("ovh")

});

blackBackGround.addEventListener('click', (e) => {
    if (!e.target.classList.contains("burger-menu-content") && !e.target.classList.contains("main-menu-title") && !e.target.classList.contains("burger-menu-content-subtitle")) {
        ll.closeBurgerMenu()
    }
})