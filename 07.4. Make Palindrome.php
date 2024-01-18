<?php

function makePalindrome($myStr){
    if($myStr == strrev($myStr)){
        return $myStr;
    }else{
        $permutations = getPermutation($myStr);
        foreach($permutations as $perms){
            $joinedPerms = join("", $perms);
            if($joinedPerms === strrev($joinedPerms)){
                return $joinedPerms;
            }
        }
        return null;
    }
}

function getPermutation($myStr){
    $result = [];
    function permute($arr, $current=[], &$result){
        if(count($arr) === 0){
            $result[] = $current;
        }else{
            for($i=0; $i<count($arr); $i++){
                $newArr = array_merge(array_slice($arr, 0, $i), array_slice($arr, $i+1));
                $newCurrent = array_merge($current, [$arr[$i]]);
                permute($newArr, $newCurrent, $result);
            }
        }
    }
    permute(str_split($myStr), [], $result);
    return $result;
}

$myStr = "abcab";
$result = makePalindrome($myStr);
if($result !== null){
    echo "myStr= '{$myStr}' is palindrome when myStr= '$result'";
}else{
    echo "myStr='{$myStr}' can not make into palindrome";
}
?>