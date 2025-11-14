const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.radius = 2;
    this.color = color;
    this.speed = Math.random() * 5 + 2;
    this.angle = Math.random() * 2 * Math.PI;
    this.vx = Math.cos(this.angle) * this.speed;
    this.vy = Math.sin(this.angle) * this.speed;
    this.alpha = 1;
    this.decay = Math.random() * 0.02 + 0.01;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= this.decay;
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
  }
}

function createFireworks(x, y) {
<<<<<<< Updated upstream
  const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff", "#ffffff"];
=======
  const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff", "#ffa500", "#008000","#09316eff", "#ff1493", "#00bfff"];
>>>>>>> Stashed changes
  let color = colors[Math.floor(Math.random() * colors.length)];
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle(x, y, color));
  }
}

function animate() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, index) => {
    if (p.alpha <= 0) {
      particles.splice(index, 1);
    } else {
      p.update();
      p.draw();
    }
  });

  requestAnimationFrame(animate);
}

animate();

canvas.addEventListener("click", (e) => {
  createFireworks(e.clientX, e.clientY);
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});