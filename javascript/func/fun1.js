function greet(name){
console.log(`hello ${name}`)
}
greet("san")

///////////////
function makeTea(typeOfTea){
    return `making ${typeOfTea}`
}
let making_tea_order = makeTea("lemon tea")
console.log(making_tea_order)

/////////
function tea_order(tea_type){
    function confirm_order(){
        return `order confirmed `
    }
    return confirm_order()
}
let order_confirmation = tea_order("chai")
console.log(order_confirmation)