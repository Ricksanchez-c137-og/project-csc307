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

    const elements = document.querySelectorAll("p, ol, .code-container");

    elements.forEach((element, index) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";

        setTimeout(() => {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }, 200 * index); 

    let count = 0;
    const animatedElements = document.querySelectorAll(".code-container");
    
    for (let i = 0; i < animatedElements.length; i++) {
        setTimeout(() => {
            animatedElements[i].style.transform = "scale(1.05)";
            animatedElements[i].style.transition = "transform 0.3s ease-in-out";
        }, 600 + i * 300);

        setTimeout(() => {
            animatedElements[i].style.transform = "scale(1)";
        }, 1200 + i * 300);
    }
})});
