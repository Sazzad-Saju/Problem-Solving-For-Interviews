
// function checkParen(myStr){
//     let stack = [];
//     for (const paren of myStr){
//         if(paren == '(' || paren == "{" || paren == "["){
//             stack.push(paren)
//         }else{
//             if(!stack.length && (paren == ")" || paren == "}" || paren == "]")){
//                 return false;
//             }else{
//                 let top = stack[stack.length -1]
//                 if(top=="(" && paren== ")" || top=="{" && paren == "}" || top == "[" && paren == "]"){
//                     stack.pop()
//                 }else if(paren == ")" || paren == "}" || paren == "]"){
//                     stack.push(paren)
//                 }
//             }
//         }
//     }
//     if(!stack.length){
//         return true;
//     }else{
//         return false;
//     }
// }


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

let paren = "([)]";
// paren = '(){()}'
// paren = '(x+y)+{y-z}'
// paren = '[a2/b2 - {c*(a+b)}/2] + {d*(b-c)}'
// paren = '{{}}()[()]'
// paren = '{][}'
// paren = ')'

let result = checkParen(paren)
console.log(result)