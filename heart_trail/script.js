document.addEventListener("mousemove", function(event) {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.className = "heart";
    document.body.appendChild(heart);

    // Random size (10px to 40px)
    let size = Math.random() * 30 + 10;
    heart.style.fontSize = `${size}px`;

    // Random color selection
    let colors = ["#ff0000", "#ff66b2", "#ff9900", "#ff33cc", "#ff0066"];
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];

    // Set heart position
    heart.style.left = `${event.clientX}px`;
    heart.style.top = `${event.clientY}px`;

    // Set random floating direction
    heart.style.setProperty("--dir", Math.random());

    // Remove after 1s
    setTimeout(() => {
        heart.remove();
    }, 1000);
});
heart.style.animation += ", rotate 1s linear";
