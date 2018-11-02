// variables!!
let health = 100;
let hits = 0;
let name = "StrikeFreedom"


// Functions!!!
function slap() {
    health -= 1
    hit()
}
function punch() {
    health -= 5
    hit()
}
function kick() {
    health -= 10
    hit()
}
function hit() {
    hits += 1
    update()
}
function update() {
    document.getElementById("health").innerText = health
    document.getElementById("name").innerText = name
    document.getElementById("hits").innerText = hits
}