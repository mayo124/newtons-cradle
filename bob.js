class bob{
constructor(x,y,r){
var options={
    restitution:1,
    friction:0,
    density:0.8
}


this.body=Bodies.circle(x,y,(r/2),options)
this.x=x;
this.y=y;
this.r=r;
World.add(world,this.body);

}
display(){

    var paperpos=this.body.position;
    push()
    translate(paperpos.x,paperpos.y);
    ellipseMode(CENTER);
    fill("pink");
    ellipse(0,0,this.r,this.r);
    pop();
}

}