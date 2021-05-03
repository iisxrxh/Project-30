class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
         
      }
      this.body = Bodies.rectangle(x, y, width,height, options)
      this.image = loadImage("block.png");
      this.width = width;
      this.height = height;
      this.Visibility = 225;

      World.add(world, this.body);
    }
    display(){
      console.log(this.body.speed)
      if(this.body.speed<5){
        var angle = this.body.angle
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0, this.height, this.width)
        pop()
      }
     else{
        World.remove(world, this.body)
        push()
        this.Visibility -=5
       pop()
      }
    }
}
