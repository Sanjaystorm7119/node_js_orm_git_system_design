//stop loop when it finds chai
const chai_types =["green","black","chai","oolong","milk"]
const selected_chai=[]
for (let i=0;i<chai_types.length;i++){
    
    if (chai_types[i] != "chai"){
        selected_chai.push(chai_types[i])
    }
    else{
        break
    }
}
console.log(selected_chai)

// skip 7 , double the rest
const numb=[2,5,7,9]
const doublenumb=[]
for (let i=0;i<numb.length;i++){
    if(numb[i]==7){
        continue
    }
    else{
        doublenumb.push(numb[i]*2)
    }
}console.log(doublenumb)


