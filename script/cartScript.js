import { cart, ll } from "./localLib.js" 

const bg = document.querySelector(".blackbg-cart")
const nav = document.querySelector(".cart-nav")
const closecart = document.querySelector(".closecart")

bg.addEventListener('click', (e) => {
    if (e.target.classList.contains("blackbg-cart")) {
        document.querySelector(".cart-window").classList.remove("active-cart")
        bg.classList.remove("active-cart")
        document.querySelector("html").style.overflowY = "scroll"
    }
})

nav.addEventListener('click', () => {
    ll.cartItemsCreate()
    bg.classList.add("active-cart")
    document.querySelector(".cart-window").classList.add("active-cart")
    document.querySelector("html").style.overflowY = "hidden"
})

closecart.addEventListener("click", () => {
    document.querySelector(".cart-window").classList.remove("active-cart")
    bg.classList.remove("active-cart")
    document.querySelector("html").style.overflowY = "scroll"
})