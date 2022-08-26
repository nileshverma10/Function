function runningSumOfArray(arr, size) {
    //write your code over here
    let curSum=0;
    let bag="";
    for(let i=0;i<=arr.length-1; i++){
        curSum = curSum+arr[i];
       bag=bag+curSum+" ";
    }
   console.log(bag);
  }
  