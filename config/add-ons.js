document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector(".animated-text");

    function handleMouseMove(event) {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const x = event.clientX;
        const y = event.clientY;

        const rotateY = ((x / width) * 40) - 20;
        const rotateX = ((y / height) * -40) + 20;

        requestAnimationFrame(() => {
            text.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
    }

    fetch("config/main.json")
        .then(response => response.json())
        .then(data => {
            document.body.style.backgroundColor = data.backgroundColor || "#F5F5F5";
            document.body.style.color = data.textColor || "#333333";
            document.body.style.fontFamily = data.fontFamily || "Helvetica, Arial, sans-serif";
            text.style.color = data.primaryColor || "#000000";
        })
        .catch(error => console.error("Error loading JSON:", error));

    window.addEventListener("mousemove", handleMouseMove);
});