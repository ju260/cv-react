const React = require('react');

class AnimationCanvas extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.initCanvas();
        this.getCoords();
        this.animloop();
    }

    requestAnimFrame() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    };

    initCanvas() {

        var keyword = "ABOUT";
        // var canvas = document.getElementById("particles");
        this.canvas = this.refs.particles;
        this.ctx = this
            .refs
            .particles
            .getContext('2d');

        this.bgCanvas;
        this.bgctx;

        /*var W = window.innerWidth,
    H = window.innerHeight;*/
        this.W = 500,
        this.H = 500;
        this.canvas.width = this.W;
        this.canvas.height = this.H;

        //anim txt
        this.bgCanvas = document.createElement('canvas');
        this.bgctx = this.bgCanvas.getContext('2d');

        this.bgCanvas.width = window.innerWidth;
        this.bgCanvas.height = window.innerHeight;

        this.bgctx.fillStyle = "#fff";
        this.bgctx.font = '150px impact';
        this.bgctx.fillText(keyword, 85, 275);

        this.particles = [],
        this.minDist = 70,
        this.dist;

        this.nbParticlesVisbles = 400;

        this.denseness = 3;

        this.itercount = 0;
        this.itertot = 20;
        this.timer = 0;

       

    }

     getCoords () {
            var imageData,
                pixel,
                height,
                width;
                var tabCoordTarget = [];

            imageData = this.bgctx.getImageData(0, 0, this.canvas.width, this.canvas.height);

            for (height = 0; height < this.bgCanvas.height; height += this.denseness) {
                for (width = 0; width < this.bgCanvas.width; width += this.denseness) {
                    pixel = imageData.data[((width + (height * this.bgCanvas.width)) * 4) - 1];
                    //Pixel is black from being drawn on.
                    if (pixel == 255) {
                        tabCoordTarget.push({x: width, y: height});
                        this
                            .particles
                            .push(new this.Particle(width, height));
                    }
                }
            }
        }

    paintCanvas() {

        this.ctx.fillStyle = "rgba(255,255,255,1)";
        this
            .ctx
            .fillRect(0, 0, this.W, this.H);
    }

    Particle(goalX, goalY) {

        this.x = Math.random() * this.W;
        this.y = Math.random() * this.H;

        this.color = 1;

        this.vx = (-1 + Math.random() * 1) / 5;
        this.vy = (-1 + Math.random() * 1) / 5;

        this.goalX = goalX;
        this.goalY = goalY;

        var velx = (this.goalX - this.x) / this.itertot;
        var vely = (this.goalY - this.y) / this.itertot;

        this.v = {
            x: velx,
            y: vely
        };

        this.r = true;

        this.radius = Math.random() * 2;

        this.draw = function () {
            this.ctx.fillStyle = "black";
            this
                .ctx
                .beginPath();
            this
                .ctx
                .arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

            this
                .ctx
                .fill();
        }
    }

    /*document.getElementById('btParticles').addEventListener("click", () => {
    timer = 1;
    particles = [];
    getCoords();
    draw2();
})*/

    draw2() {

        this.paintCanvas();

        for (var i = 0; i < this.particles.length; i++) {
            var p = this.particles[i];
            p.draw();
        }

        this.updateTxt();
    }

    draw() {

        this.paintCanvas();

        for (var i = 0; i < this.nbParticlesVisbles; i++) {
            var p = this.particles[i];
            p.draw();
        }
        this.update();
    }

    updateTxt = () => {
        this.itercount++;

        for (var i = 0; i < this.particles.length; i++) {
            var p = this.particles[i];

            if (p.r == true) {
                p.x += p.v.x;
                p.y += p.v.y
            }

            if (this.itercount == this.itertot) {
                p.v = {
                    x: (Math.random() * 6) * 2 - 6,
                    y: (Math.random() * 6) * 2 - 6
                };
                p.r = false;
            }

        }
    }

    update() {

        for (var i = 0; i < 400; i++) {
            var p = this.particles[i];

            p.x += p.vx;
            p.y += p.vy

            if (p.x + p.radius > this.W) 
                p.x = p.radius;
            
else if (p.x - p.radius < 0) {
                p.x = this.W - p.radius;
            }

            if (p.y + p.radius > this.H) 
                p.y = p.radius;
            
else if (p.y - p.radius < 0) {
                p.y = this.H - p.radius;
            }

            for (var j = i + 1; j < this.nbParticlesVisbles; j++) {
                var p2 = this.particles[j];
                this.distance(p, p2);
            }
        }
    }

    distance(p1, p2) {
        var dist,
            dx = p1.x - p2.x,
            dy = p1.y - p2.y;

        dist = Math.sqrt(dx * dx + dy * dy);

        if (dist <= this.minDist) {
            this
                .ctx
                .beginPath();
            this.ctx.strokeStyle = "rgba(0,0,0," + (1.2 - this.dist / this.minDist) + ")";
            this
                .ctx
                .moveTo(p1.x, p1.y);
            this
                .ctx
                .stroke();
            this
                .ctx
                .closePath();
        }
    }

    animloop() {
        if (this.timer === 0) {
            this.draw();
        } else {
            this.draw2()
        }
        this.requestAnimFrame(this.animloop);
    }

    render() {
        return (
            <canvas ref="particles" id="particles" width="500" height="500"></canvas>
        );
    }
};

export default AnimationCanvas;