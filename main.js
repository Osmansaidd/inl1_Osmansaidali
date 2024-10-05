// Osman Said Ali
// Ap8674

"use strict";

// Task 1
console.log(5 * 2 < 12); 
console.log(55 > 22); 
console.log(16 / 4 <= 4); 
console.log(8 + 2 != 128); 
console.log(32 * 8 > 255); 

// Task 2
const day = "Tuesday";
const food = "Hamburger";
const phrase = "I'll be back";

console.log(day.substring(0, 3));   
console.log(food.substring(3));    
console.log(phrase.substring(5));  

// Task 3
const str1 = "It's Learning."; 
const learning = str1.substring(5, 12).toUpperCase(); 
console.log(learning); 

const str2 = "JavaScript: The Good Parts."; 
const goodParts = str2.substring(15, 25).toLowerCase(); 
console.log(goodParts); 

// Task 4
var numbers = [128, 256, 512, 1024, 2048];
var sumOfNumbers = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of Numbers:", sumOfNumbers); 

var avgNumber = sumOfNumbers / numbers.length;
console.log("Average Number:", avgNumber); 

numbers.push(sumOfNumbers);
console.log("Updated Array:", numbers); 

// Task 5
var countries = ["Sweden", "Denmark", "Finland", "Norway"]; 
console.log(countries[1].substring(0, 3)); 

var totalLetters = countries.reduce((acc, country) => acc + country.length, 0);
var average = totalLetters / countries.length;
console.log(average); 

// Task 6
var values = [3, 5, "Jane", true, 144, false]; 
values.reverse(); 
console console.log(values);

// Task 7
var names = ["Jane", "Joe", "Eliza"]; 
var ages = [21, 34, 22]; 
var hasPet = [true, false, true]; 

var multipleArrays = [names, ages, hasPet];  
console.log(multipleArrays);

// Task 8
var actors = ["Sherlock", "Watson", "Bo"]; 
var result = actors.join(" - "); 
console.log(result);

// Task 9
let amount = 45;
if (amount < 50) { 
   console.log("Less than 50!"); 
} else if (amount >= 50 && amount < 65) { 
   console.log("Optimal range for the amount!"); 
} else { 
   console.log("Too much!"); 
}

// Task 10
for (let i = 1; i <= 8; i++) {
   console.log('#'.repeat(i));
}
