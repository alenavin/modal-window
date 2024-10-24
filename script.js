'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnsOpen = document.querySelectorAll('.show-modal');

const closeModal = function () {
  modal.classList.add('hidden'); //закрыть модалку - вернуть класс hidden
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden'); // берем модальное окно, прочитывает ссписок его классов и удалям оттуда hidden
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpen.length; i++) {
  btnsOpen[i].addEventListener('click', openModal);
}

btnClose.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  // добавляется события нажатия любой кнопки на клаве
  console.log(event.key); // в параметр (эвент.key) сохранятеся значение кнопки
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
