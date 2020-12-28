var a = 10; //global scope

function detect() {
    let c = 10;
    console.log(c); // 10 
}

//console.log(c); //undefined b'cos let has local scope we cant access outside of block


{
    const d = 30;
    d = 22; //error we cannot modify d; due to constant
}
console.log(d); //error cannot access outside of block

for (const i = 0; i < 10; i++) {
    i++
    console.log(i); //error we cannot modify i due to constant
}