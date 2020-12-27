//example 1
function* names() {
    let i = 0;
    yield i++;
    yield i--;
    return i;
}

var nm = names();
console.log(nm.next());
console.log(nm.next());
console.log(nm.next());


//example 2
function* some(i) {
    yield i + 1;
    yield i + 2
}

function* add(i) {
    yield i;
    yield* some(i);
    yield i + 10;
}

let cal = add(10);
console.log(cal.next().value);
console.log(cal.next().value);
console.log(cal.next().value);
console.log(cal.next().value);

//example 3
function* character() {
    console.log(0);
    console.log(1, yield);
    console.log(2, yield);
}
let chr = character();
chr.next();
chr.next("character1");
chr.next("character2");