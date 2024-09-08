<?php

class Parrot{
    public function canFly(){
        echo "Parrot can fly\n";
    }
    public function canSwim(){
        echo "Parrot can't swim\n";
    }
}

class Penguin {
    public function canFly(){
        echo "Penguin can't fly\n";
    }
    public function canSwim(){
        echo "Penguin can swim\n";
    }
}

// common interface
function testBird($bird){
    $bird->canFly();
    $bird->canSwim();
}

$myParr = new Parrot();
testBird($myParr);
$wildPengu = new Penguin();
testBird($wildPengu);

?>