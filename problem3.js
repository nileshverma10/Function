//Problem 4: Write a function to check if the char is a small case or not.
function lower_case(char){
let lower="abcdefghijklmnopqrstuvwxyz";
for(i=0; i<=lower.length-1; i++){
  if(char==lower[i]){
    return true;
  }
}
}
let x=lower_case("v");
if(x==true){
  console.log("Yes");
}else{
  console.log("No");
}