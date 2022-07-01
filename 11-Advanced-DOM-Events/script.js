'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////////

//SELECTING ELEMENTS
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector('.header');
// console.log(document.querySelectorAll("section"));
// console.log(document.getElementById("section--1"));
// console.log(document.getElementsByTagName("button"));
// console.log(document.getElementsByClassName("btn"));

//////////////////////////////////////////
// Creating and inserting elements
// .insertAdjacentHTML

const msg = document.createElement('div');
msg.classList.add('cookie-message');
msg.textContent = 'We use cookied for improved functionality and analytics';
msg.innerHTML =
  'We use cookied for improved functionality and analytics <button class="btn btn--close-cookie">Got it!!</button>';

header.prepend(msg); //first child
// header.append(msg); //last child .. only insert at once
// header.append(msg.cloneNode(true)); //copy .. insert many times

// header.before(msg);
// header.after(msg);

//////////////////////////////////////////
// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // msg.remove();
    msg.parentElement.removeChild(msg);
  });

//////////////////////////////////////////
// Styles
msg.style.backgroundColor = '#37384d';
msg.style.width = '130%';
msg.style.margin = '12px';

console.log(msg.style.color);
console.log(msg.style.backgroundColor); //INLINE STYLE

console.log(getComputedStyle(msg).color);
console.log(getComputedStyle(msg).height);

msg.style.height = '60px';
