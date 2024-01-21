<?php

function countOfOne($code, $low, $high){
    $count = 0;
    for($i=$low; $i<$high; $i++){
        if($code[$i] == '1'){
            $count++;
        }
    }
    return $count;
}

function countOfZero($code, $low, $high){
    $count = 0;
    for($i=$low; $i<$high; $i++){
        if($code[$i] == '0'){
            $count++;
        }
    }
    return $count;
}

function isBeauty($code){
    $code = strval($code);
    for($i=1; $i<strlen($code); $i++){
        $left0=0; $left1=1; $right0=0; $right1=1;
        if($code[$i] == '0'){
            $left0 = countOfZero($code, 0, $i);
            $right1 = countOfOne($code, $i+1, strlen($code));
            $left1 = countOfOne($code, 0, $i);
            $right0 = countOfZero($code, $i+1, strlen($code));
            
            if(($left0!= 0 && $right1 != 0) && $left0 == $right1){
                return true;
            }
            else if(($left1!= 0 && $right0 != 0) && $left1 == $right0){
                return true;
            }
        }
    }
    return false;  //echo false print nothing
}

$code = 1011010001;
$result = isBeauty($code);
if($result){
    echo "{$code}: code is Beauty\n";
}else{
    echo "{$code}: code is not Beauty\n";
}

$code = 10001011100;
$result = isBeauty($code);
if($result){
    echo "{$code}: code is Beauty\n";
}else{
    echo "{$code}: code is not Beauty\n";
}

$code = 10001011000;
$result = isBeauty($code);
if($result){
    echo "{$code}: code is Beauty\n";
}else{
    echo "{$code}: code is not Beauty\n";
}

?>