var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight = 300;
var score =0;


function setup() {
  createCanvas(800, 590);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=810; k = k + 100) {
    divisions.push(new Divisions(k, height-divisionHeight/2+45, 10, divisionHeight-90));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,45));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,125));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j<=width; j=j+50)
{
  plinkos.push(new Plinko(j,205));
}
  
  //create 4th row of plinko objects
  for (var j = 50; j<=width-10; j=j+50)
{
  plinkos.push(new Plinko(j,285));
}

  
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //create particle objects
  if (frameCount % 50 === 0){
    particles.push(new Particle(random(width/2-380, width/2+380), 10));
  }

  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
  for (var p = 0; p < particles.length; p++){
    particles[p].display();
  }

}