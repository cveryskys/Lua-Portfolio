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
            document.body.style.backgroundColor = data.backgroundColor || "#ffffff";
            document.body.style.color = data.textColor || "#333";
            document.body.style.fontFamily = data.fontFamily || "Poppins, sans-serif";
            text.style.color = data.primaryColor || "#6a11cb";
        })
        .catch(error => console.error("Error loading JSON:", error));

    window.addEventListener("mousemove", handleMouseMove);
});
