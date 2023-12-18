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
