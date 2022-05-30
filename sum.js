
//Using Sum in IIFE
let a=[1,2,3,4,5,7];
(function(a){
  var result=0
  for(i=0;i<a.length;i++){
      result+=a[i]
  }
  console.log(result);
})(a);



// Using Sum in anonymous
  let b=[1,2,3,4,5,6];
var sum = function(b){
    var  res=0;
    for(i=0;i<b.length;i++)
    {
            res+=b[i];
           
    }
    return res
}
console.log(sum(b))


// Using Sum in Arrow function

let c=[1,2,3,4,5,6,7];
var sum1= (c)=>{
    var  res=0;
    for(i=0;i<c.length;i++)
    {
            res+=c[i];
           
    }
    return res
}
console.log(sum1(c))
