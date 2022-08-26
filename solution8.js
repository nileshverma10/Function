function productOfRows(N,M,arr){
    //write code here
    for( i=0;i<arr.length; i++){
        let pro=1;
        for(j=0; j<arr[i].length; j++){
            pro=pro*arr[i][j];
        }
        console.log(pro);
    }
  
}
