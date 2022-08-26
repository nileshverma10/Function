function stockValue(n,arr){
    // write code here
    console.log(findMax(arr));
}
      function findMax(arr){
        let max=0;
        let currentPrice=0;
         for(let i=0; i<=arr.length-1; i++){
           currentPrice=currentPrice+arr[i];
            if(currentPrice>max){
              max=currentPrice;
               }
           }
           return max;
        }
        
       
        