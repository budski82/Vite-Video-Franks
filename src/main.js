import {canvas,ctx,clear,drawGrid} from './_RenderBus.js'
import './javascripts/classes/_InputHandler.js'
import './javascripts/classes/_Projectile.js'
import './javascripts/classes/_Particle.js'
import  Player from './javascripts/classes/_Player.js'
import './javascripts/classes/_UI.js'
import './javascripts/classes/_Layer.js'
import './javascripts/classes/_Enemy.js'
import './javascripts/classes/_Background.js'
import './javascripts/utils/URI_about.js'

// Create Main.js - Game Object


class Game{
    constructor(width,height){
        this.width  = width
        this.height = height
        this.player = new Player(this) 
    }
    update(){
        this.player.update()
    }
    draw(){
        this.player.draw(ctx)
    }
}
const game = new Game(canvas.width, canvas.height)
// add animation loop
function animate(){
// ctx.clearRect(0,0,canvas.width,canvas.height) == ()=> clear()
    clear()
    drawGrid(50)
    game.update()
    game.draw(ctx)
    requestAnimationFrame(animate)
}
animate()


























console.log(12356);
