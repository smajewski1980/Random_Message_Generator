const quotes = [
    "We cannot solve problems with the kind of thinking we employed when we came up with them. \n\n    — Albert Einstein",
    "Learn as if you will live forever, live like you will die tomorrow. \n\n    — Mahatma Gandhi",
    "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too. \n\n    — Mark Twain",
    "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.\n\n    — Eleanor Roosevelt",
    "When you change your thoughts, remember to also change your world.\n\n    — Norman Vincent Peale",
    "It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. \n\n    — Walter Anderson",
    "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.\n\n    — Diane McLaren"
];
const foods = ["chicken", "steak", "fish", "lasagna", "spaghetti", "soup and salad", "nothing, go hungry..."];

// Function to return a random number
// num is the number of items in the arrays

const randomNum = (num) => {
    return Math.floor(Math.random() * num)
}

// Creating the appropriate length random numbers

const quoteIndex = randomNum(quotes.length);
const foodIndex = randomNum(foods.length);
const luckyNum = randomNum(1000000000000000);  //obnoxiously long to be silly

// Getting a random item from both arrays
const randomQuote = quotes[quoteIndex];
const randomFood = foods[foodIndex];

// The main function that will log the full message

const randomMsgs = () => {
    console.log(`
Hi ${userName}, here's a quote for you:

    ${randomQuote}

For dinner you should have ${randomFood}.

And by the way, your lucky number is ${luckyNum}.
    `)
}

// Ask the user for their name and run random message function.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
let userName = ''; 
readline.question(`\nWhat's your name?`, name => {
    userName = name;
    randomMsgs();
    readline.close();
});