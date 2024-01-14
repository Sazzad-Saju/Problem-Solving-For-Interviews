<?php
function RecursionChallenge($n){
    if($n<1) return;
    if($n<2) return 1;
    return $n * RecursionChallenge($n-1);
}

$output = RecursionChallenge(4);
$token = 'wfbcuzs12';
$finalOutput = RecursionChallenge(4) . $token;

$characters = str_split($finalOutput);
for($i=2; $i<count($characters); $i+= 3){
    $characters[$i] = 'X';
}
$finalOutput = implode('', $characters);

echo $output;
echo "\n";
echo $finalOutput;


?>