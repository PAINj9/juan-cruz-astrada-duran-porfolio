document.addEventListener('DOMContentLoaded', function() {
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
        }, 10);

        currentIndex = (currentIndex + 1) % textArray.length;
    }

    setInterval(changeText, 2500);
});
