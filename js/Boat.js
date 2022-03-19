class Boat {
  constructor(x, y, width, height, boatPos, matrizdanimacaodobarco) {
  
    this.animacao = matrizdanimacaodobarco;
    this.speed = 0.05;
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;

    this.boatPosition = boatPos;

    this.quebrado=false;
  
    World.add(world, this.body);


  }
  animate() {
    this.speed = this.speed+ 0.05;
  }

  remove(index) {
  this.animacao = matrixdobarcoquebradios;
  this.quebrado=true;
  this.speed = 0.05;
  this.width = 300;
  this.height = 300;
  setTimeout(() => { Matter.World.remove(world, boats[index].body);
  delete boats[index]; }, 2000); }


  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    var index = floor(this.speed % this.animacao.length);

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.animacao[index], 0, this.boatPosition, this.width, this.height);
    pop();
  }
}