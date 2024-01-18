
function CountZero(code, low, high){
    let count = 0; 
    for(let i=low; i<=high; i++){
        if(code[i] == '0'){
            count++;
        }
    }
    return count;
}

function CountOne(code, low, high){
    let count = 0;
    for(let i=low; i<=high; i++){
        if(code[i] == '1'){
            count++;
        }
    }
    return count;
}

function isBeauty(code){
    code = String(code)
    let left1=0, right0 = 0, left0=0, right1=0;
    for(let i=0; i<code.length -1; i++){
        if(code[i] == '0'){
            left1 = CountOne(code, 0, i-1)
            right0 = CountZero(code, i+1, code.length)
            right1 = CountOne(code, i+1, code.length)
            left0 = CountZero(code, 0, i-1)
            
            if((left1!=0 && right0!=0) || (right1!=0 == left0!=0)){
                if(left1 == right0 || right1 == left0){
                    return true;
                }
            }
        }
    }
    return false;
}


console.log(isBeauty(1011010001));
console.log(isBeauty(10001011100));
console.log(isBeauty(10001011000));