"use strict";

/* 

*******************SPREAD OPERATOR WITH ARRAYS******************** 

-A Javascritp spread operator lets you access the contents of an iterable object.The spread operator is a set of three dots followed bythe name of the iterable you want to access.

Example: 


let names = ["Nimo", "Rusty", "Byron"];
let newNames =[...names, "Tim"];
console.log(newNames);

In this example, we use ...names to pass the content of our "names" list into a list called "newNames" list contains all the items in the "names" list, as well a new name: Tim.

---Spread operator can be really useful to pass arguments into functions: 

Example to log the individual elements of the new array. 
If we log the entire array the output will be [1, 2, 7, 8, 9]

 const array = [7, 8, 9];
 const newArray = [1, 2, ...array];
 console.log(newArray);
 //output [1, 2, 7, 8, 9]
 but if  we use the spread operator the result will be 1, 2, 7, 8, 9, the ouput will be the individual elements of the array

 const array = [7, 8, 9];
 const newArray = [1, 2, ...array];
 console.log(...newArray);
 //output 1 2 7 8 9

---Practical example: add a new dish to a restaurant menu:

const menu = ["Pizza", "Lasagna", "Canellonis"];
const newMenu = [...menu, "Gnocci"];
console.log(...newMenu);

//output: Pizza Lasagna Canellonis Gnocci

---Spread operator can be similar to destructuring, the biggest difference between them is tat the spread operator takes all the elements from the array and it also doesn't create new variables, and as a consequence we can only use it in palces where we would otherwise write values separated by commas.     

===CREATE SHALLOW COPY OF ARRAY WITH SPREAD OPERATOR===

const menu = ["Pizza", "Lasagna", "Canellonis"];
const newMenu = [...menu];
console.log(newMenu);

//ouput ["Pizza", "Lasagna", "Canellonis"]

===TO TO JOIN TWO OR MORE ARRAYS===


const firstDish = ["Pizza", "Lasagna"];
const dessert = ["Tiramisu"];
const menu = [...firstDish, ...dessert];
console.log(menu);

//output ["Pizza", "Lasagna", "Tiramisu"]

*/

/* 
**********************SPREAD OPERATOR WITH STRINGS******************     

---Imagine we want to create an array with the letters of a string:  

const str = "Jose";
const letters = [...str];
console.log(letters);

//output: ["J", "o", "s", "e"]

if we want to log the individual elements of the string: 

const str = "Jose";
console.log(...str);
//output: J o s e

*/

/* 
--The difference between spread operator y push is that push modifies the original array while spread operator doesn't.
*/

















