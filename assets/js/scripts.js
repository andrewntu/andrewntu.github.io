let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

// Auto slide functionality (optional)
setInterval(() => {
    moveSlide(1);
}, 5000); // Change slide every 5 seconds

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
