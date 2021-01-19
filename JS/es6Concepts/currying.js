//example:1;
function sum(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
console.log(sum(5)(5)(5)); //15

//example:2

const sub = function(a){
    return function(b){
      return a+b
    }
  }
  
  console.log(sub(10)(10));//20