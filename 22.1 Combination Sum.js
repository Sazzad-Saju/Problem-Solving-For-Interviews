

function combinationSum(candidates,target)
{
    let res = [];
    
    function dfs(i,current,total){
        if(total == target){
            res.push([...current]);
            return
        }
        if(i>=candidates.length || total>target){
            return
        }
        
        current.push(candidates[i])
        dfs(i,current,total+candidates[i]);
        current.pop()
        dfs(i+1,current,total)
    }
    
    dfs(0,[],0)
    return res;
}

let result = combinationSum([2,3,6,7], 7);
console.log(result)