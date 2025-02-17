const text = document.querySelector('.animated-text');
let lastX = 0, lastY = 0, velX = 0, velY = 0;

function smoothMove(event) {
    const width = window.innerWidth, height = window.innerHeight;
    const x = (event.clientX / width) * 2 - 1;
    const y = (event.clientY / height) * 2 - 1;
    velX += (x * 20 - lastX) * 0.1;
    velY += (y * -20 - lastY) * 0.1;
    lastX += velX;
    lastY += velY;
    text.style.transform = `rotateX(${lastY}deg) rotateY(${lastX}deg)`;
    velX *= 0.9;
    velY *= 0.9;
}

window.addEventListener('mousemove', smoothMove);
