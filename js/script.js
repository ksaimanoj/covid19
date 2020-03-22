var ctx = initalize_context();
simulate(ctx);

function simulate(ctx) { // draw
    draw_circle(ctx, 100, 100, 5, '#000000');
}

function initalize_context() {
    var canvas = document.getElementById('myCanvas');
    return canvas.getContext("2d");
}

function draw_circle(ctx, x, y, r, colour) {
    ctx.fillStyle = colour;
    ctx.beginPath();
	ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = '#000000';
}