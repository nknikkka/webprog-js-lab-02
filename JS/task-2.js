function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}

const country = "Australia";
const price = 120;
const deliveryFee = 50;
const message = getShippingMessage(country, price, deliveryFee);

if (confirm("Чи хочете ви побачити результат?")) {
    alert(message);
}
