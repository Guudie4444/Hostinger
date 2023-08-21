const container = document.querySelector('.h-carousel-track__cards-container');
const cards = container.querySelectorAll('.h-carousel-card');
let currentIndex = 0;

function slideToIndex(index) {
    const cardWidth = cards[0].offsetWidth + 10; // Width + margin
    container.style.transform = `translateX(-${index * cardWidth}px)`;
    currentIndex = index;
}

// Example: Slide to the next card
function nextSlide() {
    if (currentIndex < cards.length - 1) {
        slideToIndex(currentIndex + 1);
    }
}

// Example: Slide to the previous card
function prevSlide() {
    if (currentIndex > 0) {
        slideToIndex(currentIndex - 1);
    }
}