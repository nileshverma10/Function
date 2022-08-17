//Write a custom function that has the same behavior of inbuilt Array Includes Function
  function includes(pets){
for(i=0; i<=pets.length-1; i++){
  if(pets[i]=='cat'){
console.log("true");
  break;
  }else{
console.log("false");
 
  }
}
  }
includes(['cat', 'dog', 'bat']);

