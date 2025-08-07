let flowers = ["rose", "hibiscus", "marygold", "lotus"];
flowers[0] = "lily";

console.log("add element");

flowers.push("newflower"); //insert at last
flowers.unshift("newflower1"); //insert at start
console.log(flowers);

console.log("remove element");
flowers.pop(); // remove last
flowers.shift(); // remove first
console.log(flowers);

console.log("splice");

flowers.splice(1, 2, 6, 7);
console.log(flowers);

//copy
//soft copy
console.log("soft copy");
let copied_arr = flowers;
console.log(flowers);
console.log(copied_arr);
copied_arr.pop();
console.log(flowers);
console.log(copied_arr);
//hard copy
console.log("hard copy");
let arrnums = [1, 2, 3, 4];
let newarrnums = [...arrnums];
console.log(newarrnums);
newarrnums.pop();
console.log(newarrnums);
console.log(arrnums);

//slice
let arr1 = [1,2,3,5]
newarr1 = arr1.slice()
console.log(newarr1)
