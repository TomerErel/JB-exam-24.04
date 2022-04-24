function drawRect() {
    const myCanvas = document.querySelector("#myCanvas");
    const painter = myCanvas.getContext("2d");

    const width = document.querySelector('#widthInput');
    const widthValue = +width.value
    const height = document.querySelector('#heightInput');
    const heightValue = +height.value
    const x = document.querySelector('#xInput');
    const xValue = +x.value
    const y = document.querySelector('#yInput');
    const yValue = +y.value

    const span = document.querySelector('#areaSpan')

    if (widthValue === '') {
        isEmptyInput(width);
    }
    if (heightValue === '') {
        isEmptyInput(height);
    }
    if (xValue === '') {
        isEmptyInput(x);
    }
    if (yValue === '') {
        isEmptyInput(y);
    }
    if ((widthValue + xValue) > 300) {
        alert('out of canvas border')
    }
    if ((heightValue + yValue) > 300) {
        alert('out of canvas border')
    } else {
        span.innerHTML = calcSize(widthValue, heightValue)
        localStorage.setItem('span', JSON.stringify(span.innerHTML));
        painter.beginPath();
        painter.strokeStyle = "blue";
        painter.strokeRect(widthValue, heightValue, xValue, yValue);
        painter.stroke();
        localStorage.setItem('x', xValue)
        localStorage.setItem('y', yValue)
        localStorage.setItem('height', heightValue)
        localStorage.setItem('width', widthValue);
    }
};

function calcSize(x, y, size) {
    size = x * y;
    return size;
}

function isEmptyInput(item) {
    if (item.value === '') {
        item.style.borderColor = 'red';
    }
}

function reset() {
    const myCanvas = document.querySelector("#myCanvas");
    const painter = myCanvas.getContext("2d");
    const span = document.querySelector('#areaSpan')

    span.innerHTML = ''
    painter.clearRect(0, 0, 300, 300);
    localStorage.clear()

}

function onWindowLoad() {
    const drawBtn = document.querySelector('#drawBtn')
    const resetBtn = document.querySelector('#resetBtn')

    drawBtn.onclick = drawRect;
    resetBtn.onclick = reset

    const width = document.querySelector('#widthInput');
    width.value = localStorage.getItem('width')
    const height = document.querySelector('#heightInput');
    height.value = localStorage.getItem('height')
    const x = document.querySelector('#xInput');
    x.value = localStorage.getItem('x')
    const y = document.querySelector('#yInput');
    y.value = localStorage.getItem('y')

    const span = document.querySelector('#areaSpan');
    span.innerHTML = JSON.parse(localStorage.getItem('span'))

    const myCanvas = document.querySelector("#myCanvas");
    const painter = myCanvas.getContext("2d");

    painter.beginPath();
    painter.strokeStyle = "blue";
    painter.strokeRect(width.value, height.value, x.value, y.value);
    painter.stroke();
}

window.onload = onWindowLoad;