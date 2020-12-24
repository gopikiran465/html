//Template Literals in ES6

/*Def:1)by using this we can insert an expression into string and
      2) we can define a string of multiple lines*/

//example:1;
const count = 3;
const str = `i need ${count} cups of coffee`;
console.log(str);//OP: "i need 3 cups of coffee"  with expression 


//example:2; // multiple line string in es6
const mulStr = `hello 
world
good 
morning`;

console.log(mulStr); /*OP:"hello 
                          world
                          good 
                          morning"*/


//in es5 multi line string

const newStr = "hello \n" + "world \n" + "good morning"
console.log(newStr);