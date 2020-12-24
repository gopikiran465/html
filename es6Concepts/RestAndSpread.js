//rest and spread operator;

//rest operator will create will create new array with rest of the elements assigned to it;

var a = ["a", "b", "c", "d"];
var [c, ...d] = a;

console.log(c); //OP:a
console.log(d); //OP:["b","c","d"];

function hello(...args) {
    console.log(args)
}

console.log(hello(a)); //OP:["a", "b", "c", "d"]


//spread operator will quite opposite to rest, it will combine the elements together will not create any array

var alp = ["a", "b", "c"];
var num = [1, 2, 3]
var combo = [...alp, 1, 2, 3];
console.log(combo);        //OP:["a", "b", "c", 1, 2, 3]

var combo2 = [...alp, ...num];
console.log(combo2);        //OP:["a", "b", "c", 1, 2, 3]