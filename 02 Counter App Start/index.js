// javascript
let countEl = document.querySelector("#count-el")
let saveEl = document.querySelector("#save-el")
let count = 0
console.log(saveEl)

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

let incrementBtn=document.querySelector("#increment-btn")
incrementBtn.onclick=increment
let saveBtn = document.querySelector("#save-btn")
saveBtn.onclick = save 