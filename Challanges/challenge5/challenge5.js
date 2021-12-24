const openButton = document.querySelector('.show-modal');
const body = document.querySelector('body');

const modal = document.createElement('div');
modal.classList.add('modal');

const closeButton = document.createElement('span');
closeButton.classList.add('close-modal');
closeButton.innerHTML = '&times;';

const overlay = document.createElement('div');
overlay.classList.add('overlay');

const h1 = document.createElement('h1');
h1.innerHTML = 'Modal Window';

const p = document.createElement('p');
p.innerHTML =
  'Lorem ipsum dolor sit amet. Consectetur adipisicing elit, sed do eiusmod.';

// const imgCat = document.createElement('img');
// img.scr = 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png'
// imgCat.classList.add('img');

function openModal() {
  body.prepend(modal);
  modal.prepend(closeButton);
  modal.prepend(p);
  modal.prepend(h1);
  // modal.append(imgCat);
  body.prepend(overlay);
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  console.log(modal.classList);
}

openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);