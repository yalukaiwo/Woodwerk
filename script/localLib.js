export const cart = []

export const ll = {
    closeBurgerMenu: () => {
        const burgerMenuContent = document.getElementById("burgerMenuContent")
        const blackBackGround = document.querySelector(".blackbg")
        const topStick = document.querySelector(".burger-style-top");
        const centerStick = document.querySelector(".burger-style-center");
        const bottomStick = document.querySelector(".burger-style-bottom");
        const menuTitle = document.querySelector(".main-menu-title");
        const bodyEl = document.querySelector("html")
        const burgerMenu = document.getElementById("burgerMenu");
        burgerMenu.classList.remove("act")
        bodyEl.classList.remove("ovh")        
        blackBackGround.classList.remove("active-burger-menu")
        menuTitle.classList.remove("active-burger-menu")
        burgerMenuContent.classList.remove("active-burger-menu")
        topStick.classList.remove("active-burger-menu")
        centerStick.classList.remove("active-burger-menu")
        bottomStick.classList.remove("active-burger-menu")
    },
    fastCreate: (elName, classList) => {
        const element = document.createElement(elName)
        element.classList.add(classList)
        return element
    },
    addonsSort: (item) => {
        const addonsSorted = []
        item.forEach((value) => {
            if (value.isSale && value.isNew) {
                addonsSorted.push(value)
            }
        }) 
        item.forEach((value) => {
            if (value.isSale && !value.isNew) {
                addonsSorted.push(value)
            }
        }) 
        item.forEach((value) => {
            if (value.isNew && !value.isSale) {
                addonsSorted.push(value)
            }
        }) 
        item.forEach((value) => {
            if (!value.isNew && !value.isSale) {
                addonsSorted.push(value)
            }
        })
        return addonsSorted 
    },
    createMarketCategory: (categoryList) => {
        const categoryItemsSorted = ll.addonsSort(categoryList.itemsList)
        const container = document.querySelector(".content")
        const categoryName = ll.fastCreate("div", categoryList.categoryClassName)
        categoryName.id = categoryList.elementId
        container.append(categoryName)
        const categoryTitle = ll.fastCreate("h2", "content-item-title")
        categoryTitle.textContent = categoryList.categoryName
        categoryName.append(categoryTitle)
        const wrapper = ll.fastCreate("div", "content-item-wrapper")
        categoryName.append(wrapper)
        categoryItemsSorted.forEach(item => {
            let contentItem = ll.fastCreate("div", "content-item")
            contentItem.classList.add(item.id)
            let image = ll.fastCreate("img", "content-item-img")            
            image.src = item.url
            image.alt = item.imgAltName
            contentItem.append(image)
            let toppings = ll.fastCreate("div", "additional-things")
            contentItem.append(toppings)
            let contentItemView = ll.fastCreate("div", "content-item-view")
            contentItem.append(contentItemView)
            let descriptionElementName = ll.fastCreate("div", "description-element-name")
            contentItemView.append(descriptionElementName)
            let contentItemPositionName = ll.fastCreate("h4", "content-item-position-name")
            contentItemPositionName.textContent = item.name
            descriptionElementName.append(contentItemPositionName)
            let contentItemPositionSize = ll.fastCreate("p", "content-item-position-size")
            contentItemPositionSize.textContent = item.size
            descriptionElementName.append(contentItemPositionSize)
            let priceElement = ll.fastCreate("div", "price")
            contentItemView.append(priceElement)
            let priceText = ll.fastCreate("p", "price-text")
            priceText.textContent = item.price
            let priceTextSpan = ll.fastCreate("span", "hrn-icon")
            priceTextSpan.textContent = "₴"
            priceElement.append(priceText)
            wrapper.append(contentItem)
            if (item.isSale) {
                let sale = ll.fastCreate("div", "saleItem")
                let timingNewOne = ll.fastCreate("p", "newItemText")
                timingNewOne.textContent = `акция -${item.salePercent}%`
                sale.append(timingNewOne)
                toppings.append(sale)
                priceText.textContent = Math.floor(+item.price*(1-(+item.salePercent/100)))
                let origPrice = ll.fastCreate("p", "original-price-if-sale")
                origPrice.textContent = `${item.price}₴`
                priceElement.append(origPrice)
            }
            if (item.isNew) {
                let newItem = ll.fastCreate("div", "newItem")
                let timingNew = ll.fastCreate("p", "newItemText")
                timingNew.textContent = "новый"
                newItem.append(timingNew)
                toppings.append(newItem)
            }
            priceText.append(priceTextSpan)
            let viewElement = ll.fastCreate("div", "view")
            contentItemView.append(viewElement)
            let viewText = ll.fastCreate("p", "view-text")
            viewText.textContent = "Купить"
            viewElement.append(viewText)
            let tempContentItem = document.querySelector(`.${item.id}`)
            tempContentItem.addEventListener("click", () => {
                const images = document.querySelectorAll(".product-page-img")
                const chooses = document.querySelectorAll(".choose-image")
                images[0].src = item.url
                images[1].src = item.urlOne
                chooses[0].src = item.url
                chooses[1].src = item.urlOne
                const fullName = document.querySelector(".product-page-name")
                fullName.textContent = item.name
                const size = document.querySelector(".product-page-size")
                size.textContent = item.size
                const paragraph = document.querySelector(".product-paragraph")
                paragraph.textContent = item.paragraph
                const price = document.querySelector(".product-page-price")
                price.innerHTML = `${item.price}<span class="hrn-text">грн</span>`
                const notPrice = document.querySelector(".product-page-price-not-actual")
                if (item.isSale) {                
                    price.innerHTML = `${Math.floor(+item.price*(1-(+item.salePercent/100)))}<span class="hrn-text">грн</span>`
                    notPrice.innerHTML = `${item.price}<span class="hrn-text-not">грн</span>`
                    notPrice.style.display = "block"
                } else {
                    notPrice.style.display = "none"
                }
                const type = document.querySelector(".type")
                const mat = document.querySelector(".material")
                const wid = document.querySelector(".width")
                const heit = document.querySelector(".height")
                const dep = document.querySelector(".depth")
                const wei = document.querySelector(".weight")
                const countr = document.querySelector(".country")
                type.textContent = item.type
                mat.textContent = item.material
                wid.innerHTML = `${item.width}<span class="sm-coof">см</span>`
                heit.innerHTML = `${item.height}<span class="sm-coof">см</span>`
                wei.innerHTML = `${item.weight}<span class="sm-coof">кг</span>`
                dep.innerHTML = `${item.depth}<span class="sm-coof">см</span>`
                countr.textContent = item.country
                const tocart = document.querySelector(".toCart")
                let tempIndex = -1
                tocart.id = item.id
                cart.forEach((val, index) => {
                    if (tocart.id === val.id) {
                        tempIndex = index
                    }
                })
                if (!cart.includes(item)) {
                    tocart.innerHTML = '<i class="fas fa-cart-plus button-cart-image"></i>В Корзину'
                    document.querySelector(".add-remove-cart").style.display = "none"
                    document.querySelector(".count").textContent = "1"
                } else {
                    tocart.innerHTML = '<i class="fas fa-check button-cart-image"></i>В Корзине'
                    document.querySelector(".add-remove-cart").style.display = "flex"
                    document.querySelector(".count").textContent = cart[tempIndex].cartAmount
                    const plus = document.querySelector(".plus-button")
                    plus.onclick = () => {
                        cart[tempIndex].cartAmount += 1
                        document.querySelector(".count").textContent = cart[tempIndex].cartAmount 
                    }
            
                    const minus = document.querySelector(".minus-button")
            
                    minus.onclick = () => {
                        if (document.querySelector(".count").textContent !== "1") {
                            cart[tempIndex].cartAmount -= 1
                            document.querySelector(".count").textContent = cart[tempIndex].cartAmount
                        } else {
                            tocart.innerHTML = '<i class="fas fa-cart-plus button-cart-image"></i>В Корзину'
                            document.querySelector(".add-remove-cart").style.display = "none"
                            cart.splice(tempIndex, 1)
                            document.querySelector(".count").textContent = "1"
                        }
                    }
                    
                }
                
                tocart.onclick = (e) => {
                    let tempItem = {}
                    let tempIndex = -1
                    cart.forEach((val, index) => {
                        if (tocart.id === val.id) {
                            tempItem = val
                            tempIndex = index
                        }
                    })
                    let checkNumber = Object.keys(tempItem).length == 0
                    if (checkNumber)  {
                        cart.push(item)
                        const plus = document.querySelector(".plus-button")
                        cart.forEach((val, index) => {
                            if (tocart.id === val.id) {
                                tempItem = val
                                tempIndex = index
                            }
                        })
                        cart[tempIndex].cartAmount = 1
                        plus.onclick = () => {
                            cart[tempIndex].cartAmount += 1
                            document.querySelector(".count").textContent = cart[tempIndex].cartAmount 
                        }

                        const minus = document.querySelector(".minus-button")

                        minus.onclick = () => {
                            if (document.querySelector(".count").textContent !== "1") {
                                cart[tempIndex].cartAmount -= 1
                                document.querySelector(".count").textContent = cart[tempIndex].cartAmount
                            } else {
                                tocart.innerHTML = '<i class="fas fa-cart-plus button-cart-image"></i>В Корзину'
                                document.querySelector(".add-remove-cart").style.display = "none"
                                cart.splice(tempIndex, 1)
                                document.querySelector(".count").textContent = "1"
                            }
                        }
                    } else {
                        cart.splice(tempIndex, 1)
                    }
                }
                
                document.querySelector("html").style.overflowY = "hidden"
                const bg = document.querySelector(".black-bg-product")
                const window = document.querySelector(".product-window")
                bg.classList.add("active-product")
                window.classList.add("active-product")
            })
        })
    },
    cartItemsClear: () => {
        const items = document.querySelectorAll(".cart-position")
        items.forEach(item => {
            item.remove()
        })
    },
    cartItemsCreate: () => {
        ll.cartItemsClear()
        let finalPrice = 0
        if (cart.length === 0) {
            const empty = document.querySelector(".empty-cart")
            empty.style.display = "block"
            document.querySelector(".final-sum-text").textContent = 0
        } else {
            const empty = document.querySelector(".empty-cart")
            empty.style.display = "none"
            cart.forEach(item => {
                const cartBody = document.querySelector(".cart-body")
                const cartPosition = ll.fastCreate("div", "cart-position")
                const posInfo = ll.fastCreate("div", "cart-position-info")
                cartBody.append(cartPosition)
                cartPosition.append(posInfo)
                const cartImage = ll.fastCreate("div", "cart-image")
                posInfo.append(cartImage)
                const image = ll.fastCreate("img", "cart-position-image")
                image.src = item.url
                image.alt = item.imgAltName
                cartImage.append(image)
                const cartInfo = ll.fastCreate("div", "cart-info")
                posInfo.append(cartInfo)
                const cartTitle = ll.fastCreate("h2", "cart-position-title")
                cartInfo.append(cartTitle)
                cartTitle.textContent = item.name
                const cartSize = ll.fastCreate("h3", "cart-position-size")
                cartSize.textContent = item.size
                cartInfo.append(cartSize)
                const cartCounterBox = ll.fastCreate("div", "cart-counter-box")
                cartPosition.append(cartCounterBox)
                const cartMinus = ll.fastCreate("p", "cart-minus")
                cartMinus.innerHTML = '<i class="fas fa-minus"></i>'
                const cartCounter = ll.fastCreate("p", "cart-counter")
                cartCounter.textContent = item.cartAmount
                const cartPlus = ll.fastCreate("p", "cart-plus")
                cartPlus.innerHTML = '<i class="fas fa-plus"></i>'
                cartCounterBox.append(cartMinus)
                cartCounterBox.append(cartCounter)
                cartCounterBox.append(cartPlus)
                const pricebox = ll.fastCreate("div", "cart-pricebox")
                cartPosition.append(pricebox)
                const itemSumPrice = ll.fastCreate("p", "cart-item-price")
                let tempSum = 0
                if (item.isSale) {
                    tempSum = Math.ceil(+item.cartAmount * (+item.price*(1-(+item.salePercent/100))))
                    itemSumPrice.innerHTML = `${tempSum}<span class="hrn-icon">₴</span>`
                } else {
                    tempSum = +item.price * +item.cartAmount
                    itemSumPrice.innerHTML = `${tempSum}<span class="hrn-icon">₴</span>`
                }
                let tempItem = {}
                let tempIndex = -1
                const count = cartCounter
                const plus = cartPlus
                cart.forEach((val, index) => {
                    if (item.id === val.id) {
                        tempItem = val
                        tempIndex = index
                    }
                })
                plus.onclick = () => {
                    cart[tempIndex].cartAmount += 1
                    count.textContent = cart[tempIndex].cartAmount 
                    ll.cartItemsCreate()
                    console.log(cart);
                }

                const minus = cartMinus

                minus.onclick = () => {
                    if (cart[tempIndex].cartAmount !== 1) {
                        cart[tempIndex].cartAmount -= 1
                        count.textContent = cart[tempIndex].cartAmount
                    } else {
                        cart.splice(tempIndex, 1)
                        count.textContent = "1"
                    }
                    console.log(cart);
                    ll.cartItemsCreate()
                }
                finalPrice += tempSum
                pricebox.append(itemSumPrice)
            })
            document.querySelector(".final-sum-text").textContent = finalPrice
        }
    }
}