document.addEventListener('DOMContentLoaded', function() {
    Telegram.WebApp.ready();  // Signals that the web app is ready
    Telegram.WebApp.sendData("Hello World from the Mini App!");  // Sends data to the bot
});
