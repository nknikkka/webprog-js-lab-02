function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;

    if (confirm(`Відвантаження у ${country} коштуватиме  ${totalPrice} доларів. Підтвердити?`)) {
        alert(`Відвантаження у ${country} коштуватиме  ${totalPrice} доларів.`);
        document.getElementById('output').innerHTML += `Відвантаження в ${country}, ${totalPrice} доларів.<br>`;
    }
}

getShippingMessage("Australia", 120, 50);
getShippingMessage("Germany", 80, 20);
getShippingMessage("Sweden", 100, 20); 
