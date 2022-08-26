function runProgram(input) {
    input = input.split("\n");
     let x=input[0].trim().split(" ").map(Number);
       add(x);
  } 
  
          function add(x){
              for(i=0; i<=x.length-1; i++){
                  console.log(x[i]+1);
              }
          }
  if (process.env.USERNAME === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function(input) {
      read += input;
    });
    process.stdin.on("end", function() {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function() {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }