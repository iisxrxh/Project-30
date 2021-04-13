class Block{
  constructor(x, y, width, height) {
    this.image = loadImage("block.png");
      var options = {
          restitution :0.4,
          friction :0.0,
         
      }
      super(x,y,height, width);
      this.width = width;
      this.height = height;
      this.Visibility = 225;

      World.add(world, this.body);
    }
    display(){
      console.log(this.body.speed)
      if(this.body.speed>3){
       display(Block)
      }
     else{
        World.remove(world, this.body)
        push()
        this.Visibility -=5
        tint(255,this.Visibility)
        image(this.image,this.body.position.x, this.body.position.y, this.height, this.width)
        pop()
      }
    }
}
