//javascript function to print all methods in javascript
function findallmethods(obj){
return Object.getOwnPropertyNames(obj);
}
console.log(findallmethods(Object));
