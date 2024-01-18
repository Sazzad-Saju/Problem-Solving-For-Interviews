
function fibonacchi(n){
    if(n==0) return 0
    if(n==1) return 1
    return fibonacchi(n-2) + fibonacchi(n-1)
}

let terms = 6
let result = fibonacchi(terms)
console.log(result)