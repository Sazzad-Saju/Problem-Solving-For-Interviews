//slightly different solve
const letterMap ={
    '2': 'abc',
   '3': 'def',
   '4': 'ghi',
   '5': 'jkl',
   '6': 'mno',
   '7': 'pqrs',
   '8': 'tuv',
   '9': 'wxyz',
}

var letterCombination = function(digits){
   let combination = []
   
   const comb = function(ind,currentComb){
       if(ind == digits.length){
           if(currentComb.length>0){
               combination.push(currentComb)
               return
           }
       }
       let currentLetters = letterMap[digits[ind]]
       for(let i = 0; i<currentLetters.length; i++){
           currentComb += currentLetters[i]
           comb(ind+1,currentComb)
           currentComb = currentComb.slice(0,currentComb.length-1)
       }
   }
   
   comb(0,"")
   return combination;
}

let result = letterCombination('23')
console.log(result)


