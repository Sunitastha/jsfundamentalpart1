//alphabetical order of string
let word=(string)=>{
var array=string.split("");
console.log(array);
array.sort();
console.log(array.sort());
var sortedstring=array.join("");
console.log(sortedstring);
return sortedstring

}
console.log("Alphabetical order of string is:",word("webmaster"));