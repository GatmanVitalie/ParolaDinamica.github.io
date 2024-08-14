// Function to calculate trigonometric functions
function sumHexValues(inputString) {
    let sum = 0;

    for (let char of inputString) {
        // Get the character code of the character and convert it to hex
        const hexValue = char.charCodeAt(0).toString(16);
        // Convert hex to decimal and add to the sum
        sum += parseInt(hexValue, 16);
        sum = sum * 16;
    }
    sum = parseInt(sum, 10);
    sum = sum % 100000;
    sum = sum * sum * (9 * (sum % 1000 / 10000));
    sum = sum % 100000;
    return sum;
}

function givePasword() {
    var inputText = document.getElementById('intrare').value;
    const itisnici = ['Thompson', 'Turing', 'Neumann', 'Torvalds', 'Gates', 'Steve', 'Hamilton', 'Reinhardt', 'Wolfram', 'Lovelace'];
    const hex = parseInt(sumHexValues(inputText), 10);
    document.getElementById('Parola').textContent = (((hex % 2 == 0) ? Math.floor(hex % 100 / 10) : '') + itisnici[Math.floor(((hex % 1000) / 100))] + Math.floor(hex / 10));

}

// Add an event listener to the input element for keydown event
document.getElementById('intrare').addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        // Run your function when Enter key is pressed
        givePasword();
    }
});