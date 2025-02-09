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
    });