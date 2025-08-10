const caltotal = (price,quantity) =>{
    return price*quantity
}
let totalcost = caltotal(10,10)
console.log(totalcost)

// if theres only 1 line , we dont need return , implicit return

const caltotal1 = (price,quantity) => price*quantity
let totalcost1 = caltotal1(10,10)
console.log(totalcost1)


