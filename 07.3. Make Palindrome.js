
//old solution
function makePalindromeOld(myStr){
    if(myStr === myStr.split('').reverse().join('')){
        return myStr;
    }else{
        let permutations = getPermutation(myStr)
        for(perms of permutations){
            perms = perms.join('')
            if(perms === perms.split('').reverse().join('')){
                return perms;
            }
        }
        return null;
    }
}

function getPermutation(myStr){
    let result = []
    function permute(arr, current=[]){
        if(arr.length === 0){
            result.push(current)
        }else{
            for(let i=0; i<arr.length; i++){
                let newArr = arr.slice(0,i).concat(arr.slice(i+1))
                let newCurrent = current.concat(arr[i])
                permute(newArr, newCurrent)
            }
        }
    }
    permute(myStr.split(''))
    return result;
}

//efficient solution
function canFormPalindrome(myStr){
    const freq = {};
    for(let char of myStr){
        freq[char] = (freq[char] || 0) + 1;
    }
    
    let oddCount = 0;
    for(let count of Object.values(freq)){
        if(count%2 !== 0){
            oddCount++;
        }
        if(oddCount > 1){
            return false;
        }
    }
    return true;
}


let myStr = "abcab";
if(myStr == myStr.split('').reverse().join('')){
    console.log(myStr + ' is palindrome')
} else{
    let result = canFormPalindrome(myStr);
    if(result){
    console.log(myStr + ' can be rearranged to form a palindrome')
    }else{
        console.log(myStr + ' can not make a palindrome')
    }
}
    

// if(!result){
//     console.log(myStr + " can not make into palindrome")
// }else{
//     console.log("myStr = "+myStr+" is palindrome when myStr = "+result)
// }