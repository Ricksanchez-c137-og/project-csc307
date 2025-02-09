document.addEventListener("DOMContentLoaded", () => {
    const reactHeader = document.getElementById("react-header");
    reactHeader?.classList.add("react-header");
  
    const reactCodeSample = `
  import React, { useState } from 'react';
  
  function Counter() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  }
  `;
    const htmlCodeSample = `
  <div>
    <p>You clicked <span id="count">0</span> times</p>
    <button onclick="document.getElementById('count').innerText++">Click me</button>
  </div>
  `;
  
    document.getElementById("react-code").textContent = reactCodeSample.trim();
    document.getElementById("html-code").textContent = htmlCodeSample.trim();
  
    const form = document.querySelector("form");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
  
      if (!name || !email) {
        alert("Please enter your name and email before submitting the quiz.");
        return;
      }
  
      const correctAnswers = {
        question1: "library",
        question2: "component-based",
        question3: "hooks",
        question4: "all",
      };
  
      let score = 0;
      for (const question in correctAnswers) {
        const selected = document.querySelector(
          `input[name="${question}"]:checked`
        );
        if (selected?.value === correctAnswers[question]) {
          score++;
        }
      }
      alert(`${name}, you scored ${score} out of 4!`);
    });
  
    const companies = document.querySelectorAll(".companies-list li");
    companies.forEach((company) => {
      company.style.cursor = "pointer";
      company.style.transform = "scale(0.95)";
      company.style.transition = "transform 0.2s ease";
  
      company.addEventListener("mouseenter", () => {
        company.style.transform = "scale(1)";
      });
      company.addEventListener("mouseleave", () => {
        company.style.transform = "scale(0.95)";
      });
      company.addEventListener("click", () => {
        const url = company.getAttribute("data-url");
        if (url) window.open(url, "_blank");
      });
    });
  
    document.querySelectorAll("button").forEach((btn) => {
      btn.style.transition = "transform 0.15s ease";
      btn.addEventListener("mouseover", () => (btn.style.transform = "scale(1.05)"));
      btn.addEventListener("mouseleave", () => (btn.style.transform = "scale(1)"));
    });
  });
  