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
}
`;

  const jsCode = `
let count = 0;

function updateCount() {
  count++;
  document.getElementById('count-display').innerText = "You clicked " + count + " times";
}

document.body.innerHTML = '<p id="count-display">You clicked 0 times</p><button onclick="updateCount()">Click me</button>';
`;

  const jsxCodeEl = document.getElementById('jsx-code');
  const jsCodeEl = document.getElementById('javascript-code');

  if (jsxCodeEl) {
    jsxCodeEl.textContent = jsxCode.trim();
    addCopyButton(jsxCodeEl);
  }
  if (jsCodeEl) {
    jsCodeEl.textContent = jsCode.trim();
    addCopyButton(jsCodeEl);
  }

function addCopyButton(codeEl) {
  const btn = document.createElement('button');
  btn.className = 'copy-button';
  btn.textContent = 'Copy';
  btn.addEventListener('click', () => {
    navigator.clipboard.writeText(codeEl.textContent)
      .then(() => {
        btn.textContent = 'Copied!';
        setTimeout(() => (btn.textContent = 'Copy'), 1500);
      })
      .catch(err => console.error('Copy failed:', err));
  });
  codeEl.parentNode.insertBefore(btn, codeEl);
}
});
