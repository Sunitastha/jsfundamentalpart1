//create a clock
function show_clock(){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    h=addzero(h);
    m=addzero(m);
    s=addzero(s);
    hh=(h>12)?(h-12):h;
    console.log("javascript time=",hh+":"+m+":"+s);
    setTimeout(show_clock,1000);
   
}
function addzero(a){
    if(a<10){
        a="0"+a;
    }
    return a;
}
console.log(show_clock());