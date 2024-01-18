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

$word = "abccddeffaaab";
echo rmvDupli($word);

?>
