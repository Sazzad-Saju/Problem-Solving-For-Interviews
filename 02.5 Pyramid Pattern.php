<?php

function printPyramid($n){
    $pyramid = "";
    for($i=1; $i<=$n; $i++){
        for($j=1; $j<=$n-$i; $j++){
            $pyramid .= " ";
        }
        for($k=1; $k<=2*$i-1; $k++){
            $pyramid .= "*";
        }
        $pyramid .= "\n";
    }
    return $pyramid;
}

echo printPyramid(5);

?>