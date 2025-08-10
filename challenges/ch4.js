const chai_types = ["green tea","black tea","jasmine tea","herbal tea"]
const short_tea=[]
for(const tea of chai_types){
    if(tea.length>10){
        break
    }
    else{
        short_tea.push(tea)
    }
}console.log(short_tea);
