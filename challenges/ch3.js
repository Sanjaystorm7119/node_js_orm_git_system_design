//for each
const words=["a","b","c","d"]
const new_words=[]
words.forEach(element => {
    if (element!="c"){
        new_words.push(element)
    }
    else{
        return
    }
});
console.log(new_words)

// travelled cities , skip sydney
const cities = ["lodon","tokyo","paris","sydney","new york"]
const visited_cities = []
cities.forEach(city => {
    if(city=="sydney"){
        return
    }
    else{
        visited_cities.push(city)
    }
});
console.log(visited_cities)