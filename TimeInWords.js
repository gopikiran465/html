var date = new Date();
var time = date.getHours();

var arr = time.toString().split("");

console.log(sum("3"));

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