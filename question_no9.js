//js function that accepts a string as parameter and find the longest word within the string
let findLongestWord=(str)=> {
    var strSplit = str.split(' ');
    console.log("string is=",strSplit);
    var longest=0;
    var longestWord = null;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longest){
      longestWord = strSplit[i];
      longest=strSplit[i].length;
    
       }
    }
   console.log("the longest word within the entered string is ="+longestWord);
   //convert the output word's each character into uppercase
  let longestWord1=longestWord.toUpperCase(); 
   console.log("uppercase of string is=",longestWord1);
  }
  
  console.log(findLongestWord("Web Development Tutorial"));
  
  