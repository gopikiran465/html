let details = {
    name:"gopi",
    class : "B.tech",
}

details.age = "25";
details["job descrip"] = "ui developer"

console.log(details);

function newUser(){
    return{
        roll,
        sub
    }
}

let user = newUser(465,ddtv);
console.log(user.roll,user.sub);

var names={
    name1:"gopi",
    name2:"raju",
    name3:"ravi",
}
console.log(names);

var b=Object.assign({},names);
b.age=32;
console.log(b);

let name = {
    roll:6,
    sub:"ddtv"

}

let user2 = Object.assign({},name);
console.log(user2);

let user1 = {...name};
console.log(user1);


//merging means combining two objects
var persons={
       per1:"naveen",
       per2:"baveen",
   }
   console.log(persons);

var persons2={	
        per1:"naveen",
        per3:"praveen",
        per4:"raju",
        }
        console.log(persons2);

    var person3=Object.assign(persons,persons2);
    console.log(person3);