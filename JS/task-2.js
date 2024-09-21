function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;

    if (confirm(`Доставка в ${country} коштує ${totalPrice} кредитів. Підтвердити?`)) {
        alert(`Доставка в ${country} коштує ${totalPrice} кредитів.`);
        document.getElementById('output').innerHTML += `Доставка в ${country}: ${totalPrice} кредитів.<br>`;
    }
}

// Виклик функції для перевірки
getShippingMessage("Australia", 120, 50);
