
function checkParenOld(myStr){
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


//optimal solution
function checkParen(str){
    let stack = [];
    let parenMap = {
        ')': '(',
        '}' : '{',
        ']' : '['
    };
    
    for(char of str){
        if(char == '(' || char == '{' || char == '['){
            stack.push(char)
        }else if(char == ')' || char == '}' || char == ']'){
            if(stack.length == 0 || stack.pop() !== parenMap[char]){
                return false;
            }
        }
    }
    
    return stack.length == 0;
}


checkParen("([)]")
checkParen('(){()}')
checkParen('(x+y)+{y-z}')
checkParen('[a2/b2 - {c*(a+b)}/2] + {d*(b-c)}')
checkParen('{{}}()[()]')
checkParen('{][}')
checkParen(')')