//def: a function with takes the same input and produce the same output are called pure function

const piValue = function value(){
    return Math.PI;
  }
  
  console.log(piValue()); 
  //return same value each time

  //example:2

  function add(a,b){
    return a+b
  }
  
  console.log(add(5,5))