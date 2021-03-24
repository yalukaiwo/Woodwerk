import { marketItemList } from "./marketGenerator.js"
import { catNameList } from "./marketGenerator.js"
import { ll } from "./localLib.js"

catNameList.forEach((item) => {
    let tempElement = document.getElementById(marketItemList[item].elementId)
    let navElements = document.querySelectorAll(marketItemList[item].secondaryClassName)
    navElements.forEach((value) => {
        value.addEventListener('click', () => {
            ll.closeBurgerMenu()
            tempElement.scrollIntoView({block: "start", behavior: "smooth"})
        })
    })
})
const partnersSection = document.querySelector(".partners-root")
const partnersNav = document.querySelectorAll(".partners-nav")
partnersNav.forEach((value) => {
    value.addEventListener('click', () => {
        ll.closeBurgerMenu()
        partnersSection.scrollIntoView({block: "start", behavior: "smooth"})
    })
})