document.getElementById('randomWordButton').addEventListener('click', function() {
    const words = [
 "Pikachu", "Surfer", "Eiffel Tower", "Sphinx", "Black Hole", 
        "Vincent van Gogh", "Sailboat", "Dragon", "Shakespeare", "Hamburger", 
        "Windsurfer", "Rainforest", "Smartphone", "Kaleidoscope", "Northern Lights",
        "Taj Mahal", "Piano", "Saturn", "DNA Helix", "Zombie"
    ];
    let availableWords = sessionStorage.getItem('availableWords') ? JSON.parse(sessionStorage.getItem('availableWords')) : words.slice();
    let usedWords = sessionStorage.getItem('usedWords') ? JSON.parse(sessionStorage.getItem('usedWords')) : [];

    if (document.getElementById('toggleRepeat').checked && availableWords.length === 0) {
        sessionStorage.removeItem('availableWords');
        sessionStorage.removeItem('usedWords');
        availableWords = words.slice();
        usedWords = [];
    }

    if (availableWords.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableWords.length);
        const randomWord = availableWords[randomIndex];
        document.getElementById('displayWord').textContent = randomWord;

        if (document.getElementById('toggleRepeat').checked) {
            usedWords.push(randomWord);
            availableWords.splice(randomIndex, 1);
            sessionStorage.setItem('availableWords', JSON.stringify(availableWords));
            sessionStorage.setItem('usedWords', JSON.stringify(usedWords));
        }
    } else {
        document.getElementById('displayWord').textContent = "No more unique words!";
    }
});
