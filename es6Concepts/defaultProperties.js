//Example-1
function multiply(a,b=1){
    return a*b;
  }
  
  console.log(multiply(1)); //op:1  (a=1,b=1)
  console.log(multiply(2)); //op:2  (a=2,b=1)
  console.log(multiply(5,5));//op:25; (a=5,b=5)
  console.log(multiply()); //op:NaN;
  
  //Example -2
  function type(a=1){
    return typeof a;
  }
  
  console.log(type());//Number
  console.log(type(undefined));//Number
  console.log(type(NaN));//number
  console.log(type(null));//Object b'coz  we are sending value which null
  console.log(type(""));// String 
  
  //Example-3
  function Ary(val,list=[]){
    list.push(val);
    return list
  }
  
  console.log(Ary(1));// [1]
  console.log(Ary(2));//[2]
  
  //Example-4
  
  
  function go() {
    return ':P'
  }
  
  function withDefaults(a, b = 5, c = b, d = go(), e = this,
                        f = arguments, g = this.value) {
    return [a, b, c, d, e, f, g]
  }
  
  function withoutDefaults(a, b, c, d, e, f, g) {
    switch (arguments.length) {
      case 0:
        a= undefined;
      case 1:
        b = 5;
      case 2:
        c = b;
      case 3:
        d = go();
      case 4:
        e = this;
      case 5:
        f = arguments;
      case 6:
        g = this.value;
      default:
    }
    return [a, b, c, d, e, f, g];
  }
  
  console.log(withDefaults.call({value: '=^_^='}));
  // [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]
  
  withoutDefaults.call({value: '=^_^='});
  

  //Example-5 in es-5
  function getInfo (name, year, color) {
    year = (typeof year !== 'undefined') ? year : 2018;
    color = (typeof color !== 'undefined') ? color : 'Blue';
    return name+" "+year+" "+color
  }
  getInfo("gopi"); //op:gopi 2018 Blue

  
//Example -6 in es6
function get_info (name, year=2018, color="blue") {
   
    return name+" "+year+" "+color
  }
  get_info("gopi"); //op:gopi 2018 Blue
