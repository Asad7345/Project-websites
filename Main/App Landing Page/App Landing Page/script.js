let currentSlide = 1;

function showSlide(slideIndex) {
    const slides = document.getElementsByClassName("carousel-slide");
    
    // Wrap around the slide index if it goes out of bounds
    if (slideIndex > slides.length) {
        currentSlide = 1;
    }
    if (slideIndex < 1) {
        currentSlide = slides.length;
    }
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Show the current slide
    slides[currentSlide - 1].style.display = "block";
}

// Next slide
function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

// Previous slide
function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

// Initialize the first slide
showSlide(currentSlide);
