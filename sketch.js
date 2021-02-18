

var particle
var engine 
var centre 

const scale = 5

function test(x){
 
  return exp(x)
  
}

function graviPotential(x, y){
  const wallPotential = 100
  
  if (x > 0 & x < width & y > 0 & y < height){
  
    const distance = sqrt( (x-width/2)**2 + (y - height/2)**2)
    
    return -scale/distance
    
    //return (height - y) * 0.001
    
  }else if(x <= 0){
     
    return -x * wallPotential
    
  }else if(x >= width){
    
    return (x - width) * wallPotential
    
  }else if(y <= 0){
     
    return -y * wallPotential
    
  }else if(y >= height){
    
    return (y - height) * wallPotential
    
  }
  
}

function setup() {
  createCanvas(400, 400);
  
  particle = new Particle( createVector(width/2,height/4), 1, 0, createVector(0.2,0), createVector(0,0))
  
  engine = new Engine( [particle], graviPotential )
  
  centre = createVector(width/2, height/2)
  
  frameRate(120)
  
  
 // console.log(integrator(test, 0, 1))
  
}


function draw() {
  background(220);
  
  particle.draw(100)
  
  ellipseMode(CENTER)
  ellipse(width/2, height/2, 5, 5)
  
  //print(particle.Velocity.mag() / engine.c)
  
 
  //print( 1/( sqrt( 1 - (particle.Velocity.mag()/engine.c)**2 )) )
  
  //print( gammafunc(particle.Velocity.mag(), engine.c) )
  
  engine.update(deltaTime)
}











