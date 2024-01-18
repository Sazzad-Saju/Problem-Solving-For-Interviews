<?php

function checkParen($myStr){
    $stack = [];
    for($i=0; $i<strlen($myStr); $i++){
        $paren = $myStr[$i];
        if($paren == "(" || $paren == "{" || $paren == "["){
            $stack[] = $paren;
        }else{
            if(!count($stack) && ($paren == ")" || $paren == "}" || $paren == "]")){
                echo $myStr . " invalid\n";
                return;
            }else{
                $top = end($stack);
                if($top == "(" && $paren == ")" || $top=="{" && $paren=="}" || $top=="[" && $paren=="]"){
                    array_pop($stack);
                }else if($paren== "(" || $paren == "{" || $paren == "["){
                    $stack[] = $paren;
                }
            }
        }
    }
    if(!count($stack)){
        echo $myStr . " valid\n";
    }else{
        echo $myStr . " invalid\n";
    }
}


checkParen("([)]");
checkParen('(){()}');
checkParen('(x+y)+{y-z}');
checkParen('[a2/b2 - {c*(a+b)}/2] + {d*(b-c)}');
checkParen('{{}}()[()]');
checkParen('{][}');
checkParen(')');
?>