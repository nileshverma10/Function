//Problem 3: Use the same function to print Non-Primes from 2 to a given limit

function not_prime(num){
for(i=1; i<=num; i++){
  if(i%2==0){
    console.log(i);
  }
}
}
not_prime(20);