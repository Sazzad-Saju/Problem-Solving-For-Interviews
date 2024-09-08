<?php

class ComplexNumber{
    public $real;
    public $imaginary;
    public function __construct($real, $imaginary){
        $this->real = $real;
        $this->imaginary = $imaginary;
    }
    public function add($other){
        $realSum = $this->real + $other->real;
        $imgSum = $this->imaginary + $other->imaginary;
        return new ComplexNumber($realSum, $imgSum);
    }
}

$c1 = new ComplexNumber(3,5);
$c2 = new ComplexNumber(4,7);
$result = $c1->add($c2);
echo "({$c1->real} + {$c1->imaginary}i) + ({$c2->real} + {$c2->imaginary}i) = {$result->real} + {$result->imaginary}i"
?>