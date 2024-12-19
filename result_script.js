document.addEventListener('DOMContentLoaded', () => {
    // Simulate result - change "healthy" to "not-healthy" to test both scenarios
    const result = "healthy"; // Options: "healthy" or "not-healthy"

    const container = document.getElementById('result-container');
    const heading = document.getElementById('result-heading');
    const message = document.getElementById('result-message');

    if (result === "healthy") {
        container.classList.add('healthy');
        heading.textContent = "You are Healthy!";
        message.textContent = "Great news! Your heart is in good condition. Keep up the healthy lifestyle!";
    } else {
        container.classList.add('warning');
        heading.textContent = "Warning: Heart Disease Detected!";
        message.textContent = "Please consult a healthcare professional for further advice and treatment.";
    }
});
