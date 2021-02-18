function gammafunc(v, c) {

  return 1 / (sqrt(1 - (v / c) ** 2))

}

const timeStep = 0.006

const gammaCutoff = 1000

class Engine {

  constructor(particleList, potential) {

    this.Time = 0
    this.Particles = particleList

    this.GravityPotential = potential

    this.c = 300

    this.G = 0.01

  }

  addParticle(particle) {

    this.Particles.push(particle)

  }

  getPotential(x, y) {


    return this.GravityPotential(x, y)

  }

  getPotentialGrad(position) {

    const stepsize = 0.001

    const ddx = (this.getPotential(position.x + stepsize, position.y) - this.getPotential(position.x - stepsize, position.y)) / (2 * stepsize)

    const ddy = (this.getPotential(position.x, position.y + stepsize) - this.getPotential(position.x, position.y - stepsize)) / (2 * stepsize)

    return createVector(ddx, ddy)

  }

  update(deltaT) {
    var displacement

    for (var currentTime = 0; currentTime < deltaT; currentTime += timeStep) {

      for (var particle of this.Particles) {

        var v = particle.Velocity
        var a = particle.Acceleration

        var gamma = gammafunc(v.mag(), this.c)

        displacement = createVector(v.x * timeStep + a.x * 0.5 * timeStep ** 2, v.y * timeStep + a.y * 0.5 * timeStep ** 2)


        if (gamma < gammaCutoff) {

          particle.Acceleration = this.getPotentialGrad( (particle.Position).copy() ).mult(-1 / (gamma))


        } else {

          particle.Acceleration = createVector(0, 0)

        }

        particle.Velocity.add(createVector(a.x * timeStep, a.y * timeStep))

        particle.Position.add(displacement)

        particle.Shade = 255 * (v.mag() / this.c)

      }

      this.Time += timeStep

    }


  }
}