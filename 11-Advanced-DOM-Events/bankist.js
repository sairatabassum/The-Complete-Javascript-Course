'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  //  The Element.getBoundingClientRect() method returns a DOMRect object providing
  //   information about the size of an element and its position relative to the viewport.
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //Scrolling
  //   window.scrollTo(
  //     s1coords.left + window.pageXOffset,
  //     s1coords.top + window.pageYOffset
  //   ); //Current position + current scroll

  //   Old way
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });

  //   Modern way
  section1.scrollIntoView({ behavior: 'smooth' });
  // The Element interface's scrollIntoView() method scrolls the element's parent container such that the element on which scrollIntoView() is called is visible to the user.
});

// const h1 = document.querySelector('h1');
// const alertH1 = function (e) {
//   alert('hahahjka');
//   // h1.removeEventListener('mouseenter', alertH1);
// };
// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

//   h1.onmouseenter = function (e) {
//     alert('jdhsj');
//   };

//   mouseenter is little bit like hover effect in CSS

// rgb(255,255,255)

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min); //12-16

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  //   console.log('LINK', e.target, e.currentTarget);

  //   STOP PROPAGATION
  //   e.stopPropagation();
}); //Bubbling

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  //   console.log('Container', e.target, e.currentTarget);
}); //Bubbling

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    // console.log('Nav', e.target, e.currentTarget);
  },
  true
); //Capturing

//////////////////////////////////////
// Page navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');

//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//////////////////////////////////
// Event delegation
// 1. add the event listener to a common parent element
// 2. Determine what element orginated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  e.preventDefault();

  //   Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');

    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

/////////////////////////////////
// DOM Traversing

const h1 = document.querySelector('h1');

// Going Downwards: child

// Direct children
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going Upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

// but querySelector, finds children,

// no matter how deep in the Dom tree,

// while the closest method finds parents

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});

/////////////////////////
// Tabbed Component
const btn_tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  //   guard clause
  if (!clicked) return;

  //   Active tab
  btn_tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  //   Active tab content
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
