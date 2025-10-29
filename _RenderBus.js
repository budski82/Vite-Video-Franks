    const canvas  = document.getElementById('cvs')
    const ctx     = canvas.getContext('2d')
    canvas.width  = 500
    canvas.height = 500
    ctx.imageSmoothingEnabled = true
    const clear = ()=> ctx.clearRect(0,0,canvas.width,canvas.height)
    
    // Grid overlay
    const drawGrid = (spacing = 50, color = 'hsla(0 10% 0% / 0.1') =>{
        ctx.save()
        ctx.strokeStyle = color
        ctx.lineWidth = 1

    // vert-lines
    for(let x = 0; x <= canvas.width; x += spacing){
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
    }
    // hori-lines
     for(let y = 0; y <= canvas.height; y += spacing){
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.height, y)
        ctx.stroke()
    }
        ctx.restore();
}

    export { canvas, ctx, clear, drawGrid }
