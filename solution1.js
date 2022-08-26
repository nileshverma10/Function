function runProgram(input) {
    input= input.split("\n");
    let x= input[0];
    let y= input[1].trim().split(" ").map(Number);
    add(x,y);
}

    function add(x, y){
        let bag="";
        for(i=0; i<=y.length-1; i++){
            bag+= y[i]+1+" ";
           
        }
         console.log(bag); 
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