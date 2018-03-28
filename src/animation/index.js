const TimerMixin = require('react-timer-mixin');
const React = require('react');

class AnimationCanvas extends React.Component {

    componentDidMount() {
        this.initCanvas();
        this.getCoords();
        this.animloop();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.transformCanvas === "about") {
            this.transformCanvas("ABOUT");
        } else if (nextProps.transformCanvas === "work") {
            this.transformCanvas("WORK");
        }
    }

    initCanvas() {

        this.canvas = this.refs.particles;
        this.ctx = this
            .refs
            .particles
            .getContext('2d');

        this.W = window.innerWidth;
        this.H = window.innerHeight;
        this.canvas.width = this.W;
        this.canvas.height = this.H;

        this.particles = [];
        this.minDist = 70;

        this.nbParticlesVisbles = 400;

        this.denseness = 3;
        this.itercount = 0;
        this.itertot = 20;
        this.timer = 0;

        this.initBgCanvas();

    }

    transformCanvas(keyword) {
        this.itercount = 0;
        this.initBgCanvas(keyword);
        this.timer = 1;
        this.particles = [];
        this.getCoords();
        this.draw2();
        TimerMixin.setTimeout(() => { //deconstitution du texte
            this.timer = 2;
            this.itercount = 0;
            this.returnDraw();
        }, 5000);
    }

    initBgCanvas(keyword = "test") {
        this.keyword = keyword;
        this.bgCanvas = document.createElement('canvas');
        this.bgctx = this
            .bgCanvas
            .getContext('2d');

        this.bgCanvas.width = window.innerWidth;
        this.bgCanvas.height = window.innerHeight;

        this.bgctx.fillStyle = "#fff";
        this.bgctx.font = '150px impact';
        this
            .bgctx
            .fillText(this.keyword, 85, window.innerHeight / 2);

    }

    getCoords() {
        var imageData,
            pixel,
            height,
            width;
        var tabCoordTarget = [];

        imageData = this
            .bgctx
            .getImageData(0, 0, this.canvas.width, this.canvas.height);

        for (height = 0; height < this.bgCanvas.height; height += this.denseness) {
            for (width = 0; width < this.bgCanvas.width; width += this.denseness) {
                pixel = imageData.data[((width + (height * this.bgCanvas.width)) * 4) - 1];
                //Pixel is black from being drawn on.
                if (pixel === 255) {
                    tabCoordTarget.push({x: width, y: height});
                    this
                        .particles
                        .push(new this.Particle(width, height, this));
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

    Particle(goalX, goalY, referenceThis) {

        let this2 = referenceThis;

        this.x = Math.random() * this2.W;
        this.y = Math.random() * this2.H;

        this.color = 1;

        this.vx = (-1 + Math.random() * 1) / 5;
        this.vy = (-1 + Math.random() * 1) / 5;

        this.goalX = goalX;
        this.goalY = goalY;

        var velx = (this.goalX - this.x) / this2.itertot;
        var vely = (this.goalY - this.y) / this2.itertot;

        this.v = {
            x: velx,
            y: vely
        };

        this.r = true;

        this.radius = Math.random() * 2;

        this.draw = () => {
            this2.ctx.fillStyle = "#000000";
            this2
                .ctx
                .beginPath();
            this2
                .ctx
                .arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

            this2
                .ctx
                .fill();
        }
    }

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

    returnDraw() {
        this.paintCanvas();

        for (var i = 0; i < this.nbParticlesVisbles; i++) {
            var p = this.particles[i];
            p.draw();
        }
        this.updateReturnTxt();
    }

    updateReturnTxt() {
        this.itercount++;

        for (var i = 0; i < this.particles.length; i++) {
            var p = this.particles[i];

            if (p.r === false) {
                p.x -= p.v.x;
                p.y -= p.v.y
            }

            if (p.x + p.radius > this.W) {
                p.x = p.radius;
            } else if (p.x - p.radius < 0) {
                p.x = this.W - p.radius;
            }

            if (p.y + p.radius > this.H) {
                p.y = p.radius;
            } else if (p.y - p.radius < 0) {
                p.y = this.H - p.radius;
            }

            if (this.itercount > 40) {
                for (var j = i + 1; j < this.nbParticlesVisbles; j++) {
                    var p2 = this.particles[j];
                    this.distance(p, p2);
                }
            }

            /*if (this.itercount === 150) {
                this.timer = 0;
                this.animloop();
            }*/

            /* if (this.itercount === this.itertot) {
                p.v = {
                    x: (Math.random() * 6) * 2 - 6,
                    y: (Math.random() * 6) * 2 - 6
                };
                p.r = true;
            }*/

        }
    }

    updateTxt() {
        this.itercount++;

        for (var i = 0; i < this.particles.length; i++) {
            var p = this.particles[i];

            if (p.r === true) {
                p.x += p.v.x;
                p.y += p.v.y
            }

            if (this.itercount === this.itertot) {
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

            if (p.x + p.radius > this.W) {
                p.x = p.radius;
            } else if (p.x - p.radius < 0) {
                p.x = this.W - p.radius;
            }

            if (p.y + p.radius > this.H) {
                p.y = p.radius;
            } else if (p.y - p.radius < 0) {
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
            this.ctx.strokeStyle = "rgba(100,100,100," + (1.2 - this.dist / this.minDist) + ")";
            this.ctx.lineWidth = 0.1;
            this
                .ctx
                .moveTo(p1.x, p1.y);
            this
                .ctx
                .lineTo(p2.x, p2.y);
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
        } else if (this.timer === 1) {
            this.draw2()
        } else if (this.timer === 2) {
            this.returnDraw()
        }

        TimerMixin.requestAnimationFrame(() => {
            this.animloop();
        });
    }

    render() {
        return (
            <canvas
                data-transformcanvas={this.props.transformCanvas}
                ref="particles"
                id="particles"
                width="500"
                height="500"></canvas>
        );
    }
};

export default AnimationCanvas;