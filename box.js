class Box{
  constructor(x, y, width, height, angle) {
      var options = {
        isStatic: false,
        'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("box.png");
      World.add(world, this.body);
      this.visibility = 255;
    }
    display(){

      if (this.body.speed<3){
   
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    
      }
    
      else{
       
       push();
       this.visibility = this.visibility - 5;
       
       tint(255,this.visibility);
       image(this.image,this.body.position.x,this.body.position.y,50,50);
       World.remove(world,this.body);
       pop();
      }

      /*var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();*/
    }

score(){
  if ((this.visibility<0) &&(this.visibility>-30)) { 
  score = score + 1;
}

//if (this.visiblity<0 && this.visiblity> - 405){

//score = score + 1;
//return score;

//}

}

}
