<?php
class Node{
    public $item;
    public $next;
    public function __construct($item){
        $this->item = $item;
        $this->next = null;
    }
}

class LinedList{
    public $head;
    public function __construct()
    {
        $this->head = null;
    }
}
//create LL
$myList = new LinedList();
// Assign nodes to LL
$myList->head = new Node(1);
$second = new Node(2);
$third = new Node(3);
// Connecting nodes
$myList->head->next = $second;
$second->next = $third;
// traverse nodes
$current = $myList->head;
while($current != null){
    echo $current->item . " ";
    $current = $current->next;
}
?>