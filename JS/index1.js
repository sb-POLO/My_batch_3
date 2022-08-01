let ul = document.getElementById("ul");
let li1 = document.getElementById("li1");
let li2 = document.getElementById("li2");
let li3 = document.getElementById("li3");
let li4 = document.getElementById("li4");


ul.addEventListener("click", (e) => {
    // e.stopPropagation();
    console.log("ul clicked")
});
li1.addEventListener("click", (e) => {
    // e.stopPropagation();
    console.log("Sourav clicked")
});
li2.addEventListener("click", (e) => {
    // e.stopPropagation();
    console.log("Prachi clicked")
});
li3.addEventListener("click", (e) => {
    // e.stopPropagation();
    console.log("Sameera clicked")
});
li4.addEventListener("click", (e) => {
    // e.stopPropagation();
    console.log("Mukan clicked")
});

window.addEventListener("click", () => {
    console.log("window clicked");
}, true)

// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr;
// // arr2[0] = 10;
// console.log(arr);


// let ab = JSON.stringify(arr);
// let arr3 = JSON.parse(ab);

// arr3[0] = 10;
// console.log(arr);

let Bird = function () {
    this.name = "Parrot";
    this.color = "Green";
    this.setColor = function (color) {
        this.color = color;
    }
}

Bird.prototype.setColor = function (color) {
    this.color = color;
}

let Bigbird = function () {
    this.name = "Eagle";
    this.color = "Golden"
}

Bigbird.prototype = Bird.prototype;

let bird1 = new Bird();
bird1.setColor("Red");
console.log(bird1);
let bird2 = new Bigbird();
bird2.setColor("Black");
console.log(bird2);



