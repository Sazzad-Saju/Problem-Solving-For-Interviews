function RmvDuplicate(word){
    let temp = "";
    for(let char of word){
        if(temp.indexOf(char) == -1){
            temp += char
        }
    }
    return temp;
}

let word = 'abccddeffaaab'
console.log(RmvDuplicate(word))