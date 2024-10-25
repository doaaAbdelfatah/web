let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showNextSlide() {
    // Hide the current slide
    slides[currentSlide].classList.remove('active');
    
    // Calculate the next slide index
    currentSlide = (currentSlide + 1) % totalSlides;

    // Show the next slide
    const offset = currentSlide * -100; // Translate by percentage
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;

    slides[currentSlide].classList.add('active');
}

// Automatically move to the next slide every 5 seconds
setInterval(showNextSlide, 5000);
