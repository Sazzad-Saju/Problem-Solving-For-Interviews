<?php

abstract class parentClass{
    protected $testVar;
    abstract protected function add($a, $b);
}

class childClass extends parentClass{
    public function add($a, $b){
        echo $a+$b;
    }
}

$c1 = new childClass();
$c1->add(14,17);

?>