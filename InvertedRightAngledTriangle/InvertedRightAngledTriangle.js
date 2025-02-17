function invertedRightAngledTriangle(n){

    for(let i=n;i>=1;i--){

        let str = "";

        for(let j=1;j<=i;j++){
            str += "*";
        }

        console.log(str)

    }

}

invertedRightAngledTriangle(5);