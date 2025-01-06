
function generateParenthesis(n){
    let res = [];
    
    function backtrack(s,open, close){
        if(open == n && close == n){
            res.push(s);
            return
        }
        if(open<n){
            backtrack(s+"(",open+1,close);
        }
        if(close<open){
            backtrack(s+")",open,close+1);
        }
    }
    backtrack("",0,0)
    return res;
}

let result = generateParenthesis(3)
console.log(result)