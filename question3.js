//Write code to calculate the average of an array
//If there are no items in the array it should return 0
//NOTE: Create a function to find the sum of elements in an array and use that function to find out the average

let arr=[1,2,34,5,6,7,8,9];
let count=0;
let sum=0;
for(i=0; i<=arr.length-1; i++){
  sum= sum+arr[i];
  count++;
}
console.log(sum/count);

