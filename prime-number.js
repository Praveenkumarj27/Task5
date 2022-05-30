
//prime numbers using IIFE

let a=[1,2,3,6,7,8];
(function(a){
 var result=""
 for (let i = 0; i < a.length; i++) {
    {
        var count=0
        for (let j = 0; j <=a[i]; j++) {
          if (a[i]%j==0) {
              count++
          }
        }
        if (count==2) {
            result+=a[i]+" "
        }
    }
 }
 console.log(result);
})(a);


//prime numbers using anonymous
let b=[1,2,3,4,5,6,7,8,9,11];

var sum =function(b){
    var  res="";
    for(i=0;i<b.length;i++)
    {
        var count=0;
        for(j=1;j<=b[i];j++)
        {
            if(b[i]%j===0)
            {
                count++
            }
        }
        if(count==2)
        {
            res+=b[i]+" "
        }
    }
    return res;
 
}
console.log(sum(b));


//prime numbers using Arrow function

var c=[1,2,3,4,5,6,7,8,9,11,17];

var prime =(c)=>{
    var  res="";
    for(i=0;i<c.length;i++)
    {
        var count=0;
        for(j=1;j<=c[i];j++)
        {
            if(c[i]%j===0)
            {
                count++
            }
        }
        if(count==2)
        {
            res+=c[i]+" "
        }
    }
    return res;
}
console.log(prime(c));
