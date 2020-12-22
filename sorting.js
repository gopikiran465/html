
var list = [9,3,5,8,4,20,19,33,1000000,10000];
var newList = [];
   var epty = [];
function sorted(unSrtArr){

  for(i=0;i<list.length;i++){
 
    var leastNum;
    var newArr;
    var eptyleastNum;
    
     leastNum = Math.min.apply(Math,unSrtArr);
     newArr = unSrtArr.filter((n)=>n!=leastNum);
    if(epty.length>0){
      leastNum = Math.min.apply(Math,epty);
      newArr = epty.filter((n)=>n!=leastNum);
    }
    
     newList.push(leastNum);
      epty = [...newArr];
     
    }
  return newList
}

console.log(sorted(list));
