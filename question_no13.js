//create new string with the first characters in lower case form a given string
//if string length <3 convert all character in upper case
let string=(str)=>{
    let part=str.slice(0,1);
    console.log("new string is=",part);
    let length=str.length;
    console.log("length of string=",length);
    if(str.length<3){
        let string2=str.toUpperCase();
        console.log("uppercase of string is=",string2);
    }
    else{
        console.log("length of string is not less than 3");
    }
}
console.log(string("do"));