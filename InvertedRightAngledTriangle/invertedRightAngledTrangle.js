function inVertedRightAngledTriangle(n){

    for(let i=n;i>0;i--){

        let str = "";

        for(let j=1;j<=i;j++){

            str += "*"

        }

        console.log(str);
    }

}

inVertedRightAngledTriangle(5);