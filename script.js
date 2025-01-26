function clearDisplay() {
    document.getElementById('display').textContent = '0';
}

function appendNumber(number) {
    let display = document.getElementById('display');
    if (display.textContent === '0') {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
}

function appendOperator(operator) {
    let display = document.getElementById('display');
    let lastChar = display.textContent.slice(-1);
    if ('+-*/'.includes(lastChar)) {
        display.textContent = display.textContent.slice(0, -1) + operator;
    } else {
        display.textContent += operator;
    }
}

function plusMinus() {
    let display = document.getElementById('display');
    display.textContent = parseFloat(display.textContent) * -1;
}

function percentage() {
    let display = document.getElementById('display');
    display.textContent = parseFloat(display.textContent) / 100;
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = 'Error';
    }
}
