function rmvDupli(word){
    let temp = "";
    for(let char of word){
        if(temp.indexOf(char) == -1){
            temp += char
        }
    }
    return temp;
}

//more optimal
// function rmvDupli(str){
//     let unique = new Set();
//     let result = "";
//     for(char of str){
//         if(!unique.has(char)){
//             unique.add(char)
//             result += char;
//         }
//     }
//     return result;
// }

let word = 'abccddeffaaab'
console.log(rmvDupli(word))