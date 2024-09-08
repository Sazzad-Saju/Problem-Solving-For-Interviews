<?php

class Car{
    public $name;
    public $year;
    
    public function __construct($name, $year){
        $this->name = $name;
        $this->year = $year;
    }
    
    public function age(){
        $currentYear = Date('Y');
        return $currentYear - $this->year;
    }
}

$myCar = new Car("Ford", 2014);
$age = $myCar->age();
echo "My car is {$age} years old";

?>