//skip paris

const cities = ["london", "new york", "Paris", "berlin"];
const new_cities = [];
for (let i = 0; i < cities.length; i++) {
  if (cities[i].toLowerCase() == "paris") {
    continue;
  } else {
    new_cities.push(cities[i]);
  }
}
console.log(new_cities);

//for of - arrays , strings

const nums = [1, 2, 3, 4, 5];
const small_nums = [];
for (const num of nums) {
  if (num == 4) {
    break;
  } else {
    small_nums.push(num);
  }
}
console.log(small_nums);

// for of - skip an element

const nums1 = [1, 2, 3, 4, 5];
const small_nums1 = [];
for (const num1 of nums1) {
  if (num1 == 3) {
    continue;
  } else {
    small_nums1.push(num1);
  }
}
console.log(small_nums1);

//for in -- objects

const city_pop = {
  a: 100,
  b: 200,
  c: 300,
  d: 400,
};
const city_newpop = {};
for (city1 in city_pop) {
  if (city1.toLowerCase() == "c") {
    break;
  } else {
    city_newpop[city1] = city_pop[city1];
  }
}
console.log(city_newpop);

//skip pop less than 300
const city_pop1 = {
  a: 100,
  b: 200,
  c: 300,
  d: 400,
};
const city_newpop1 = {};
for (city2 in city_pop1) {
  if (city_pop1[city2] < 300) {
    continue;
  } else {
    city_newpop1[city2] = city_pop1[city2];
  }
}
console.log(city_newpop1);
