document.addEventListener("DOMContentLoaded", () => {
    const frameworks = document.querySelectorAll(".framework");

    frameworks.forEach(framework => {
        framework.addEventListener("click", () => {
            const url = framework.getAttribute("data-url");
            if (url) {
                window.open(url, "_blank"); 
            }
        });

        
        framework.style.cursor = "pointer";
    });
});
