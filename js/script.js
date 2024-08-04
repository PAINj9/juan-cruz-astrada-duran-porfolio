


    // Rotating Text
    const rotatingText = document.querySelector('.rotating-text');
    if (rotatingText) {
        const textArray = [
            'Frontend Developer',
            'Backend Developer',
            'Video Editor',
            'Graphic Designer'
        ];
        let currentIndex = 0;

        function changeText() {
            const currentText = rotatingText.querySelector('.current');
            const nextText = document.createElement('span');
            nextText.className = 'next';
            nextText.textContent = textArray[currentIndex];
            rotatingText.appendChild(nextText);

            setTimeout(() => {
                if (currentText) {
                    currentText.classList.remove('current');
                    rotatingText.removeChild(currentText);
                }
                nextText.classList.remove('next');
                nextText.classList.add('current');
            }, 1000); // Tiempo de transición de texto

            currentIndex = (currentIndex + 1) % textArray.length;
        }

        setInterval(changeText, 2500); // Intervalo de cambio de texto
    }

    let currentSlide = 0;

function showSlide(index) {
    const carousel = document.getElementById('carousel');
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

showSlide(currentSlide);
