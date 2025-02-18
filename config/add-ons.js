const text = document.querySelector('.animated-text');

function handleMouseMove(event) {
    const { innerWidth: width, innerHeight: height } = window;
    const { clientX: x, clientY: y } = event;
    const rotateY = ((x / width) * 40) - 20;
    const rotateX = ((y / height) * -40) + 20;
    text.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

fetch('config/main.json')
    .then(response => response.json())
    .then(data => {
        document.body.style.backgroundColor = data.backgroundColor;
        document.body.style.color = data.textColor;
        document.body.style.fontFamily = data.fontFamily;
        text.style.color = data.primaryColor;
    })
    .catch(error => console.error('Error loading JSON:', error));

window.addEventListener('mousemove', handleMouseMove);