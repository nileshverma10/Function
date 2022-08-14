
let a=2;
let b=3;
    let count=0;
  for(i=1; i<=a; i++){
      for(j=1; j<=b; j++){
          if(a%i==0 && b%j==0){
              count++;
              break;
              
          }
      }
  }
  if(count==2){
      console.log("Prime");
  }else{
      console.log("Not Prime");
  }