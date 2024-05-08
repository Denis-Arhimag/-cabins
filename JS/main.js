// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();


// Модальное окно
let btns = document.querySelectorAll('.call_to_action_button');
//  тут мы должны указать другой адрес кнопки 
let modalOverlay = document.querySelector('.modal-overlay');
let modals = document.querySelectorAll('.modal');

btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('modal--visible')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
    modalOverlay.classList.add('modal-overlay--visible')
  });
});


modalOverlay.addEventListener('click', (e) => {

  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('modal-overlay--visible')
    modals.forEach((el) => {
      el.classList.remove('modal--visible')
    });
  }
});

// само окно 
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault();
 
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
 
  // Здесь будет код для отправки данных на сервер
 
  alert('Сообщение отправлено!');
  this.reset();
});
// само окно 

// Модальное окно 