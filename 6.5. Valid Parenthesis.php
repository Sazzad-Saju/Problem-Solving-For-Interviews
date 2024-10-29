<?php

// function checkParen($myStr){
//     $stack = [];
//     for($i=0; $i<strlen($myStr); $i++){
//         $paren = $myStr[$i];
//         if($paren == "(" || $paren == "{" || $paren == "["){
//             $stack[] = $paren;
//         }else{
//             if(!count($stack) && ($paren == ")" || $paren == "}" || $paren == "]")){
//                 return false;
//             }else{
//                 $top = end($stack);
//                 if($top == "(" && $paren == ")" || $top=="{" && $paren=="}" || $top=="[" && $paren=="]"){
//                     array_pop($stack);
//                 }else if($paren== "(" || $paren == "{" || $paren == "["){
//                     $stack[] = $paren;
//                 }
//             }
//         }
//     }
//     if(!count($stack)){
//         return true;
//     }else{
//         return false;
//     }
// }

//optimal
function checkParen($str){
    $stack = [];
    $parenMap = [
        "}" => "{",
        ")" => "(",
        "]" => "["
    ];
    for($i=0; $i<strlen($str); $i++){
        $char = $str[$i];
        if($char == "(" || $char == "{" || $char == "["){
            array_push($stack, $char);
        }else if($char == ")" || $char == "}" || $char == "]"){
            if(empty($stack) || array_pop($stack) !== $parenMap[$char]){
                return false;
            }
        }
    }
    return empty($stack);
}


$paren = "([)]";
$paren = '(){()}';
$paren = '(x+y)+{y-z}';
$paren = '[a2/b2 - {c*(a+b)}/2] + {d*(b-c)}';
$paren = '{{}}()[()]';
$paren = '{][}';
$paren = ')';
$result = checkParen($paren);
echo $result ? 'True' : 'False';
?>