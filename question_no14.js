//create two variables vowels and cosonants
let word=(str)=>{
  var vowels=[];
  var consonants=[];
  var array=str.split("");
  console.log("strings are:",array);
  //arrange the elements of array in ascending array
 array.sort();
 console.log("sorted array is:",array.sort());
 var sortedstring=array.join("");
 console.log("sorted string is:",sortedstring);
  
  //insert the character into vowels array if it is vowel and consonants if character is consonants
  for(var i=0;i<array.length;i++){
      func(array[i]);
  }
      function func(x){
      
    if(x=='a'||x=='e'||x=='i'||x=='o'||x=='u'||
      x=='A'||x=='E'||x=='I'||x=='O'||x=='U'){
  
        vowels.push(x);}
      else{
          consonants.push(x);} 
       
  }

      
 console.log("vowels letter present in string=",vowels);
 console.log("consonants letter present in string=",consonants);
 
}
 console.log(word("Tutorials"));

