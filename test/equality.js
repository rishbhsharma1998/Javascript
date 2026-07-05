let a = 0;
let b = "0";

console.log(a == b); // true
console.log(a === b); // false
//It is imp to note that == operator checks for value equality and does type coercion if the types are different, 
// while === operator checks for both value and type equality without type coercion.