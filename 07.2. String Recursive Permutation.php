<?php
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

$myStr = "abc";
print_r(getPermutation($myStr));
?>