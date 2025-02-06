document.addEventListener('DOMContentLoaded', () => {
    const jsxCode = `
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}`;

    const jsCode = `
let count = 0;

function updateCount() {
    count++;
    document.getElementById('count-display').innerText = "You clicked " + count + " times";
}

document.body.innerHTML = '<p id="count-display">You clicked 0 times</p><button onclick="updateCount()">Click me</button>';
`;

    document.getElementById('jsx-code').textContent = jsxCode;
    document.getElementById('javascript-code').textContent = jsCode;

    const elements = document.querySelectorAll("p, .why-use, .code-container");

    elements.forEach((element, index) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";

        setTimeout(() => {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }, 200 * index);
    });
});
