const canvas = document.getElementById("network");
const ctx = canvas.getContext("2d");

let particles = [];

const mouse = {
    x: null,
    y: null,
    radius: 150,
};

function resize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}

resize();

window.addEventListener("resize", () => {
    resize();
    createParticles();
});

window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
});

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;

        this.size = 2;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) {
            this.vx *= -1;
        }

        if (this.y < 0 || this.y > canvas.height) {
            this.vy *= -1;
        }

        if (mouse.x) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;

            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouse.radius) {
                this.x -= dx * 0.003;
                this.y -= dy * 0.003;
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

    const amount = window.innerWidth < 768 ? 70 : 130;

    for (let i = 0; i < amount; i++) {
        particles.push(new Particle());
    }
}

createParticles();

function connectParticles() {
    for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
                
            const dx = particles[a].x - particles[b].x;
            const dy = particles[a].y - particles[b].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
                const opacity = 1 - distance / 150;

                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.strokeStyle = `rgba(255,0,0,${opacity * 0.5})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
        p.update();
        p.draw();
    });

    connectParticles();
    requestAnimationFrame(animate);
}

animate();