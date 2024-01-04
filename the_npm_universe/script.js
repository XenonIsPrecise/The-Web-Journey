const giveMeAJoke = require('give-me-a-joke');
const colors = require("colors")
giveMeAJoke.getRandomDadJoke (function(joke) {
    console.log(joke.rainbow);
});

const listOfJokes = document.querySelector("#jokes");

const addJokeToList = function()
{
    giveMeAJoke.getRandomDadJoke (function(joke) {
        const list = document.createElement("li");  
        list.innerHTML = joke;
        listOfJokes.appendChild(list);
    });

}
const button = document.querySelector("#button")
button.addEventListener("click",addJokeToList);