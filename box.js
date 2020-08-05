class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle=this.body.angle;
    //Push captures new settings
    push();
    //translate changes 0 of the axis to given x and y position(remas position on canvas)
    translate(pos.x,pos.y);
    //rotates the body at an angle
    rotate(angle)
    rectMode(CENTER);
    fill(255);
    rect(0,0, this.width, this.height);
    //pop reverts the old settings
    pop();
  }
};
