
let inputX = document.getElementById("x-position");
let inputY = document.getElementById("y-position");
let inputBlur = document.getElementById("blur");
let inputSpread = document.getElementById("spread");
let inputShadow = document.getElementById("shadow-color");
let inputBox = document.getElementById("box-color");



let xValue = document.querySelector(".x-position");
let yValue = document.querySelector(".y-position");
let blurValue = document.querySelector(".blur");
let spreadValue = document.querySelector(".spread");
let shadowValue = document.querySelector(".shadow");



inputX.addEventListener("input", (e) => {
    document.documentElement.style.setProperty(
        `--${e.target.name}`,
        e.target.value
    )
    xValue.textContent = e.target.value + "px";
})


inputY.addEventListener("input", (e) => {
    document.documentElement.style.setProperty(
        `--${e.target.name}`,
        e.target.value
    )
    yValue.textContent = e.target.value + "px";
})


inputBlur.addEventListener("input", (e) => {
    document.documentElement.style.setProperty(
        `--${e.target.name}`,
        e.target.value
    )
    blurValue.textContent = e.target.value + "px";
})

inputSpread.addEventListener("input", (e) => {
    document.documentElement.style.setProperty(
        `--${e.target.name}`,
        e.target.value
    )
    spreadValue.textContent = e.target.value + "px";
})

inputShadow.addEventListener("input", (e) => {
    document.documentElement.style.setProperty(
        `--${e.target.name}`,
        e.target.value
    )
    shadowValue.textContent = e.target.value;

})


inputBox.addEventListener("input", (e) => {
    document.documentElement.style.setProperty(
        `--${e.target.name}`,
        e.target.value
    )
})