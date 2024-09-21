function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}

// Виведення результатів на сторінку
outputDiv.innerHTML += getShippingMessage("Australia", 120, 50) + "<br>";
outputDiv.innerHTML += getShippingMessage("Germany", 80, 20) + "<br>";
outputDiv.innerHTML += getShippingMessage("Sweden", 100, 20) + "<br>";
