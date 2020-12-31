const student = {
    name: "student ",
}

const teacher = {
    name: 'teacher',
}

//providing this using bind,it will take "this" of immidate parent  
  const Binddisp = function(){
    console.log(`iam a ${this.name}`);  
  }
  
  let t = Binddisp.bind(this);
  t();
  let s = Binddisp.bind(student);
  s();
  let tt = Binddisp.bind(teacher);
  tt();


//using call
Binddisp.call(this);
Binddisp.call(student);
Binddisp.call(teacher);

//inside function will accept global this
const disp = function () {
    console.log(`iam a ${this.name}`);
    function some() {
        console.log(`my profession is ${this.name}`);// if not bind it will take global out put
    };
    some();
};

disp(this);//browser this
disp.call(student); //take the student this
disp.call(teacher);

//providing this to inner function  using variable 
const disp1 = function () {
    let my_this = this;
      console.log(`iam a ${this.name}`);
      function some() {
          console.log(`my profession is ${my_this.name}`);// if not bind it will take global out put
      };
      some();
  }
  
  disp1.call(student); //take the student this
  let c = disp1.bind(teacher);
  c();

  // arrow functions are auto binded

  const disp1 = function () {
 
    console.log(`iam a ${this.name}`);
    let some = ()=>{
      console.log(this.name)
    };
    some()
}

disp1.call(student);