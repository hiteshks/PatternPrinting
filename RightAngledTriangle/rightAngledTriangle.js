function rightAngledTriangle(n){

    for(let i=0;i<n;i++){
        
        let str  = "";

        for(let j=0;j<=i;j++){
            str += "*";
        }

        console.log(str)
    }

}

rightAngledTriangle(5)