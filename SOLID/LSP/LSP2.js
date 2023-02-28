class Bird {  
    fly(){
        //..
    }
}

class Eagle extends Bird {
    dive(){
        //..
    }
}

const eagle = new Eagle();
eagle.fly();
eagle.dive();

class Penguin extends Bird(){
   //Problem: Can't fly! 
}