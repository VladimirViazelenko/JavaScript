const $text = createNode('h2', 'События');
const $block = createNode('div', '', {
    background: '#C5CAE9',
    width: '400px',
    height: '400px'
});
const $coordinatesInside = createNode('div', getCoordinatesString(), );
const $coordinatesBlock = createNode('div', getCoordinatesString(), );

document.body.append($text, $coordinatesInside, $block, $coordinatesBlock);
document.addEventListener("mousemove", function ({valueX, valueY}) {
    $coordinatesInside.innerHTML = getCoordinatesString(valueX, valueY, );
});
$block.addEventListener("mousemove", function ({valueX, valueY}) {
    const x = valueX - this.offsetLeft;
    const y = valueY - this.offsetTop;
    $coordinatesBlock.innerHTML = getCoordinatesString(x, y);
});

function getCoordinatesString(x = 0, y = 0) {
    return " Координаты x: " + x + ", y: " + y;
}

function createNode(nodeType, innerText, styles) {
    const newNode = document.createElement(nodeType);
    newNode.innerHTML = innerText;
    if (styles && typeof styles === "object") {
        for (const key in styles) {
            newNode.style[key] = styles[key];
        }
    }
    return newNode;
}