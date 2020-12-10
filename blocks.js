class Block{
    constructor(x,y){
        var op = {
            isStatic : false,
            restitution:1,
            density:1,
            friction:0.5
        }
        this.body = Bodies.rectangle(x,y,50,60)
        World.add(world,this.body)
        this.width = 50
        this.height = 60

    }
    display(){
        var pos = this.body.position
        push()
        
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}