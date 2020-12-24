let obj = {
    name: "Gopi",
    qualification: "B.Tech",
    tech: ["html", "css", "js", "react"],
    exeprience: {
        fstComp: "Mars Telecom",
        secComp: "get on grey",
    }
}

//example1: Object destructuring
let { name, qualification,
    tech: [tech1, tech2, tech3],
    exeprience: {
        fstComp: FirstCompany,
        secComp: SecondCompany }
} = obj;

console.log(name, qualification, tech1, tech2, tech3, FirstCompany, SecondCompany);


//example2: destructuring in functions with default parameters

let obj1 = {
    name: undefined,
    qualification: "B.Tech",
    tech: ["html", "css", "js", "react"],
    exeprience: {
        fstComp: "Mars Telecom",
        secComp: "get on grey",
    }
}

function profile({ name = "someName", qualification, tech: [tech1 = "js", tech2 = "css", tech3], exeprience: { fstComp, secComp: SecondCompany } }) {
    return `${name} is ${qualification} graduate and he has knowledge in ${tech1}, ${tech2} and  ${tech3}, before  ${fstComp}, he was part of ${SecondCompany}`
}

console.log(profile(obj1));