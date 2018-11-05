// variables!!
let target = {
    name: "Strike Freedom",
    health: 100,
    hits: 0,
    items: [],
}


let items = {
    fire: { name: "Fire", modifier: 5, description: "it burns!" },
    super: { name: "Super", modifier: 10, description: "Shwang!" },
    special: { name: "Special", modifier: 15, description: "Bang!" },
}

// Functions!!!
function punch() {
    target.health -= 1 + addMods();
    hit()
}
function gun() {
    target.health -= 5 + addMods();
    hit()
}
function sword() {
    target.health -= 10 + addMods();
    hit()
}
function hit() {
    target.hits += 1
    update()
}
function giveFire() {
    target.items.push(items.fire)

}
function giveSuper() {
    target.items.push(items.super)

}
function giveSpecial() {
    target.items.push(items.special)

}
function reset() {
    document.location.href = ""
}
function addMods() {
    let total = 0;
    let items = target.items;
    for (let index = 0; index < items.length; index++) {
        let item = items[index];
        total += item.modifier;
    }
    return total;
}

function update() {
    document.getElementById("health").innerText = target.health
    document.getElementById("name").innerText = target.name
    document.getElementById("hits").innerText = target.hits
}