class student {
    constructor(name, roll) {
        this.name = name;
        this.roll = roll;
    }
    getName() {
        console.log(`my name is ${this.name}`);
    };
    getRoll() {
        console.log(`my roll is ${this.roll}`);
    };
    static MethodStatic() {
        console.log(`i'm static method`) // we cannot call it with instance 
    }
}

let studentName = new student("gopi", "465");
studentName.getName();
studentName.getRoll();
studentName.MethodStatic(); //error we are call with instance
student.MethodStatic(); //i'm static method


//Extended example (instance)
class studentDetails extends student {
    constructor(name, roll, parentName) {
        super(name, roll);
        this.parentName = parentName;
    }
    getParentName() {
        console.log(`parent Name of ${this.name} of roll ${this.roll} is ${this.parentName} `)
    }
}

let Details = new studentDetails("gopi", 465, "S.V.Rao");
Details.getParentName();

//getters and setters

class dog {
    constructor(breed) {
        this.breed = breed;
    }
    get breedName() {
        console.log(`my dog is ${this.breed} breed`);
    };
    set changeBreed(newBreed) {
        this.breed = newBreed;
    }
}

let breedDisplay = new dog("germen shepherd");
breedDisplay.breedName; //germen shepherd

breedDisplay.changeBreed = "lab";
breedDisplay.breedName; //lab
