import {ctx} from '../../_RenderBus.js'

export default  class Player {
    constructor(game){
        this.game    = game
        this.width   = 50 
        this.height  = 50
        this.x       = 20
        this.y       = 100
        this.speedY  = 0.9
    }
    update(){
        this.y += this.speedY

    }
    draw(ctx){
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    
}

//export {}