class umbrella {
    constructor(x, y, r) {
      
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.5,
          isStatic : true
      }
      this.body = Bodies.circle(x, y, r/2 , options);
      this.radius = r
      this.animamation = loadAnimation("proc41images/waliking_1.png","proc41images/waliking_2.png"
      ,"proc41images/waliking_3.png","proc41images/waliking_4.png","proc41images/waliking_5.png"
      ,"proc41images/waliking_6.png","proc41images/waliking_7.png","proc41images/waliking_8.png");
      
      World.add(World, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y)
      ellipseMode(RADIUS);
      fill(255);
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };