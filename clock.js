var a = setInterval(clock,1000);
var hours =[];
function clock(){
  let date = new Date();
  let time = date.toLocaleTimeString();
  let HH = date.getHours();
  let MM = date.getMinutes();
  let SS = date.getSeconds();
  if(MM==11 && SS==0){
    hours.push(HH)
  
  }
}