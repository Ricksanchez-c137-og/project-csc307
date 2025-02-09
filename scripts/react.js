document.addEventListener('DOMContentLoaded', () => {
    
    const reactHeader = document.getElementById('react-header');
    reactHeader?.classList.add('react-header');

    
    document.getElementById('react-code').textContent = `
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}`;
    
    document.getElementById('html-code').textContent = `
<div>
    <p>You clicked <span id="count">0</span> times</p>
    <button onclick="document.getElementById('count').innerText++">Click me</button>
</div>`;

    const form = document.querySelector("form");
    form?.addEventListener("submit", (e) => {
        e.preventDefault(); 

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();

        if (!name || !email) {
            alert("⚠️ Please enter your name and email before submitting the quiz.");
            return;
        }

        
        const correctAnswers = {
            question1: "library",
            question2: "component-based",
            question3: "hooks",
            question4: "all"
        };

        let score = 0;

        for (let question in correctAnswers) {
            const selected = document.querySelector(`input[name="${question}"]:checked`);
            if (selected?.value === correctAnswers[question]) {
                score++;
            }
        }

        alert(`${name}, you scored ${score} out of 4!`);
    });

    const companies = document.querySelectorAll(".companies-list li");

    companies.forEach(company => {
        company.style.cursor = "pointer";

        company.addEventListener("mouseenter", () => company.style.transform = "scale(1.05)");
        company.addEventListener("mouseleave", () => company.style.transform = "scale(1)");
        
        company.addEventListener("click", () => {
            const url = company.getAttribute("data-url");
            if (url) window.open(url, "_blank");
        });
    });

    const button = document.querySelector("button");
    button?.addEventListener("mouseover", () => button.style.transform = "scale(1.05)");
    button?.addEventListener("mouseleave", () => button.style.transform = "scale(1)");
});
