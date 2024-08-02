


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
