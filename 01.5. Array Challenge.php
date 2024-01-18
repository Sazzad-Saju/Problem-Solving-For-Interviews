<?php

function getMinCount($w1, $w2){
    $i=0; $j=0; $count=0;
    while($i< strlen($w1) && $j<strlen($w2)){
        if($w1[$i] !== $w2[$j]){
            $i++;
            $count++;
        }else{
            $i++;
            $j++;
        }
    }
    $count += strlen($w1) - $i;
    // echo "val: {$count}\n";
    return $count;
}

function ArrayChallenge($strArr){
    list($targetWord, $dictionary) = $strArr;
    $words = explode(",", $dictionary);
    $minCount = PHP_INT_MAX;
    foreach($words as $word){
        $rmvCount = getMinCount($targetWord, $word);
        $minCount = min($minCount, $rmvCount);
    }
    return $minCount === strlen($targetWord) ? -1 : $minCount;
}

$result = ArrayChallenge(['baseball', 'a,all,b,ball,base,cat,code,d,e,efd,zzzz']);
echo("\n");
echo $result;
?>