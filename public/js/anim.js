window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

var keyword = "ABOUT";

var canvas = document.getElementById("particles");
var ctx = canvas.getContext("2d");

var bgCanvas;
var bgctx;

/*var W = window.innerWidth,
    H = window.innerHeight;*/
var W = 500,
    H = 500;
canvas.width = W;
canvas.height = H;

//anim txt
bgCanvas = document.createElement('canvas');
bgctx = bgCanvas.getContext('2d');

bgCanvas.width = window.innerWidth;
bgCanvas.height = window.innerHeight;


bgctx.fillStyle = "#fff";
bgctx.font = '150px impact';
bgctx.fillText(keyword, 85, 275);

var particles = [],
    minDist = 70,
    dist;

var nbParticlesVisbles = 400;

var denseness = 3;

var itercount = 0;
var itertot = 20;


var tabCoordTarget = [];

var getCoords = function() {
    var imageData, pixel, height, width;

    imageData = bgctx.getImageData(0, 0, canvas.width, canvas.height);

    for (height = 0; height < bgCanvas.height; height += denseness) {
        for (width = 0; width < bgCanvas.width; width += denseness) {
            pixel = imageData.data[((width + (height * bgCanvas.width)) * 4) - 1];
            //Pixel is black from being drawn on. 
            if (pixel == 255) {
                tabCoordTarget.push({ x: width, y: height });
                particles.push(new Particle(width, height));
            }
        }
    }


}


function paintCanvas() {
    ctx.fillStyle = "rgba(255,255,255,1)";
    ctx.fillRect(0, 0, W, H);
}

function Particle(goalX, goalY) {

    this.x = Math.random() * W;
    this.y = Math.random() * H;

    this.color = 1;

    this.vx = (-1 + Math.random() * 1) / 5;
    this.vy = (-1 + Math.random() * 1) / 5;

    this.goalX = goalX;
    this.goalY = goalY;

    var velx = (this.goalX - this.x) / itertot;
    var vely = (this.goalY - this.y) / itertot;

    this.v = { x: velx, y: vely };

    this.r = true;

    this.radius = Math.random() * 2;

    this.draw = function() {
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

        ctx.fill();
    }
}

var timer = 0;

document.getElementById('btParticles').addEventListener("click", () => {
    timer = 1;
    particles = [];
    getCoords();
    draw2();
})

function draw2() {

    paintCanvas();

    for (var i = 0; i < particles.length; i++) {
        p = particles[i];
        p.draw();
    }

    updateTxt();
}

function draw() {

    paintCanvas();

    for (var i = 0; i < nbParticlesVisbles; i++) {
        p = particles[i];
        p.draw();
    }
    update();
}


var updateTxt = function() {
    itercount++;

    for (var i = 0; i < particles.length; i++) {
        p = particles[i];

        if (p.r == true) {
            p.x += p.v.x;
            p.y += p.v.y
        }

        if (itercount == itertot) {
            p.v = { x: (Math.random() * 6) * 2 - 6, y: (Math.random() * 6) * 2 - 6 };
            p.r = false;
        }

    }
}


function update() {

    for (var i = 0; i < 400; i++) {
        p = particles[i];

        p.x += p.vx;
        p.y += p.vy


        if (p.x + p.radius > W)
            p.x = p.radius;

        else if (p.x - p.radius < 0) {
            p.x = W - p.radius;
        }

        if (p.y + p.radius > H)
            p.y = p.radius;

        else if (p.y - p.radius < 0) {
            p.y = H - p.radius;
        }

        for (var j = i + 1; j < nbParticlesVisbles; j++) {
            p2 = particles[j];
            distance(p, p2);
        }
    }
}

function distance(p1, p2) {
    var dist,
        dx = p1.x - p2.x,
        dy = p1.y - p2.y;

    dist = Math.sqrt(dx * dx + dy * dy);

    if (dist <= minDist) {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(0,0,0," + (1.2 - dist / minDist) + ")";
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
        ctx.closePath();
    }
}

function animloop() {
    if (timer === 0) {
        draw();
    } else {
        draw2()
    }
    requestAnimFrame(animloop);
}

getCoords();
animloop();


// select the target node
var target = document.getElementById('sections');

// create an observer instance
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        console.log(mutation.type);
    });
});

// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true }

// pass in the target node, as well as the observer options
observer.observe(target, config);

// later, you can stop observing
observer.disconnect();