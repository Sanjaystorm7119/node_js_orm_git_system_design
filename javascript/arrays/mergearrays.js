const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

//better way
const arr3 = [...arr1, ...arr2];

//not so good way
const arr4 = arr1.concat(arr2);
console.log(arr3);
console.log(arr4);

[arr3len,arr4len]=[arr3.length,arr4.length]
console.log(arr3len,arr4len)
