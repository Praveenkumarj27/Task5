
//using title caps in IIFE

let string="To travel is to live";
(function(string) {
    
    var sent = string.toLowerCase().split(" ");
    for(var i = 0; i< sent.length; i++){
       sent[i] = sent[i][0].toUpperCase() + sent[i].slice(1);
    }
 sent.join(" ");
 var res="";
 for(let i=0;i<sent.length;i++)
 {
     res+=sent[i]+" "
 }
 console.log(res);
 })(string);


//using title caps in anonymous

 var myString = "TO TRAVEL IS TO LIVE";
 
 var str=function (myString) {
    var sent = myString.toLowerCase().split(" ");
    for(var i = 0; i< sent.length; i++){
       sent[i] = sent[i][0].toUpperCase() + sent[i].slice(1);
    }
 sent.join(" ");
 var res="";
 for(let i=0;i<sent.length;i++)
 {
     res+=sent[i]+" "
 }
 console.log(res);
 }(myString);
 



 