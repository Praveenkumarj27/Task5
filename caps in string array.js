
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
 

//using title caps in Arrow function

 var myString1= "TO TRAVEL is TO live";
 
 var str1= (myString1) =>{
    var sent2 = myString1.toLowerCase().split(" ");
    for(var i = 0; i< sent2.length; i++){
       sent2[i] = sent2[i][0].toUpperCase() + sent2[i].slice(1);
    }
 sent2.join(" ");
 var res="";
 for(let i=0;i<sent2.length;i++)
 {
     res+=sent2[i]+" "
 }
 console.log(res);
 };str1(myString);


 
