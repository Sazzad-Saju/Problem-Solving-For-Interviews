<?php
function rmvDupli($word){
    $temp = "";
    foreach(str_split($word) as $char){
        // must use strict equality check (===) in here
        if(strpos($temp, $char) === false){
            $temp .= $char;
        }
    }
    
    return $temp;
}

//optimal
// function rmvDupli($word){
//     $seen = [];
//     $result = "";
//     foreach(str_split($word) as $char){
//         if(!isset($seen[$char])){
//             $seen[$char] = true;
//             $result .= $char;
//         }
//     }
    
//     return $result;
// }

$word = "abccddeffaaab";
echo rmvDupli($word);

?>
