<?php

function fibonacchi($n){
    echo $n;
    echo "\n";
    if($n === 0) return 0;
    if($n === 1) return 1;
    return fibonacchi($n-2) + fibonacchi($n-1);
}

$terms = 6;
$result = fibonacchi($terms);
echo $result;
?>