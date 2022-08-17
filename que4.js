//Write a custom function that has the same behavior of inbuilt String Substring Function
  function substring(str){

let bag="";
for(i=0; i<=str.length-1; i++){
  if(str[i]=='M'){  
    continue;
   }else if( str[i]=='l'){
    break;
   } else{
    bag=bag+str[i];
   }
}
console.log(bag);
  }
substring('Mozilla');