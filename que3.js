//Write a custom function that has the same behavior of inbuilt Array Slice Function

  function slice(animals){
 let bag=[];

  for(i=0; i<=animals.length-1; i++){
  if(animals[i]=='ant'){
    continue;
  }else{
        bag.push(animals[i]);
  }
}
console.log(bag);
  }
slice(['ant', 'bison', 'camel', 'duck', 'elephant']);