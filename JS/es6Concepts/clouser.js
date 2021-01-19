/*  lexical scope: a function access a variable which is defined outside of that function ;
 below example is lexical scoping*/
var a = 10;
function add(n) {
    let val = n + a;
    return val
};

let count = add(10); //20
console.log(count)

/*clouser: a function inside a function and it has lexical scoping and provide variables private; 
it store the data as backup when ever the function is called it recall the last time value
 and based on that it produces new value */

function createCounter() {
    let counter = 0
    const myFunction = function () {
        counter = counter + 1
        return counter
    }
    return myFunction
}
const increment = createCounter()
const c1 = increment()
const c2 = increment()
const c3 = increment()
console.log('example increment', c1, c2, c3); //1,2,3

//example:3;
let z =10;
const sub = function(x){
    return function(c){
      return x+c
    }
  }
  
let a = sub(3);
console.log(a(z));