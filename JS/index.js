// const api = "https://my-json-server.typicode.com/FreSauce/json-ipl/data";
// const button = document.getElementById("getQuotes");
// const ulDisplay = document.getElementById("quotes");
// let array;
// let index = 0;

// async function fetchApi() {
//     array = await fetch(api).then(data => data.json()).then(data => data);
// }

// function display() {
//     if (index < array.length) {
//         let list = document.createElement("li");
//         list.innerText = array[index].Team;
//         ulDisplay.appendChild(list);
//         index++;
//     }
// }

// button.addEventListener("click", display);

// fetchApi();


// JSON.stringify() =====> converts something to json format
// JSON.parse(obj) ======> converts the json object to its original form

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let arr2 = arr.map((item) => {
//     return item % 2 == 0;
// })

// let arr3 = arr.filter((item) => {
//     return item % 2 == 0;
// })

// console.log(arr2);
// console.log(arr3);

// console.log(arr2);
// console.log(arr3);

// function filter(x) {
//     let newArr = [];
//     for (let i = 0; i < arr.lenght; i++){
//         if (x(arr[i]) == true)
//             newArr.push(arr[i]);
//     }
//     return newArr;
// }

Array.prototype.ourmap = function (x) {
    console.log("modified the map function");
    console.log(this);
}

// let arr5 = [1, 2, 3, 4, 5];
// console.log(arr5);
// // console.log(arr5.map(item => item * 2));

// function * abc() {
//     yield 
// }

// const res = abc();

// console.log("abc" - 1);

// let obj = {
//     name: "sameera",
//     age: 22,
//     gender: "female"
// }

// let arr = [1, 2, 3, 4, 5];

// let [name, gender, age, a, b, c] = arr;
// console.log(c);













