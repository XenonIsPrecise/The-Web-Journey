let age = 10;
let animal = `Jumbo the Elephant is ${age} years old`;
console.log(animal);
console.log(animal.length);
let upper = animal.toUpperCase();
console.log(upper);
let name = "    sujal Acharya   ";
let rName = name.trim().toLowerCase();
console.log(rName);

// String Literals look first code for example.
console.log(Math.floor(Math.random()*100)+1);
// console.prompt("What is your name?");
// console.alert("Hello World");
let num1 = 4;
let exampleStrimg1 = "4";
if (num1 === exampleStrimg1 ) {
    console.log("They are equal from ===");
}
else
{
    console.log("They are not equal from ===");
}
if (num1 == exampleStrimg1 ) {
    console.log("They are equal from ==");
}
else{
    "They are not equal from =="
}

//Array
let exampleArray = [1,2,3,4,5];
let exampleArray2 = ["Sujal",21,true,null];
console.log(exampleArray2[3]);
console.log(exampleArray);
exampleArray.push(6);
console.log(exampleArray);
exampleArray.unshift(0);
console.log(exampleArray);
console.log(exampleArray.pop());
console.log(exampleArray);
console.log(exampleArray.shift());
console.log(exampleArray);
let array1 =exampleArray.concat(exampleArray2);
console.log(array1);
console.log(array1.includes(2));

let colors = ["red","blue","green","yellow"];
console.log(colors.slice(0,3));
console.log(colors);
console.log(colors.slice(-2));
console.log(colors.splice(1,2))
console.log(colors);
console.log(colors.splice(1,0,'green','yellow','indigo'));
console.log(colors);

//You can change the content of an array even 
//if it is declared with const, but you can't reassign a new array or a different value.