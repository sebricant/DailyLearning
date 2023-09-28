`use strict`;

//js part-1: coding challenge #1

// let markMass=78;
// let markHeight=1.69;
// let johnMass=92;
// let johnHeight=1.95;

// let bmiMark=markMass/markHeight**2;
// let bmiJohn=johnMass/johnHeight**2;

// if(bmiMark>bmiJohn){
//     console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`);
// }else{
//     console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`);
// }

// coding challenge #2

// const dolphinsScores=97+112+101;
// const koalasScores=109+95+107;

// const avgDolphins=dolphinsScores/3;
// const avgKoalas=koalasScores/3;

// if(avgDolphins>avgKoalas && avgDolphins>=100){
//     console.log('dolphins wins');
// }else if(avgKoalas>avgDolphins && avgKoalas>=100){
//     console.log('koalas wins');
// }else if(avgDolphins===avgKoalas&&avgKoalas>=100&&avgDolphins>=100){
//     console.log('the match is a draw');
// }else{
//     console.log('No buddy wins');
// }

// coding challenge #3

// const bill=40;
// const tip=bill>=50&&bill<=300 ? bill*15/100 :bill*20/100;
// console.log(`the bill was ${bill},the tip was ${tip} and the total value ${bill+tip}`);

//js part 2: coding challenge #1

// const calcAverage= (s1,s2,s3)=>(s1+s2+s3)/3;

// function checkWinner(dolphinsScores,koalasScores){
//     if(dolphinsScores>=2*koalasScores){
//         console.log(`the dolphins win (${dolphinsScores}vs${koalasScores})`);
//     }else if(koalasScores>=2*dolphinsScores){
//         console.log(`the koalas win (${koalasScores}vs${dolphinsScores})`);
//     }else {
//         console.log(`no winner`)
//     }
// }
// const dolphinsScores= calcAverage(85,54,41)
// const koalasScores= calcAverage(23,34,500)
// checkWinner(dolphinsScores,koalasScores);
// checkWinner(7,3)
// checkWinner(2,5)

//js part 2: coding challenge #2

// const bill=[125,555,44];
// const calcTip = function(bill){
// if(bill>=50&&bill<=300){
//     const tip= bill*15/100;
//     console.log(`the bill was ${bill},the tip was ${tip} and the total value ${bill+tip}`);
//     return tip;
// }else{
//    const tip= bill*20/100;
//     console.log(`the bill was ${bill},the tip was ${tip} and the total value ${bill+tip}`);
//     return tip;
// }
// };
// const total=[];
// function total1(Array){
//     return total[Array]=calcTip(bill[Array])+bill[Array]
// }
// total1(0);
// total1(1);
// total1(2);
// console.log(total);

// dot vs brackets notation challenge

// const jonas={
//     fistName:'jonas',
//     friends:['michael','peter','steve']
// }
// console.log(`${jonas.fistName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`)

// object method challenge

// const jonas={
//     firstName:'Jonas',
//     lastName:'Schmedtmann',
//     birthYear:1991,
//     job:'teacher',
//     friends:['Michael','Peter','Steive'],
//     hasDriversLicense:true,
//     getSummary:function () {
//         return `${this.firstName} is a ${2023-this.birthYear} old,and he has ${this.hasDriversLicense ?  'a':'no'} drivers license.`
//     }
// }
// console.log(jonas.getSummary())

//js part 2: coding challenge #3
// const calcBmi=function(){
//     const bmi=this.mass/this.height**2;
//     return bmi;
// }
// const mark={
//     firstName:'Mark',
//     lastName:'Millar',
//     mass:78,
//     height:1.69,
//     calcBmi:function(){
//         this.bmi=this.mass/this.height**2;
//         return this.bmi;
//     }
// }
// const john={
//     firstName:'John',
//     lastName:'Smith',
//     mass:92,
//     height:1.95,
//     calcBmi:function(){
//         this.bmi=this.mass/this.height**2;
//         return this.bmi;
//     }
// }

// const result= john.calcBmi()>mark.calcBmi()?console.log(`${john.firstName}'s BMI (${john.calcBmi} is is higher than ${mark.firstName}'s (${mark.calcBmi()})!)`)
// :console.log(`${mark.firstName}'s BMI (${mark.calcBmi()} is is higher than ${john.firstName}'s (${john.calcBmi()})!)`);

// let bills=[22,295,176,440,37,105,10,1100,86,52];
// let tips=[];
// let total=[];
// const calcTip = function(bills){
//     if(bills>=50&&bills<=300){
//         const tip= bills*15/100;
//         // console.log(`the bills was ${bills},the tip was ${tip} and the total value ${bills+tip}`);
//         return tip;
//     }else{
//        const tip= bills*20/100;
//         // console.log(`the bills was ${bills},the tip was ${tip} and the total value ${bills+tip}`);
//         return tip;
//     }
// };

// for(let i=0;i<=bills.length-1;i++){
//     const tip=calcTip(bills[i])
//     tips.push(tip)
//     total.push(tip+bills[i])
// }

// const calcAverage=function (arr) {
// let sum=0;
//     for(let i=0;i<=arr.length-1;i++){
//         sum=arr[i]+sum;
//     }
//     return average=sum/arr.length-1;
// }

// console.log(calcAverage(bills),
// "tips",tips,'total',total,'average',calcAverage([10,20,30,40,50])


//*************coding challenge :How to debug problems.***************

// const arr=[17,21,23]
// const printForecast = function (arr) {
//     let str = '';
//     for (let i= 0;i<arr.length;i++){
//       str += `${arr[i]}c in ${i+1} days...`;
//       console.log(i);
//     }
//     console.log('...'+str);
// }
// printForecast(arr)


// ************Destructuring Array.******************

const newObj={
    greetings:'hi, good',
    time:'morning'
}

const resturant={
    name:'la casa de papel',
    mainmenu:['pizza','fried chicken','fries','burgers'],
    candy:['chocolate','milkybars','tofy','candy'],
    starter:['juice','buiskat','gilabi'],
    calling:function(indexOne,indexTwo){
        return [this.starter[indexOne],this.starter[indexTwo]];
    },
    looped:['hi','hello',['sam','dean']],
    obj:{
        fri:{
            open:2,
            close:10,
        },
        sat:{
            open:3,
            close:12,
        },
        sun:{
            open:"closed",
            close:"closed"
        }
    },
    // ES6 feature enhanced object literals
    newObj,
    
    // ES6 feature enhanced object literals that we dont need to give (: function ) in the below function in a object
    method({edu="err",name='err'}){
        return `${edu},${name}`;
    },
}

// //declaring variables.
// const array=[2,3,4];
// let [x,y,z]=array;
// console.log(x,y,z);

// // shifting values.without using the temp.
// [x,y,z]=[z,y,x];
// console.log(x,y,z);

// // assigning variables from an object inside array.
// const [first,second]=resturant.mainmenu;
// console.log(first,second);

// // leaving an candy array 1 element using blank space.
// const [sweet, ,sweet2]=resturant.candy;
// console.log(sweet,sweet2);

// // function returning array and assigning to varibles.
// const [starter,starter2]=resturant.calling(2,0);
// console.log(starter,starter2);

// //accessing nested arrays in object.
// const [n1,,[,n3]]=resturant.looped;
// console.log(n1,n3);

 // ***********Destructuring Objects*************


// const {obj}=resturant;
// console.log(obj);

// // default variable and giving new name to Keys.
// const {obj1:emptyObject=[],obj:objNewName=[]}=resturant;
// console.log(emptyObject,objNewName);

// // mutable variables.
// let a=1;
// let b=3;
// const c={a:2,b:4};
// ({a,b}=c);
// console.log(a,b);

// //passing a object as argument in a function.
// resturant.method(methods={
//     name:'seban',
//     age:23,
//     edu:'degree'
//     });

// ***************Spread operator*************

// const arr=[1,2,3]
// const newArr=[...arr,4,5];
// console.log(newArr)

// // 2 important uses of spread operator.
// // 1) copy array.
// const array=[...arr];
// // 2) join 2 arrays.
// const arr2=[4,5]
// const newArray=[...array,...arr2];
// console.log(newArray);

// // passing a spread operator as an argument in a function.
// const sum=function(num1,num2,num3){
//     console.log(`sum is calculated: ${num1+num2+num3}`);
// }
// sum(...arr);
// // spread operators :can be used with all the iterables. like array,string,maps,sets.

// // in ES 2018 Now spread operators can be used with objects.

// const res={...resturant}
// console.log(res);

// res.name='Money Heist';
// console.log(res.name);
// console.log(resturant.name);


// *********Rest operator************

// rest uses the same exact syntax of spread operator.
// spread operator is to unpack an Array.while rest is to pack elements into an Array. 


// 1)Destructuring Arrays

// REST ,is on the left side of the = . also Spread is in the right side of = .

// const [a,...b]=[1,3,4,5,6];
// console.log(a,b);

// const [startersOne,startsTwo, ,...sweetsIn]=[...resturant.starter,...resturant.candy];
// console.log(startersOne,startsTwo,sweetsIn);

// // 2)Destructuring Objects.

// const {...weekdays}=resturant.obj;
// console.log(weekdays);

// let sum=0
// // here the ...nums combines and packs the arguments into one array.
// const rest=function(...nums){
//     for(i=0;i<nums.length;i++){
//         sum+=nums[i];
//     }
//     console.log(sum);
// }

// let numbers=[1,2,3,4,5]
// // here ...number unpacks the elements in array.
// rest(...numbers);

// *****************Short-Circuite Evaluation******************

// // OR 
// console.log(0||'jonas');
// console.log(null||'jonas');
// console.log(undefined||'jonas');
// console.log(''||'jonas');
// console.log(true||'jonas');
// console.log(3||'jonas');

// // resturant.newGuest=12
// const guest=resturant.newGuest||10;
// console.log(guest);

// // AND ---if any dougt watch the video.
// console.log(0&&'jonas');
// console.log(2&&'jonas');

// const resturant1=resturant&&resturant.obj;
// console.log(resturant1);

// console.log(undefined||null||true&&3);

// // ********Nullish Coalescing Operator*********
// // nullish:null,undefined(not 0 or '')
// const power = 0;
// const pw = power??'jonas';
// console.log(pw);

// **************Looping Array (for-of-loop)*************

const arr3=[...resturant.starter,...resturant.mainmenu];

// // loop through the array
// for(const item of arr3) console.log(item);

// // get the index of the array. it is provides in array eg: [0, 'juice'] and the first element is index.
// for(const item of arr3.entries()) console.log(item[0]);
// // destructuring
// for(const [i,el] of arr3.entries()){
//     console.log(`${i}:${el}`);
// }

// // ************Optional Chaining***********

// console.log(resturant.obj.fri.open);
// console.log(resturant.obj?.mon?.open);

// const days=['mon','tue','wed','thu','fri','sat','sun'];

// // Example
// for(const day of days){
//     const working=resturant.obj?.[day]?.open??'closed';
//     console.log(`In ${day} shop today: ${working}`)
// }

// // Methods
// console.log(resturant.method?.({edu: "dev", name: "seban"})??"method not found");

// // Array
// const user=[{name:'seban',age:23}]
// console.log(user[0]?.name??'user name invalid');



// ************looping object****************

// const properties=Object.keys(resturant.obj);
// console.log(properties);

// let str=`the resturant is open on ${properties.length} days:`
// for(v of properties){
//     str+=`${v},`
// }
// console.log(str);

// const propertiesValues=Object.values(resturant.obj)
// console.log(propertiesValues);

// const entries=Object.entries(resturant.obj);
// console.log(entries);

// for(const [key,{open, close}] of entries){
//     console.log(`${key} resturant opens at ${open} and closes at ${close}`);
// }
