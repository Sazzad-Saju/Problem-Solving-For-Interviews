function generateParenthesis(n){
    let res = [];
    let stack = [];
    
    function backtrack(open, close){
        if(open == n && close == n){
            res.push(stack.join(''));
            return;
        }
        
        if(open < n){
            stack.push("(");
            backtrack(open+1,close)
            stack.pop()
        }
        
        if(close<open){
            stack.push(")")
            backtrack(open,close+1)
            stack.pop()
        }
    }
    
    backtrack(0,0)
    return res;
}

let result = generateParenthesis(3)
console.log(result)