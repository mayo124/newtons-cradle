class rope{
constructor(body1,body2,offsetX,offsetY){
this.offsetX=offsetX
this.offsetY=offsetY
 var options={
 bodyA:body1,
 bodyB:body2,
 pointB:{x:this,offsetX,y:this.offsetY}
 
}
this.rope=Constraint.create(options)
world.add(world,this.rope)
}
display(){
var pointA=this.rope.bodyA.position
var pointB=this.rope.bodyB.position
strokeWeight(5);
var B2Y=pointB.y+this.offsetY
var B2X=pointB.x+this.offsetX

line(pointA.x,pointA.y,B2X,B2Y);
}
}