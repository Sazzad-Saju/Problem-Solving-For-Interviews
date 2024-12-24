


function rotateArray(arr, k)
{
    let n = arr.length
    k = k%n;
    reverse(arr,0,n-1)
    reverse(arr,0,n-k-1)
    reverse(arr,n-k,n-1)
    
    return arr
}

function reverse(arr, low, high){
    
    while(low<high){
        let temp = arr[high];
        arr[high] = arr[low];
        arr[low] = temp
        
        low++;
        high--;
    }
}



let arr = [1,2,3,4,5];
let k = 2;

let result = rotateArray([...arr], k)
console.log(result)

