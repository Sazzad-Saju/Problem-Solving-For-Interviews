
function partition(data, low, high){
    let pivot = data[high];
    let i = low -1
    for(let j=low; j<high; j++){
        if(data[j]<pivot){
            i++;
            [data[i], data[j]] = [data[j], data[i]];
        }
    }
    [data[i+1], data[high]] = [data[high], data[i+1]]
    return i+1;
}

function quickSort(data, low, high){
    
    if(low<high){
        let pos = partition(data, low, high)
        quickSort(data, low, pos-1)
        quickSort(data, pos+1, high)
    }
}

let data = [4,3,1,5,2];
console.log("unsorted: "+ data)
quickSort(data, 0, data.length-1)
console.log("sorted: "+data)