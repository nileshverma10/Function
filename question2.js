//Write a function isOdd which returns a boolean value based on the number is odd or not
//Use this function to print the odd numbers from 0 to a given limit(included)
function Odd(num){

for(i=0; i<=num; i++){
  if(i%2!=0){
 console.log(i, "true");
  }else{
 console.log(i, "False");
  }
}
}
Odd(20);