function getElementWidth(content, padding, border) {
    const contentWidth = parseFloat(content) || 0;
    const paddingWidth = (parseFloat(padding) || 0) * 2; // Для обох сторін
    const borderWidth = (parseFloat(border) || 0) * 2; // Для обох сторін
    return contentWidth + paddingWidth + borderWidth;
}

// Виведення результатів на сторінку
outputDiv.innerHTML += getElementWidth("50px", "8px", "4px") + "<br>";
outputDiv.innerHTML += getElementWidth("60px", "12px", "8.5px") + "<br>";
outputDiv.innerHTML += getElementWidth("200px", "0px", "0px") + "<br>";
