var date = new Date();
var time = date.getHours();

var arr = time.toString().split("");



function sum(num) {
    var time = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
    if (num.length < 2) {
        let a = Number(num[0]) - 1;
        return time[a];
    } else {
        let a = Number(num[0]) + Number(num[1]);
        return time[a];
    }
}

sum(arr);


var date = new Date();
var time = date.getHours();

var arr = time.toString().split("");



function sum(val) {
   let a = 0;
  var arr = val.toString().split("");
  arr.forEach((n)=>{
    a=a+Number(n);
  });
  return a
}

console.log((sum(987643211)));