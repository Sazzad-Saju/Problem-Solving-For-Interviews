<?php

function partition(&$data, $low, $high){
    $pivot = $data[$high];
    $i = $low-1;
    for($j=$low; $j<$high; $j++){
        if($data[$j]<= $pivot){
            $i++;
            [$data[$i], $data[$j]] = [$data[$j], $data[$i]];
        }
    }
    [$data[$i+1], $data[$high]] = [$data[$high], $data[$i+1]];
    return $i+1;
}

function quickSort(&$data, $low, $high){
    if($low<$high){
        $pos = partition($data, $low, $high);
        quickSort($data, $low, $pos-1);
        quickSort($data, $pos+1, $high);
    }
}

$data = [3,1,2,5,4];
echo "unsorted: ".implode(',', $data).PHP_EOL;
quickSort($data, 0, count($data)-1);
echo "sorted: ".implode(',', $data).PHP_EOL;

?>