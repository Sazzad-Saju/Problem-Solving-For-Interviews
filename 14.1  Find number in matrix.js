

function findNumber(matrix, target){
    for(let row = 0; row<matrix.length; row++){
        let low = 0;
        let high = matrix[row].length - 1;
        while(low <= high){
            const mid = Math.floor((low+high)/2)
            if(matrix[row][mid] == target){
                return {row, column: mid};
            }else if(matrix[row][mid] < target){
                low = mid+1;
            }else{
                high = mid-1;
            }
        }
    }
    return null;
}

const matrix = [
    [1,2,3,4,5],
    [6,7,8,9,0],
    [4,5,6,7,10]
];

const target = 10
const result = findNumber(matrix, target)
console.log(result)