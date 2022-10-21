//check two numbers
function check(num1,num2){
if(num1==50||num2==50||(num1+num2==50)){
   return true;
    
}
else{
    return false;
}
}
console.log(check(50,19));
console.log(check(10,30));
console.log(check(10,40));
console.log(check(10,50));
console.log(check(10,90));

