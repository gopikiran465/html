class details {
    constructor(name,age){
        this.name =name;
        this.age = age;
    }
  }
  
  function country(){
    return country="india"
  }
  
  details.prototype.country = country()
  
  let newDetails = new details("gopi","25");
  console.log(newDetails);
  let newDetail2 = new details("Naveen","25");
  console.log(newDetail2);

  
  // example with classes
  class animal{
    constructor(){
     this.run=true;
    }
  }
  
  let animal1 = new animal();
  console.log(animal1);//{run:true}
  
  class rabbil{
    constructor(){
      this.jump=true;
    }
  }
  let rabbit1 = new rabbil();
  
  rabbit1.__proto__= animal1;
  console.log(rabbit1);//{jump: true, run: true}
  