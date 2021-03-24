const images = document.querySelectorAll(".product-page-img")
const variants = document.querySelectorAll(".choose-image")

variants.forEach(item => {
    item.addEventListener("click", () => {
        variants.forEach(value => {
            if (value.dataset.number === item.dataset.number) {
                value.style.border = "2px solid black"
            } else {
                value.style.border = "none"
            }
        })
        images.forEach(value => {
            if (value.dataset.number === item.dataset.number) {
                value.style.display = "block"
            } else {
                value.style.display = "none"
            }
        })
    })
})

const tocart = document.querySelector(".toCart")

tocart.addEventListener("click", () => {
    if (tocart.innerHTML.includes("Корзину")) {
        tocart.innerHTML = '<i class="fas fa-check button-cart-image"></i>В Корзине'
        document.querySelector(".add-remove-cart").style.display = "flex"
    } else {
        tocart.innerHTML = '<i class="fas fa-cart-plus button-cart-image"></i>В Корзину'
        document.querySelector(".add-remove-cart").style.display = "none"
        document.querySelector(".count").textContent = "1"
    }
})
const bg = document.querySelector(".black-bg-product")

bg.addEventListener("click", (e) => {
    if (e.target.classList.contains("black-bg-product") || e.target.classList.contains("closeWindowButtonProduct")) {
        document.querySelector("html").style.overflowY = "scroll"
        bg.classList.remove("active-product")
        document.querySelector(".product-window").classList.remove("active-product")
    }
})