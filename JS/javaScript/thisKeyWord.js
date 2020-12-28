let display = {
    firstname: "gopi kiran",
    secondName: " S ",
    sayHi() {
        console.log(this.firstname);
    }
}

display.sayHi(); //gopi kiran


//constructor
function detail(name, clas) {
    this.name = name;
    this.clas = clas;
}

let details = new detail("gopi","b.tech");

console.log(details.name);
console.log(details.clas);