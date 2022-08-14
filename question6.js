function prime(num){
for(i=2; i<=20; i++){
  for(j=2; j<=i; j++){
    if(i%j==0){
      break;
    }
  }
  if(i==j){
    console.log(i);
  }
}
}
prime(20);