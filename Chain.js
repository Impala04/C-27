class Chain{
    constructor(bodyA,bodyB){
       var options= {
         bodyA:bodyA,
        bodyB:bodyB,
        length: 12,
        stiffness:0.4
       }
       this.chain=Constraint.create(options)
       World.add(world,this.chain)
    
    }
    displayShow(){
        line (this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
        
    }

}
