document.addEventListener('DOMContentLoaded', () => {
    const reactHeader = document.getElementById('react-header');
    reactHeader.classList.add('react-header');

    const reactCode = `
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

    
    const htmlCode = `
<div>
    <p>You clicked <span id="count">0</span> times</p>
    <button onclick="document.getElementById('count').innerText = 
        parseInt(document.getElementById('count').innerText) + 1">
        Click me
    </button>
</div>`;

    
    const reactCodeBlock = document.getElementById('react-code');
    const htmlCodeBlock = document.getElementById('html-code');

    if (reactCodeBlock) {
        reactCodeBlock.textContent = reactCode;
    } else {
        console.error("Element with ID 'react-code' not found.");
    }

    if (htmlCodeBlock) {
        htmlCodeBlock.textContent = htmlCode;
    } else {
        console.error("Element with ID 'html-code' not found.");
    }

    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents page refresh

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();

        if (name === "" || email === "") {
            alert("⚠️ Please enter your name and email before submitting the quiz.");
            return;
        }

        // Correct answers
        const correctAnswers = {
            question1: "library",
            question2: "component-based",
            question3: "hooks",
            question4: "all"
        };

        let score = 0;
        let totalQuestions = Object.keys(correctAnswers).length;

        Object.keys(correctAnswers).forEach(question => {
            const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
            
            if (selectedOption) {
                if (selectedOption.value === correctAnswers[question]) {
                    score++; 
                }
            }
        });

        alert(` ${name}, you scored ${score} out of ${totalQuestions}!`);
    });

    const companies = document.querySelectorAll(".companies-list li");

    companies.forEach(company => {
        company.addEventListener("mouseenter", () => {
            company.style.transform = "scale(1.05)";
            company.style.transition = "transform 0.3s ease-in-out";
        });

        company.addEventListener("mouseleave", () => {
            company.style.transform = "scale(1)";
        });


        company.addEventListener("click", () => {
            const url = company.getAttribute("data-url");
            if (url) {
                window.open(url, "_blank"); 
            }
        });

        company.style.cursor = "pointer"; 
    });

    const button = document.querySelector("button");

    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });
});
