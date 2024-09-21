console.log("task-1.js is running");

function getElementWidth(content, padding, border) {
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding) * 2;
    const borderWidth = parseFloat(border) * 2;
    return contentWidth + paddingWidth + borderWidth;
}

const content = "50px";
const padding = "8px";
const border = "4px";
const width = getElementWidth(content, padding, border);

if (confirm("Чи хочете ви побачити результат?")) {
    alert(width);
}
