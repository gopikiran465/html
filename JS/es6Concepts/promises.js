let api = new Promise(function(resolve,reject){
  resolve( fetch("https://jsonplaceholder.typcode.com/todos"));
  reject("some error occured please try again later")
});

api.then((response)=>response.json())
.then((data)=>{
  console.log(data)
}).catch((e)=>{
  console.log(e);
})
