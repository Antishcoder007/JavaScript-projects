const messageElement = document.getElementById('message');
const changeMessageBtn = document.getElementById('changeMessageBtn');

const quotes = [
    "Welcome to the future!",
    "Dream big, work hard, stay focused.",
    "The best way to predict the future is to create it.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "The only limit to our realization of tomorrow is our doubts of today."
];

changeMessageBtn.addEventListener('click', () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    messageElement.textContent = randomQuote;
});