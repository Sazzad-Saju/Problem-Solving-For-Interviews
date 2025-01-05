<?php

function lettersCombination($digits){
    if(empty($digits)){
        return [];
    }
     $digitsToLetter = [
        "2" => "abc",
        "3" => "def",
        "4" => "ghi",
        "5" =>"jkl",
        "6"=> "mno",
        "7"=> "pqrs",
        "8"=> "tuv",
        "9"=> "wxyz",
    ];
    
    $res = [];
    
    function backtrack($ind, $comb,$digits, $digitsToLetter, &$res){
        if($ind == strlen($digits)){
            $res[] = $comb;
            return;
        }
        $letters = $digitsToLetter[$digits[$ind]];
        for($i=0; $i<strlen($letters); $i++){
            backtrack($ind+1, $comb . $letters[$i],$digits, $digitsToLetter, $res);
        }
    }
    
    backtrack(0,"",$digits, $digitsToLetter,$res);
    return $res;
    
}

$result = lettersCombination("23");
print_r($result);

?>