function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;

    if (confirm(`Ви замовили ${quantity} дроїдів за ${totalPrice} доларів. Підтвердити?`)) {
        alert(`Ви замовили ${quantity} дроїдів за ${totalPrice} доларів!`);
        document.getElementById('output').innerHTML += `Замовлено ${quantity} дроїдів за ${totalPrice} доларів.<br>`; }
}

makeTransaction(3, 1000);
makeTransaction(5, 3000);
makeTransaction(10, 500);
