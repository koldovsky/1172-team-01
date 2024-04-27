function updateClock() {
    const clockContainer = document.querySelector('.header__clock');
    
    const clockElement = document.createElement('div');
    clockElement.innerText = new Date().toLocaleTimeString('uk');
    clockContainer.innerHTML = '';


    clockContainer.appendChild(clockElement);

    clockElement.addEventListener('mouseenter', function() {
        clockElement.innerText = "Don't touch";
    });

    clockElement.addEventListener('mouseleave', function() {
        clockElement.innerText = new Date().toLocaleTimeString('uk');
    });
}

setInterval(updateClock, 1000);

