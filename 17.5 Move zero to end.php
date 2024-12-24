<?php

function moveZeroToEnd($arr){
    $temp = [];
    $zeroCount=0;
    foreach($arr as $element){
        if($element == 0){
            $zeroCount++; 
        }else{
            $temp[] = $element;
        }
    }
    for($i=0;$i<$zeroCount;$i++){
        $temp[] = 0;
    }
    
    return $temp;
}

$arr= [0, 1, 0, 2, 9, 3, 0, 2];
$result = moveZeroToEnd($arr);
print_r($result);

?>