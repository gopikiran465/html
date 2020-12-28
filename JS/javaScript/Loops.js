/* 1) for  2)for-of  3)for-in 4)while  5)do-while */

//for loop;

let ary = [1, 2, 3, 4, 5];

let obj = { name:"gopi",class:"b.tech"};

//for
for (let i = 0; i <= 5; i++) {
    console.log(`value is ${i}`);
}
//for-of
for (let val of ary) {
    console.log(val)
}

//for-in
for (values in Object.values(obj)) {
    console.log(values)
}

//while 
let i = 0;
while(i<5){
    alert("hello");
    i++;
  };

  //do-while
let a=0;
  do{
      console.log(a);
      a++
  }while(a<5)