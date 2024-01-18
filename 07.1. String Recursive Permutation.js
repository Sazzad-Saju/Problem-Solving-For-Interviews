
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

let myStr = "abc";
console.log(getPermutation(myStr))