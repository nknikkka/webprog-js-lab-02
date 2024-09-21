function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

const quantity = 5;
const pricePerDroid = 3000;
const message = makeTransaction(quantity, pricePerDroid);

if (confirm("Чи хочете ви побачити результат?")) {
    alert(message);
}
