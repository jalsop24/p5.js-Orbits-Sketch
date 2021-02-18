class Particle {
  constructor(position, mass, charge, velocity, acceleration){
    
    this.Position = position
    this.Mass = mass
    this.Charge = charge
    this.Velocity = velocity
    this.Acceleration = acceleration
    this.Shade = 0
    
  }
  
  draw(){
   
    push()
    
    stroke(255)
    fill(this.Shade)
    ellipseMode(CENTER)
    ellipse(this.Position.x, this.Position.y, 10, 10)
    
    //console.log(this.Shade)
    
    pop()
    
  }
  
}