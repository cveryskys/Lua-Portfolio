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
            document.body.style.backgroundColor = data.backgroundColor || "#1A1A1A";
            document.body.style.color = data.textColor || "#E5E5E5";
            document.body.style.fontFamily = data.fontFamily || "Helvetica, Arial, sans-serif";
            text.style.color = data.primaryColor || "#FFFFFF";
            text.style.opacity = 0;
            setTimeout(() => {
                text.style.transition = "opacity 1s ease-in-out";
                text.style.opacity = 1;
            }, 7000); // Delay to ensure loader finishes before text fades in
        })
        .catch(error => console.error("Error loading JSON:", error));

    window.addEventListener("mousemove", handleMouseMove);
});