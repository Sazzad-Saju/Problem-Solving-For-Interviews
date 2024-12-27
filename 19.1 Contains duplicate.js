
//inefficient O(n2)
var containsDuplicateOld = function(nums) {
    let temp = [];
    for(num of nums){
        if(temp.indexOf(num) == -1){
            temp.push(num)
        }
    }
    return temp.length !== nums.length
};

//efficient O(1) 16ms
function containsDuplicate1(nums){
    const uniqueNums = new Set(nums)
    return uniqueNums.size !== nums.length
}

//even better O(1) 12ms
var containsDuplicate2 = function(nums){
    let seen = new Set();
    for(num of nums){
        if(seen.has(num)){
            return true
        }else{
            seen.add(num)
        }
    }
    return false
}

let nums = [1,2,3,1]
console.log(containsDuplicate1(nums)) // true
let nums2 = [1,2,3,4]
console.log(containsDuplicate2(nums2)) // false