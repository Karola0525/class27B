class Cannon{
constructor(x,y,width,height,angle){
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.angle=angle;
}

display(){


    if(keyIsDown(RIGHT_ARROW) && this.angle <0.35 ){
        this.angle+=0.02;
    }
    if(keyIsDown(LEFT_ARROW) && this.angle> -1.45 ){
        this.angle-=0.02;
    }



    fill ("#516F70");
    push ()
    translate(this.x,this.y);
    rotate(this.angle)
    rect(-10,-20,this.width,this.height);
    pop ()
    arc(this.x-10,this.y+100,150,200,PI,TWO_PI)
    noFill ();
}


}