<?php

function rotateArr($arr,$k){
    $n = count($arr);
    $k = $k%$n;
    reverseArr($arr, 0, $n-1);
    reverseArr($arr,0,$n-$k-1);
    reverseArr($arr,$n-$k, $n-1);
    
    return $arr;
}

function reverseArr(&$arr, $low, $high){
    while($low<$high){
        $temp = $arr[$low];
        $arr[$low] = $arr[$high];
        $arr[$high] = $temp;
        $low++;
        $high--;
    }
}


$arr = [1,2,3,4,5];
$k = 2;
$result = rotateArr($arr, $k);
print_r($result);
?>