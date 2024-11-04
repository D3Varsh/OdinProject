/*
Write a function called add7 that takes one number and returns that number + 7.
*/

function add7(a){
    return a+7;
}
console.log(add7(7));

/*
Write a function called multiply that takes 2 numbers and returns their product.
*/

function multiply(a,b){
    return a*b;
}
console.log(multiply(2,12));

/*
Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
*/

function capitalize(text){
    if(!text) return "";
    return text[0].toUpperCase()+ text.slice(1).toLowerCase();
}
console.log(capitalize("hello"));

/*
Write a function called lastLetter that takes a string and returns the very last letter of that string:
lastLetter("abcd") should return "d"
*/

function lastLetter(letters){
    return letters[letters.length-1];
}

console.log(lastLetter("abcd"));
