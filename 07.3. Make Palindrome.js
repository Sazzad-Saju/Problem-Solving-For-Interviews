

function makePalindrome(myStr){
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

let myStr = "abcab";
let result = makePalindrome(myStr);
if(!result){
    console.log(myStr + " can not make into palindrome")
}else{
    console.log("myStr = "+myStr+" is palindrome when myStr = "+result)
}