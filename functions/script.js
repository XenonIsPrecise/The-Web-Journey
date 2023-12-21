const p = f=>{
    console.log(f);
}
let die = Math.ceil(Math.random()*6);
//let die = Math.floor(Math.random()*6+1); This is the same as above
console.log(die);

function rolldie(){
    let die = Math.ceil(Math.random()*6); 
    console.log(die);
    }


function singBirthday(){
    console.log("Happy Birthday to you!");
}

singBirthday();


function greetUser(name){
    console.log(`Hello ${name}. Nice to meet you!`);
}

function product(base,power){
    let answer = base*power;
    console.log(answer);
}

function repeat(word,times){
    let result = '';
    for(i=0; i<times; i++){
        result+=word;
    }
    console.log(result);
 }

 //Function Expressions

 const squareroot = function(num){
    return Math.sqrt(num);
 }

 console.log(squareroot(5));

 function callSixTimes(func){
    for(let i=0; i<6;i++){
        func();
    }
 }
 console.log(callSixTimes(rolldie));

function makeBetween(min, max){
    return function(num){
        return num >=min && num<=max;
    }
}

const child = makeBetween(0,17);
console.log(child(8));

const adult = makeBetween(18,64);
console.log(adult(19)); 

const old = makeBetween(65,150)
console.log(old(68));


const square = {
    area(length){
        return length*length;
    },
    perimeter(length){
        return length*4;
    }
}

console.log(square.perimeter(3));

const numbers =[1,2,3]

numbers.forEach(function(element){
    console.log(element)
});

for(let el of numbers){
    console.log(el);
}

//Map function

const numMap = [1,2,3,4,5,6,7];

let even = numMap.map(function(even){
    return even*2;
});
console.log(even);


const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

const firstNames = fullNames.map(function (names){
    return names.first;
})

console.log(firstNames);

function names(name){
    return name.first;
}

const fName =fullNames.map(names);
console.log(fName);


const add = function(x,y){
    return x+y;
}

function sub(a,b){
    return a-b;
}
const mul = (x,y) =>{
    return x*y;
}

const squared = num =>{
    return num*num;
}
p(squared(5));

console.log(mul(2,3));
console.log(add(2,6));
console.log(sub(8,2));

//arrow function implicit return

const sqrR = num =>Math.sqrt(num);
console.log(sqrR(16));

//settimeout 

setTimeout(()=>
console.log("Hello"),3000);

//filter
const numFil =[1,2,3,4,5,6,7,8]
const evenFil = numFil.filter(n=>n%2===0)
console.log(evenFil);



const UserNames=['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan'];
function filtered (words){
    let filteredarray = [];
    for(let word of words){
        if(word.length<10){
            filteredarray.push(word);
        }
    }
    return filteredarray;
}
console.log(filtered(UserNames));
//This code does the same as above
function validUserNames(usernames) {
    return usernames.filter(word=> word.length<10)
}
console.log(validUserNames(UserNames));

//Arrow function does not work with this keyword when added directly. 
//But works if there is a traditional function written that encopasses the  this keyword.

//Spread 
const sArray =[1,2,3,4,5,65356,34,534,5345,34534,534,52,578,68,678,678,67835,46,245,6]
Math.max(1,2,3,4,5,65356,34,534,5345,34534,534,52,578,68,678,678,67835,46,245,6);
console.log(Math.max(1,2,3,4,5,65356,34,534,5345,34534,534,52,578,68,678,678,67835,46,245,6));
console.log(Math.max(...sArray));

const [one,two] =sArray;
















