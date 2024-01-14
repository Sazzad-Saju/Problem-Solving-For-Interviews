
function RecursionChallenge(num){
    if(num < 1) return 0
    if(num <2 ) return 1
    return num = num * RecursionChallenge(num-1)
}

let output = RecursionChallenge(4)
let token = 'wfbcuzs12'
let FinalOutput = RecursionChallenge(4) + token
console.log(FinalOutput)
FinalOutput = FinalOutput.split('').map((char, index) => index%3 == 2 ? 'x' : char).join('')

console.log(output)
console.log(FinalOutput)