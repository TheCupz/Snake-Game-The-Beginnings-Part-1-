class Snake{
    constructor(){
        this.x = 0
        this.y = 0
        this.xSpeed = 0
        this.ySpeed = 0
    }
    show() {
        fill(255);
        rect(this.x,this.y,20,20);
    }
    dir(x,y) {
        this.xSpeed = x;
        this.ySpeed = y;
    }
    update() {
        this.x = this.x+this.xSpeed;
        this.y = this.y+this.ySpeed;
    }
}