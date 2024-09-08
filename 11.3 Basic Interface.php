<?php

interface addition{
    function add($a, $b);
}

interface subtraction{
    function sub($a, $b);
}

class Arithmetic implements addition, subtraction{
    public function add($a, $b){
        echo $a + $b;
    }
    public function sub($a, $b){
        echo $a - $b;
    }
}

$arith1 = new Arithmetic();
$arith1->add(35,25);
echo "\n";
$arith1->sub(35,25);

?>