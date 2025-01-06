<?php

function backtrack($s,$open,$close,$n,&$res){
    if($open == $n && $close == $n){
        $res[] = $s;
        return;
    }
    if($open <$n){
        backtrack($s."(",$open+1,$close,$n,$res);
    }
    if($close < $open){
        backtrack($s.")",$open,$close+1,$n,$res);
    }
}

function generateParenthesis($n){
    $res = [];
    backtrack("",0,0,$n,$res);
    return $res;
}

$result = generateParenthesis(3);
print_r($result);
?>