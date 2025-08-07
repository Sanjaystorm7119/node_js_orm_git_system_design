let nums = [1,2,3,4]
let sum = 0
for (let i =0 ; i < nums.length;i++){
    sum+=nums[i]
}
console.log(sum)

//using reduce
let reduce = nums.reduce((adder,num)=>adder+num,0)
console.log(reduce)

//with while
j=0
let sum1=0
while(j<nums.length){
    sum1+=nums[j]
    j++
}
console.log(sum);

//countdown
console.log("countdown");

for (let i =10 ; i>0;i--){
    console.log(i)
}