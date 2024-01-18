
function checkParen(myStr){
    let stack = [];
    for (const paren of myStr){
        if(paren == '(' || paren == "{" || paren == "["){
            stack.push(paren)
        }else{
            if(!stack.length && (paren == ")" || paren == "}" || paren == "]")){
                console.log(myStr +" Contains Invalid Parenthasis")
                return;
            }else{
                let top = stack[stack.length -1]
                if(top=="(" && paren== ")" || top=="{" && paren == "}" || top == "[" && paren == "]"){
                    stack.pop()
                }else if(paren == ")" || paren == "}" || paren == "]"){
                    stack.push(paren)
                }
            }
        }
    }
    if(!stack.length){
        console.log(myStr + " Contains Valid Parenthesis")
    }else{
        console.log(myStr + " Contains invalid Parenthesis")
    }
}

checkParen("([)]")
checkParen('(){()}')
checkParen('(x+y)+{y-z}')
checkParen('[a2/b2 - {c*(a+b)}/2] + {d*(b-c)}')
checkParen('{{}}()[()]')
checkParen('{][}')
checkParen(')')