document.addEventListener('DOMContentLoaded', () => {
    const reactLogo = document.querySelector('img');

    reactLogo.addEventListener('mouseenter', () => {
        reactLogo.style.transition = 'transform 1s ease-in-out';
        reactLogo.style.transform = 'rotate(360deg)';
    });

    reactLogo.addEventListener('mouseleave', () => {
        reactLogo.style.transform = 'rotate(0deg)';
    });

    let direction = 1;
    let position = 0;

    setInterval(() => {
        if (position >= 20 || position <= 0) {
            direction *= -1; 
        }
        position += direction;
        reactLogo.style.transform = `translateY(${position}px)`;
    }, 50);
});
