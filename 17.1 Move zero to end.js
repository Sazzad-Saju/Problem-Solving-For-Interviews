

function moveZeroToEnd(arr){
    temp = [];
    zeroCount= 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] == 0){
            zeroCount++;
        }else{
            temp.push(arr[i])
        }
    }
    for(let j=0;j<zeroCount; j++){
        temp.push(0);
    }
    return temp;
}



let arr = [0, 1, 0, 2, 9, 3, 0, 2];
let result = moveZeroToEnd(arr);
console.log(result);