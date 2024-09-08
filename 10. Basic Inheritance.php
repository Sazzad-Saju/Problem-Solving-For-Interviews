<?php

class Person{
    public $fname, $lname, $age;
    public function __construct($fname, $lname, $age){
        $this->fname = $fname;
        $this->lname = $lname;
        $this->age = $age;
    }
    public function info(){
        echo "\nName: {$this->fname} {$this->lname}\n";
        echo "Age: {$this->age}";
    }
}

class Student extends Person{
    public $dept, $sid;
    
    public function __construct($fname, $lname, $age, $dept, $sid)
    {
        parent::__construct($fname, $lname, $age);
        $this->dept = $dept;
        $this->sid = $sid;
    }
    
    public function profile(){
        parent::info();
        echo "\nDepartment: {$this->dept}";
        echo "\nId: {$this->sid}";
    }
}

$p1 = new Person('Shanta', 'Jannat', 25);
$p1->info();
echo "\n***";
$s1 = new Student('Sazzad', 'Saju', 29, 'CSE', 1602049);
$s1->profile();
?>