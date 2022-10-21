//count vowels from string
let word=(str)=>{
    var vowelscount=0;
    const vowels=['a','e','i','o','u'];
    for(let char of str){
        if(vowels.includes(char)){
            vowelscount++
        }
    }
    return vowelscount;


}
console.log("No of vowel present in word is=",word("aeroplane"));