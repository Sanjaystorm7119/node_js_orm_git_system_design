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
let arr=[]
for (let i =10 ; i>0;i--){
    arr.push(i)
}
console.log(arr)

//3 to 1 sum
let n=3
let sum2=0
do{
sum2+=n
n--
}while(n>0)
console.log(sum2)

//loop mul
let looparr = [1,2,3]
multipliednums=[]
for (let i = 0; i<looparr.length;i++){
multipliednums.push(looparr[i]*2)
}
console.log(multipliednums);

