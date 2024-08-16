'use strict';
{
  const lockElem = document.getElementById('lock');
  const spanElems = document.querySelectorAll('span');
  lockElem.addEventListener('click', () => {
    lockElem.classList.toggle('bi-lock-fill');
    lockElem.classList.toggle('bi-unlock-fill');
    spanElems.forEach((spanElem, index) => {
      spanElem.classList.toggle('red');
    });
  });
}

// document.querySelectorAll('span').forEach((span) => {
//   span.textContent = 'changed'
// });


//   参考回答
// const lockElem = document.getElementById('lock');
// const spanElems = document.querySelectorAll('span');
// lockElem.addEventListener('click', () => {
//   lockElem.classList.toggle('bi-lock-fill');
//   lockElem.classList.toggle('bi-unlock-fill');
//   spanElems.forEach((spanElem, index) => {
//       spanElem.classList.toggle('appear');
//     });
// });



