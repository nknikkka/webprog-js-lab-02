function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;

    if (confirm(`Ви замовили ${quantity} дроїдів за ${totalPrice} кредитів. Підтвердити?`)) {
        alert(`Ви замовили ${quantity} дроїдів за ${totalPrice} кредитів!`);
        document.getElementById('output').innerHTML += `Замовлення: ${quantity} дроїдів за ${totalPrice} кредитів.<br>`;
    }
}

// Виклик функції для перевірки
makeTransaction(3, 1000);
makeTransaction(5, 3000);
makeTransaction(10, 500);
