document.addEventListener('DOMContentLoaded', function() {
    const greetings = [
        "Bonjour",
        "Moin",
        "Ciao",
    ];

    let currentIndex = 0;
    const greetingElement = document.getElementById('greeting');

    function changeGreeting() {
        greetingElement.textContent = greetings[currentIndex];
        currentIndex = (currentIndex + 1) % greetings.length;
    }

    setInterval(changeGreeting, 3000); // Ändert den Text alle 3 Sekunden
});