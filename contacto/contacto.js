const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        showMessage("Por favor, completa todos los campos.", "error");
        return;
    }

    showMessage(
        `¡Gracias, ${name}! Tu mensaje ha sido enviado correctamente.`,
        "success",
    );

    contactForm.reset();
});

function showMessage(text, type) {
    const existingMessage = document.querySelector(".form-message");

    if (existingMessage) {
        existingMessage.remove();
    }

    const message = document.createElement("p");

    message.classList.add("form-message", `form-message-${type}`);
    message.textContent = text;

    contactForm.appendChild(message);

    setTimeout(() => {
        message.remove();
    }, 5000);
}