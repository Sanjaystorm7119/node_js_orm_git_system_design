function makeTea(typeOfTea){
    return `maketea ${typeOfTea}`
}

function processTeaOrder(teaFunction){  //teaFunction is a placeholder
    return teaFunction('earl gray')
}

let order = processTeaOrder(makeTea)
console.log(order)