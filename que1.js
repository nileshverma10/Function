//Problem 1. Write a custom function that has the same behavior of inbuilt Array Join Function

function join(str){

let bag="";
for(i=0; i<=str.length-1; i++){
  if(str[i]==" "){
    bag= bag+"-";
  }else{
    bag=bag+str[i];
  }
}
  console.log(bag);
}
join("my name is hulk");