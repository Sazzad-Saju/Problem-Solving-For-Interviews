//LeetCode 17
//https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/?envType=study-plan-v2&envId=top-100-liked


function letterCombinations(digits){
    if(!digits){
        return []
    }
    
    const digitsToLetters = {
        '2': 'abc',
        '3': 'def', 
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    
    const res = [];
    
    function backtrack(index, comb){
        if(index == digits.length){
            res.push(comb)
            return;
        }
        
        const letters = digitsToLetters[digits[index]];
        for(const letter of letters){
            backtrack(index+1, comb+letter);
        }
    }
    
    backtrack(0,"");
    return res;
}

let result = letterCombinations("23")
console.log(result)
