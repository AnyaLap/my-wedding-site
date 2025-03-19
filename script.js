
//Музыка
const sound = document.getElementById("sound");
const soundButton = document.getElementById("soundButton");

async function playMusic() {
  try {
    await sound.play();
    sound.volume = 0.1;
    soundButton.classList.remove("off");
  } catch (err) {
    soundButton.classList.add("off");
  }
}
function handlePlayButton() {
  if (sound.paused) {
    playMusic();
  } else {
    sound.pause();
    soundButton.classList.add("off");
  }
}

sound.addEventListener("ended", function() {
  sound.currentTime = 0;
  playMusic();
});

soundButton.addEventListener("click", handlePlayButton, false);
playMusic();


// Отсчет времени до события
const eventDate = new Date("2025-06-14T00:00:00").getTime();

// Обновления отсчета каждую секунду
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    // Вычислить время в днях, часах, минутах и секундах
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Отобразить результаты
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Если событие наступило
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Событие уже произошло!";
    }
}, 1000);


//Форма
document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    // Собираем данные из формы
    var formData = new FormData(this);
    
    fetch('https://script.google.com/macros/s/AKfycbyjQva_-Tksqd1Wjxr0RQ2lascgjWRhuhk4jYEpEcItpj8IBydK88JWQh1p2gXFz0BZ/exec', {
        method: 'POST',
        body: formData, // Отправляем данные формы
    })
    .then(response => response.json())
    .then(data => {
        alert(data); // Показываем сообщение о результате отправки
        this.reset(); // Очищаем форму после отправки
    })
    .catch(error => console.error('Ошибка:', error));
});