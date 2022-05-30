
//Using odd numbers in IIFE
let a=[1,2,3,4,5,7];
(function(a){
    var result="";

    for(i=0;i<a.length;i++)
    {
        if(a[i]%2!==0)
        {
            result+=a[i]+" "
        }
    }
        console.log(result);
})(a);




// Using odd numbers in anonymous

let b=[1,2,3,4,5];

var odd=function(b){
    var result="";

    for(i=0;i<b.length;i++)
    {
        if(b[i]%2!==0)
        {
            result+=b[i]+" "
        }
    }
       return result;
}
console.log(odd(b));






// Using odd numbers in Arrow function

var c=[1,2,3,4,5,11];

var odd2=(a)=>{
 var result="";
 for (const key of c) {
    if (key%2!==0) {
        result+=key+" "
    } 
 }
    return result;
}
console.log(odd2(c));


