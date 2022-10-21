//js function to convert an objectinto a list of '[key,value]'pairs
var obj = {
  "fname":"harry",
  "lname":"potter",
  "age":25,
  "gender":"male",
};
var result = Object.keys(obj).map(function(key){
  return [key,key];


});
console.log(result);