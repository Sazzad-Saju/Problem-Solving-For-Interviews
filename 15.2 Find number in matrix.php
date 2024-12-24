<?php 


function findInMatrix($matrix, $target){
    foreach($matrix as $rowIndex => $row){
        $low = 0;
        $high = count($row)-1;
        while($low <= $high){
            $mid = intval(($low+$high)/2);
            if($row[$mid] == $target){
                return ['row: ', $rowIndex, 'column: ', $mid];
            }else if($row[$mid] < $target){
                $low = $mid+1;
            }else{
                $high = $mid-1;
            }
        }
    }
    return null;
}



$matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 0],
    [4, 5, 6, 7, 10]
];

$target = 10;

$result = findInMatrix($matrix, $target);

print_r($result);


?>