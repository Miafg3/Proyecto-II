const canvas = document.getElementById("network");
const ctx = canvas.getContext("2d");

let particles = [];

const mouse = {
    x: null,
    y: null,
    radius: 180,
};

function resize() {
    const dpr = window.devicePixelRatio || 1;

    canvas.width = innerWidth * dpr;
    canvas.height = innerHeight * dpr;
    canvas.style.width = `${innerWidth}px`;
    canvas.style.height = `${innerHeight}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

resize();

window.addEventListener("resize", () => {
    resize();
    createParticles();
});

window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

window.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
});

class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * innerWidth;
        this.y = Math.random() * innerHeight;

        this.vx = (Math.random() - 0.5) * 0.25;
        this.vy = (Math.random() - 0.5) * 0.25;

        this.size = Math.random() * 1.5 + 1;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x <= 0 || this.x >= innerWidth) {
            this.vx *= -1;
        }

        if (this.y <= 0 || this.y >= innerHeight) {
            this.vy *= -1;
        }

        if (mouse.x !== null) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.hypot(dx, dy);

            if (distance < mouse.radius) {
                const force = (mouse.radius - distance) / mouse.radius;

                this.x -= dx * force * 0.01;
                this.y -= dy * force * 0.01;
            }
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "#ff3b3b";
        ctx.fill();
    }
}

function createParticles() {
    particles = [];

    const amount = innerWidth < 768 ? 60 : 110;

    for (let i = 0; i < amount; i++) {
        particles.push(new Particle());
    }
}

createParticles();

function connectParticles() {
  const maxDistance = 150;
    for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
            const dx = particles[a].x - particles[b].x;
            const dy = particles[a].y - particles[b].y;
            const distance = Math.hypot(dx, dy);

            if (distance < maxDistance) {
                const opacity = 1 - distance / maxDistance;

                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.strokeStyle = `rgba(255, 59, 59, ${opacity * 0.25})`;

                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    particles.forEach((particle) => {
        particle.update();
        particle.draw();
    });

    connectParticles();
    requestAnimationFrame(animate);
}

animate();
