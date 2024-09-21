function getElementWidth(content, padding, border) {
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding) * 2; // Подвійний падінг
    const borderWidth = parseFloat(border) * 2; // Подвійний бордер

    const totalWidth = contentWidth + paddingWidth + borderWidth;

    if (confirm(`Загальна ширина елемента ${totalWidth}px. Підтвердити?`)) {
        alert(`Загальна ширина елемента ${totalWidth}px.`);
        document.getElementById('output').innerHTML += `Ширина елемента ${totalWidth}px.<br>`;
    }
}

getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");
