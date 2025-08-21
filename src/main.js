import { getImagesByQuery } from './js/pixabay-api';

// import {
//   createGallery,
//   clearGallery,
//   showLoader,
//   hideLoader,
// } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', e => {
  e.preventDefault();
  const query = e.currentTarget.elements['search-text'].value
    .trim()
    .toLowerCase();
  console.log(query);

  getImagesByQuery(query);
});
