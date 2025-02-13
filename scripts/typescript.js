document.addEventListener('DOMContentLoaded', () => {
    const tsHeader = document.getElementById('typescript-header');
    tsHeader.classList.add('typescript-header');

    const tsCode = `
function addNumbers(a: number, b: number): number {
    return a + b;
}

const sum = addNumbers(5, 10);
console.log(sum); // Output: 15

// For Loop in TypeScript
for (let i = 1; i <= 5; i++) {
    console.log(\`For Loop Iteration: \${i}\`);
}

// While Loop in TypeScript
let x: number = 1;
while (x <= 3) {
    console.log(\`While Loop Count: \${x}\`);
    x++;
}

// Do-While Loop in TypeScript
let y: number = 1;
do {
    console.log(\`Do-While Loop Count: \${y}\`);
    y++;
} while (y <= 3);
`;

    const jsCode = `
function addNumbers(a, b) {
    return a + b;
}

const sum = addNumbers(5, 10);
console.log(sum); // Output: 15

// For Loop in JavaScript
for (let i = 1; i <= 5; i++) {
    console.log(\`For Loop Iteration: \${i}\`);
}

// While Loop in JavaScript
let x = 1;
while (x <= 3) {
    console.log(\`While Loop Count: \${x}\`);
    x++;
}

// Do-While Loop in JavaScript
let y = 1;
do {
    console.log(\`Do-While Loop Count: \${y}\`);
    y++;
} while (y <= 3);
`;

    const tsCodeBlock = document.getElementById('typescript-code');
    const jsCodeBlock = document.getElementById('javascript-code');

    if (tsCodeBlock) {
        tsCodeBlock.textContent = tsCode;
    } else {
        console.error(" Element with ID 'typescript-code' not found.");
    }

    if (jsCodeBlock) {
        jsCodeBlock.textContent = jsCode;
    } else {
        console.error("Element with ID 'javascript-code' not found.");
    }


});
