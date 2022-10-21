//js function that generate all combinations of string
let possibleCombinations = (string) =>{
    let combinations = [];
      for(let i = 0 ;i < string.length; i++)
    {
        for(let j = i + 1; j< string.length + 1; j++)
        {
            combinations.push(string.slice(i , j));
        }
    }
   return combinations;
}
console.log(possibleCombinations('Dog'));
