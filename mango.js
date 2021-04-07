class Mango {
    constructor(x, y, radius) {
      var options = {
          isStatic: true,
          'restitution':0,
          'friction':1,
         }
         
      this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
      this.image = loadImage("sprites/mango.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ;
      push();
      translate(pos.x, pos.y);
      
      imageMode(CENTER);

     // fill("pink");
        image(this.image, 0, 0, 40,30);
      pop();
    }
  };
  