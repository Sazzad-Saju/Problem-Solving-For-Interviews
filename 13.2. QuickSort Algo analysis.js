
function partision(data, low, high){
    // console.log("**inside partision**")
    let pivot = data[high]
    let i = low-1
    for(let j=low; j<high; j++){
        if(data[j] <= data[high]){
            i++;
            // console.log("loop var i, j, high: " + i +" "+ j + " "+ high)
            // console.log("lop ex: "+data[i] + ' ' + data[j]);
            [data[i], data[j]] = [data[j], data[i]];
            // console.log("after ex: "+data)
        }
    }
    [data[i+1], data[high]] = [data[high], data[i+1]];
    // console.log("last ex var: "+i+" "+high)
    // console.log("last ex: "+data)
    // console.log("***end partision***")
    return i+1;
}

let i = 0;
function quickSort(data, low, high){
    console.log("Quick sort("+low + " "+ high + ")")
    if(low<high){
        pos = partision(data, low, high)
        // console.log("after partision: "+data)
        console.log("pos: "+pos)
        // console.log("quickSortL("+low + " "+(pos-1)+")")
        quickSort(data,low, pos-1)
        // console.log("left done\n")
        // console.log("quickSortR("+(pos+1)+" "+high+")")
        quickSort(data,pos+1, high)
        // console.log("right done "+i+"\n")
    }
}

let data = [3,1,5,2,4];
console.log("unsorted: ", data);
quickSort(data, 0, data.length-1)
console.log("sorted: ", data)