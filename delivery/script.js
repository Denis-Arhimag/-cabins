// Открытие формы
let button = document.querySelector('.button');
let form = document.querySelector('#form');

button.addEventListener('click', () => {
  form.classList.add('open');
  button.classList.add('open')
});


// закрытие окна в пустом пространстве

// let div = document.querySelector( '#blablabla');
 
// document.addEventListener( 'click', (e) => {
// 	let withinBoundaries = e.composedPath().includes(div);
 
// 	if ( ! withinBoundaries ) {
// 		div.style.display = 'none'; // скрываем элемент т к клик был за его пределами
// 	}
// })

// document.addEventListener('keydown', function(e) {
// 	if( e.keyCode == 27 ){ // код клавиши Escape, но можно использовать e.key
// 		div.style.display = 'none';
// 	}
// });