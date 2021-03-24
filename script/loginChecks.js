

function serialize(select) {
    const allInput = document.querySelectorAll(select);
    const obj = {};
    allInput.forEach(({name, value}) => {
        obj[name] = value;
    })
    return obj   
}

const loginButton = document.getElementById("submit-login")
const regButton = document.getElementById("submit-register")


loginButton.addEventListener("click", (e) => {
    e.preventDefault()
    const obj = serialize('.login-input')
    if (obj.email === 'luka.ponomarenko@gmail.com' && obj.password === "password") {
        document.querySelectorAll(".login-input").forEach(item => {
            item.classList.remove("error")
        })
        document.getElementById("error-login-text").style.display = 'none'
    } else {
        document.querySelectorAll(".login-input").forEach(item => {  
            item.classList.add("error")
        })
        document.getElementById("error-login-text").style.display = 'block'
    }
})

const toLogin = document.querySelector(".login-text-if-email-used")

toLogin.addEventListener("click", () => {
    const logContainer = document.querySelectorAll(".inputs")
    const modes = document.querySelectorAll(".log-reg")
    logContainer[0].style.display = "none"
    logContainer[1].style.display = "block"
    modes[0].classList.remove("act")
    modes[1].classList.add("act")
})

regButton.addEventListener("click", (e) => {
    e.preventDefault()
    const obj = serialize(".reg-input")
    const inputs = document.querySelectorAll(".reg-input")
    if (obj.password !== obj.passwordConf) {
        inputs[4].classList.add("error")
        inputs[3].classList.add("error")
        document.getElementById("error-pass-not-same-text").style.display = "block"
    } else {
        inputs[4].classList.remove("error")
        inputs[3].classList.remove("error")
        document.getElementById("error-pass-not-same-text").style.display = "none" 
    }
    if (obj.email === "luka.ponomarenko@gmail.com") {
        inputs[2].classList.add("error")
        document.getElementById("email-is-used").style.display = "block"
    } else {
        inputs[2].classList.remove("error")
        document.getElementById("email-is-used").style.display = "none"
    }
    if (obj.email.includes(".com") || obj.email.includes(".ru")) {
        if (obj.email.includes("@")) {
            inputs[2].classList.remove("error")
            document.getElementById("email-is-incorrect").style.display = "none"
        } else {
            inputs[2].classList.add("error")
            document.getElementById("email-is-incorrect").style.display = "block"
        }
    } else {
        inputs[2].classList.add("error")
        document.getElementById("email-is-incorrect").style.display = "block"
    }
    const checkbox = document.querySelector(".default-checkbox")
    if (checkbox.checked) {
        document.getElementById("must-accept-conf").style.display = "none"
    } else {
        document.getElementById("must-accept-conf").style.display = "block"
    }
})
