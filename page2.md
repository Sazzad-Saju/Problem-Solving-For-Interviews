## Problem Description ##

Problem 01: Array Challange

Have the function ``` ArrayChallenge(strArr) ``` read the array of string stored in ```strArr```, which will contain 2 elements: the first element will be  a sequence of characters representing a word, and the second element will be a long string of comma-separated words, in alphabetic order, that represents a dictionary of some arbitrary length. For example ```strArr``` can be [‘worlcde’, ‘apple, bat, cat, goodbye, hello, yellow, why, world’]. Your goal is to determine the minimum number of characters, if any can be removed from the word so that it matches one of the word from the dictionary. In this case, your program should be return 2 because once you remove the character c and e you are left with ‘world’ and that exists in the dictionary. If the word cannot be found no matter what characters are removed, return -1. 
<br>
<h3> Example: </h3>

```
Input: [‘baseball’, ‘a,all,b,ball,bas,base,cat,code,d,e,quit,z]
Output: 4
```

```
Input: [‘apbpleeeef’, ‘a,ab,abc,abcg,b,c,dog,e,efd,zzzz’]
Output: 8
```

<h3>Js base code: </h3>

```
function ArrayChallenge(strArr){
  return strArr;
}
console.log(ArrayChallenge(readline));
```

