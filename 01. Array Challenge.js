
function getRemovedCount(word1, word2) {
    let removedCount = 0;
    let i = 0;
    let j = 0;

    while (i < word1.length && j < word2.length) {
        if (word1[i] !== word2[j]) {
            // If characters don't match, remove character from word1
            removedCount++;
            i++;
        } else {
            // If characters match, move to the next character in both words
            i++;
            j++;
        }
    }

    // If there are remaining characters in word1, remove them
    removedCount += word1.length - i;

    return removedCount;
}

// console.log(getRemovedCount('baseball', 'all'))

function ArrayChallenge(strArr){
    const [targetWord, dictionary] = strArr;
    const words = dictionary.split(',');
    let minRemoved = Infinity;
    
    for(let i=0; i<words.length; i++){
        const currentWord = words[i];
        const removedCount = getRemovedCount(targetWord, currentWord);
        minRemoved = Math.min(minRemoved, removedCount)
    }
    
    return minRemoved === targetWord.length ? -1 : minRemoved;
}

console.log(ArrayChallenge(['baseball', 'a,all,b,ball,base,cat,code,d,e,efd,zzzz']))  //4
console.log(ArrayChallenge(['apbpleeeef', 'a,ab,abc,abcg,b,c,dog,efd,zzzz']))    //8
console.log(ArrayChallenge(['gnnner', 'bc,ab,abc,abcf,kuk,c,dom,xfd,zzzz']))    //-1
