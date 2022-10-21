//generate random number between 1 to 10
const num = Math.floor(Math.random()*(10-1))+1;
console.log("Random number between 1 and 10 is:",num);
//factorial of random number 
    let fact=1;
    for(let i=1; i<=num;i++){
        fact=fact*i;
    }
console.log("factorial of random num",fact);
