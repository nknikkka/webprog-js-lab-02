function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

// Виведення результатів на сторінку
const outputDiv = document.getElementById("output");
outputDiv.innerHTML += makeTransaction(5, 3000) + "<br>";
outputDiv.innerHTML += makeTransaction(3, 1000) + "<br>";
outputDiv.innerHTML += makeTransaction(10, 500) + "<br>";
