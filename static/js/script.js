let currentNumber = '0';
let previousNumber = null;
let operator = null;
let waitingForNewNumber = false;

// DOM elements
const resultElement = document.getElementById('result');

// Calculator functions
function appendNumber(number) {
    if (waitingForNewNumber) {
        currentNumber = number;
        waitingForNewNumber = false;
    } else {
        currentNumber = currentNumber === '0' ? number : currentNumber + number;
    }
    updateDisplay();
    console.log('Number pressed:', number, 'Current number:', currentNumber);
}

function appendDecimal() {
    if (waitingForNewNumber) {
        currentNumber = '0.';
        waitingForNewNumber = false;
    } else if (currentNumber.indexOf('.') === -1) {
        currentNumber += '.';
    }
    updateDisplay();
}

function appendOperator(nextOperator) {
    const inputValue = parseFloat(currentNumber);
    
    if (previousNumber === null) {
        previousNumber = inputValue;
    } else if (operator) {
        const currentValue = previousNumber || 0;
        const newValue = performCalculation(currentValue, inputValue, operator);
        
        currentNumber = String(newValue);
        previousNumber = newValue;
    }
    
    waitingForNewNumber = true;
    operator = nextOperator;
    updateDisplay();
}

function performCalculation(firstNumber, secondNumber, operator) {
    switch (operator) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        case '/':
            return secondNumber !== 0 ? firstNumber / secondNumber : 0;
        default:
            return secondNumber;
    }
}

function clearAll() {
    currentNumber = '0';
    previousNumber = null;
    operator = null;
    waitingForNewNumber = false;
    updateDisplay();
    console.log('Clear all pressed');
}

function toggleSign() {
    if (currentNumber !== '0') {
        currentNumber = currentNumber.charAt(0) === '-' ? 
            currentNumber.slice(1) : '-' + currentNumber;
        updateDisplay();
        console.log('Toggle sign pressed, current number:', currentNumber);
    }
}

function percentage() {
    if (currentNumber !== '0') {
        currentNumber = String(parseFloat(currentNumber) / 100);
        updateDisplay();
        console.log('Percentage pressed, current number:', currentNumber);
    }
}

function updateDisplay() {
    resultElement.textContent = formatNumber(currentNumber);
}

function formatNumber(num) {
    if (num === '0' || num === '') return '0';
    
    const number = parseFloat(num);
    if (isNaN(number)) return '0';
    
    // Handle very large or very small numbers
    if (Math.abs(number) >= 1e15 || (Math.abs(number) < 1e-10 && number !== 0)) {
        return number.toExponential(6);
    }
    
    // Format with commas for large numbers
    if (Math.abs(number) >= 1000) {
        return number.toLocaleString();
    }
    
    // Remove trailing zeros for decimals
    return number.toString();
}

function calculate() {
    if (operator && previousNumber !== null) {
        const inputValue = parseFloat(currentNumber);
        const newValue = performCalculation(previousNumber, inputValue, operator);
        
        currentNumber = String(newValue);
        previousNumber = null;
        operator = null;
        waitingForNewNumber = true;
        updateDisplay();
    }
}

// Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    // Prevent default for calculator keys
    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', '='].includes(key)) {
        event.preventDefault();
    }
    
    if (key >= '0' && key <= '9') {
        appendNumber(key);
    } else if (key === '.') {
        appendDecimal();
    } else if (key === '+') {
        appendOperator('+');
    } else if (key === '-') {
        appendOperator('-');
    } else if (key === '*') {
        appendOperator('*');
    } else if (key === '/') {
        appendOperator('/');
    } else if (key === '=' || key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearAll();
    } else if (key === 'Backspace') {
        if (currentNumber.length > 1) {
            currentNumber = currentNumber.slice(0, -1);
        } else {
            currentNumber = '0';
        }
        updateDisplay();
    }
});

// Initialize the calculator
document.addEventListener('DOMContentLoaded', () => {
    updateDisplay();
    
    // Add click animations
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    });
});
