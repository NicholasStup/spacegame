document.addEventListener('DOMContentLoaded', () => {
    const consoleDiv = document.getElementById('console');
    const inputField = document.getElementById('input');

    inputField.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const userInput = inputField.value;
            processInput(userInput);
            inputField.value = '';
        }
    });
});

function processInput(input) {
    // Convert input to lowercase for non-case sensitive comparison
    input = input.toLowerCase();

    // Example processing logic
    let output;
    if (input === 'start game') {
        output = 'Game started! Enter your move:';
    } else if (input === 'move left') {
        output = 'You moved left.';
    } else if (input === 'move right') {
        output = 'You moved right.';
    } else if (input === 'fox') {
        output = 'You encountered a fox!';
    } else {
        output = `Unknown command: ${input}`;
    }
    appendToConsole(`> ${input}`);
    appendToConsole(output);
}

function appendToConsole(text) {
    const consoleDiv = document.getElementById('console'); // Ensure consoleDiv is defined
    const newLine = document.createElement('div');
    newLine.textContent = text;
    consoleDiv.appendChild(newLine);
    consoleDiv.scrollTop = consoleDiv.scrollHeight; // Auto-scroll to the bottom
}
