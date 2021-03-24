import { ll } from "./localLib.js"

const blackbgreg = document.querySelector(".blackbgreg")
const login = document.querySelector(".login-nav")
const bodyEl2 = document.querySelector("html")
const regwindow = document.querySelector(".register")


login.addEventListener("click", () => {
    ll.closeBurgerMenu()
    bodyEl2.style.overflowY = "hidden"
    regwindow.classList.add("active-register")
    blackbgreg.classList.add("active-register")
})

blackbgreg.addEventListener('click', (e) => {
    if (e.target.classList.contains("blackbgreg")) {
       blackbgreg.classList.remove("active-register")
       regwindow.classList.remove("active-register")
       bodyEl2.style.overflowY = "scroll"
    }  
})


const logreg = document.querySelector(".choose-mode")
const logContainer = document.querySelectorAll(".inputs")
const modes = document.querySelectorAll(".log-reg")

logreg.addEventListener("click", e => {
    if (!e.target.classList.contains("choose-mode") && !e.target.classList.contains("line")) {
        logContainer.forEach(item => {
            if (item.dataset.mode === e.target.dataset.mode) {
                item.style.display = "block"
            } else {
                item.style.display = "none"
            }
        })
        modes.forEach(item => {
            if (item.dataset.mode === e.target.dataset.mode) {
                item.classList.add("act")
            } else {
                item.classList.remove("act")
            }
        })
    }   
})

const closeButton = document.querySelector(".closeWindowButton")
closeButton.addEventListener("click", () => {
    blackbgreg.classList.remove("active-register")
    regwindow.classList.remove("active-register")
    bodyEl2.style.overflowY = "scroll" 
})

const cbox = document.querySelector(".default-checkbox")
const customCBox = document.querySelector(".custom-checkbox-view")

cbox.addEventListener("change", () => {
    customCBox.classList.toggle('bgcBlack')
})