document.addEventListener('DOMContentLoaded', function () {
    const leftButton = document.querySelector('.carousel-control.left');
    const rightButton = document.querySelector('.carousel-control.right');
    const accordionButtons = document.querySelectorAll('.accordion-button');
    const cardsWrapper = document.querySelector('.carousel-wrapper');
    let currentIndex = 0; // текущий индекс для отслеживания позиции карусели

    // Функция для перемещения карусели влево
    function moveLeft() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }

    // Функция для перемещения карусели вправо
    function moveRight() {
        // Проверяем, чтобы индекс не выходил за пределы количества карточек (5 карточек, видимых 3, значит макс индекс 2)
        if (currentIndex < 2) {
            currentIndex++;
            updateCarousel();
        }
    }

    // Обновление позиции карусели
    function updateCarousel() {
        // Передвигаем карусель на 33.3333% влево на основе currentIndex
        cardsWrapper.style.transform = `translateX(-${currentIndex * 33.3333}%)`;
    }

    // Назначаем обработчики для кнопок перелистывания
    leftButton.addEventListener('click', moveLeft);
    rightButton.addEventListener('click', moveRight);

    // Назначаем обработчики для кнопок аккордеона
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const accordionContent = this.nextElementSibling;
            if (accordionContent.style.maxHeight) {
                accordionContent.style.maxHeight = null;
            } else {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            }
        });
    });

    // Автоматическое переключение слайдов каждые 3000 мс
    setInterval(moveRight, 3000);
});
