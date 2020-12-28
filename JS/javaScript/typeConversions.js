/* we can convert one data type to another data type  */

//String
let a ="hello";
alert(typeof a); //string
alert(typeof Number(a)); //number


//Number
let b = 100;
alert(typeof b); //number
alert(typeof String(b)); //string

let  c = Number("hello world with some message");
alert(typeof c); //number
alert(c) //NaN conversion fail

let d = true;
let d = true;
let x = Number(d); 
alert(x);//1
let y = String(d)
alert(y); //"true"
