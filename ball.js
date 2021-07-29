
class Ball{
    constructor(x,y,r){

        var options = {
            restitution : 0.0
        }
        this.image = loadImage("ball.svg")
        this.body = Bodies.circle(x,y,r,options)
        this.r = r
        World.add(world,this.body)
    }
    show(){
    var pos = this.body.position
    var angle = this.body.angle
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    ellipseMode(RADIUS)
    fill("white")
    //image(this.image,0,0,this.r,this.r)
    ellipse(0,0,this.r, this.r)
    pop()
    }
}