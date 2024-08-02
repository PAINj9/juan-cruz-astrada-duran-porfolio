document.addEventListener('DOMContentLoaded', function() {
    // Rotating Text
    const rotatingText = document.querySelector('.rotating-text');
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
            currentText.classList.remove('current');
            nextText.classList.remove('next');
            nextText.classList.add('current');
            rotatingText.removeChild(currentText);
        }, 1000); // Cambiado a 1000 para que coincida con el intervalo de cambio de texto

        currentIndex = (currentIndex + 1) % textArray.length;
    }

    setInterval(changeText, 2500);

    // Fade-in Effect
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0,
        rootMargin: '0px 0px -100px 0px'
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
