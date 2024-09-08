class Parrot{
    canFly(){
        console.log("parrot can fly")
    }
    canSwim(){
        console.log("parrot cann't swim")
    }
}

class Penguin{
    canFly(){
        console.log("penguin can't fly")
    }
    canSwim(){
        console.log("penguin can swim")
    }
}

//common Interface
function testBird(bird){
    bird.canSwim()
    bird.canFly()
}

const myParrot = new Parrot();
testBird(myParrot)
const wildPengu = new Penguin();
testBird(wildPengu)